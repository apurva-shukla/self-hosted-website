import fs from "fs";
import path from "path";
import { format } from "date-fns";
import {
  KarakeepApiResponse,
  KarakeepBookmark,
} from "../src/interfaces/karakeep";

// Using dotenv to load environment variables for local execution
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const API_BASE_URL = process.env.KARAKEEP_API_URL;
const API_KEY = process.env.KARAKEEP_API_KEY;
const LIST_ID = process.env.KARAKEEP_LIST_ID;

const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");

/**
 * Fetches bookmarks from the Karakeep API.
 */
const fetchBookmarks = async (): Promise<KarakeepBookmark[]> => {
  if (!API_BASE_URL || !API_KEY || !LIST_ID) {
    throw new Error(
      "Missing Karakeep environment variables. Please check your .env.local file."
    );
  }

  const requestUrl = `${API_BASE_URL}/api/v1/lists/${LIST_ID}/bookmarks`;
  console.log(`Fetching bookmarks from Karakeep list...`);

  const response = await fetch(requestUrl, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as KarakeepApiResponse;

  // Guard against an unexpected response shape from the API
  if (!data || !Array.isArray(data.bookmarks)) {
    console.warn(
      "Warning: The API response did not contain a valid 'bookmarks' array. Proceeding with an empty list."
    );
    return [];
  }

  console.log(`Successfully fetched ${data.bookmarks.length} bookmarks.`);
  return data.bookmarks;
};

/**
 * Creates a single weekly digest post from a list of bookmarks.
 */
const createWeeklyDigestPost = (bookmarks: KarakeepBookmark[]) => {
  const now = new Date();
  const postDate = format(now, "yyyy-MM-dd");
  const postTitleDate = format(now, "MM-dd-yy");
  const title = `${postTitleDate}: Internet goodies I read last week`;

  const slug = `weekly-digest-${postDate}`;
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    console.log(`Weekly digest for ${postDate} already exists. Skipping.`);
    return;
  }

  // Create the markdown content for the numbered list
  const markdownList = bookmarks
    .map((bookmark, index) => {
      const itemTitle = bookmark.content?.title || "Untitled";
      const itemUrl = bookmark.content?.url;
      if (!itemUrl) return null; // Skip if no URL

      // Escape brackets in title to prevent markdown parsing issues
      const escapedItemTitle = itemTitle
        .replace(/\[/g, "\\[")
        .replace(/\]/g, "\\]");
      
      let markdownItem = `${index + 1}. [${escapedItemTitle}](${itemUrl})`;

      // If a summary exists, add it as an indented sub-bullet.
      if (bookmark.summary && bookmark.summary.trim()) {
        const summaryText = bookmark.summary.replace(/\r?\n|\r/g, " ").trim();
        markdownItem += `\n    - ${summaryText}`;
      }

      return markdownItem;
    })
    .filter(Boolean) // Remove any null entries
    .join("\n\n"); // Use double newline for better spacing between list items

  if (!markdownList) {
    console.log("No valid bookmarks to create a post. Exiting.");
    return;
  }

  const frontmatter = `---
title: "${title}"
excerpt: "A collection of interesting articles and links I came across this week."
date: '${postDate}'
author:
  name: 'Apurva Shukla'
  picture: '/assets/profile/profile.jpg'
ogImage:
  url: ''
coverImage: ''
---
`;

  const fullContent = `${frontmatter}\n${markdownList}`;

  fs.writeFileSync(filePath, fullContent);
  console.log(`Successfully created weekly digest: ${slug}.md`);
};

/**
 * Main function to run the script.
 */
const syncWeeklyDigest = async () => {
  try {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
      fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
    }

    const allBookmarks = await fetchBookmarks();

    if (allBookmarks.length === 0) {
      console.log("No new bookmarks found. No digest will be created.");
      return;
    }

    // Filter bookmarks to only include those with the 'website' tag.
    const filteredBookmarks = allBookmarks.filter((bookmark) =>
      bookmark.tags.some((tag) => tag.name.toLowerCase() === "website")
    );

    if (filteredBookmarks.length === 0) {
      console.log(
        "No bookmarks with the 'website' tag found. No digest will be created."
      );
      return;
    }

    console.log(
      `Found ${filteredBookmarks.length} bookmarks with the 'website' tag.`
    );
    createWeeklyDigestPost(filteredBookmarks);
    console.log("\nWeekly digest sync complete!");
  } catch (error) {
    console.error("\nAn error occurred during the sync process:", error);
    process.exit(1);
  }
};

syncWeeklyDigest(); 