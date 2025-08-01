---
title: "Automating My Blog's Weekly Digest with a Self-Hosted API and GitHub Actions"
excerpt: "A technical walkthrough of how I built a completely automated pipeline to fetch bookmarks from my personal Karakeep instance and publish them as a weekly digest post on my Next.js blog, using a TypeScript script and a GitHub Action."
date: '2025-07-31'
author:
  name: 'Apurva Shukla'
  picture: '/assets/profile/profile.jpg'
ogImage:
  url: ''
coverImage: ''
---

I'm a big believer in automating repetitive tasks. One of my weekly routines was to collate a list of interesting articles I'd bookmarked and share them on my blog. This manual process of copy-pasting links was tedious and error-prone. I knew there had to be a better way. Almost all of code you will see below was vibe-coded in Cursor in around an hour. I had to feed it the API docs, validate the API responses, and de-bug here and there. Overall, I would say that it did 95% of the work for me. It also guided me in creating my first ever GitHub Action.

I use a self-hosted instance of [Karakeep](https://github.com/karakeep/karakeep) running on my home server to save and tag articles. The goal was to build a system that could automatically fetch these bookmarks every week and create a new digest post on this Next.js blog.

### The Initial Plan and the Serverless Hurdle

My first thought was to use a simple [Vercel Cron](https://vercel.com/docs/cron-jobs) Job. The idea was to trigger an API route in my Next.js app every Sunday. This route would fetch the data from the Karakeep API and then ... yikes, after around an hour of working, I realized that it was not going to work.

I learnt a valuable lesson of a serverless architecture: the filesystem is read-only. A Next.js API route running on Vercel cannot write a new markdown file to the `/_posts` directory of the project's Git repository. This approach was a dead end. The content for this blog is generated from static markdown files at build time, so I needed a process that could add a new file to the source code itself.

### The Solution: Git as a Database, Driven by GitHub Actions

The most robust solution was to treat my Git repository as the database. The workflow would be:
1.  Run a script on a schedule.
2.  The script fetches data using the Karakeep API 
3.  A node script generates a new markdown file.
4.  The script commits this new file back to the repository.
5.  This new commit triggers a fresh deployment on Vercel (this happens automatically with Vercel's Git-based deployments)

### Step 1: The Data-Fetching Script

I created a TypeScript script, `scripts/sync-bookmarks.ts`, to handle the core logic.

First, it fetches bookmarks from my specific Karakeep list. The script uses `dotenv` to load credentials from a `.env.local` file during local development.

```typescript
const fetchBookmarks = async (): Promise<KarakeepBookmark[]> => {
  const requestUrl = `${API_BASE_URL}/api/v1/lists/${LIST_ID}/bookmarks`;

  const response = await fetch(requestUrl, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });
  // ... error handling ...
  const data = (await response.json()) as KarakeepApiResponse;
  return data.bookmarks;
};
```
I don't want to upload all the random stuff I read, so this scipt filters these bookmarks for ones that I explicitly tagged with `website`.

```typescript
const filteredBookmarks = allBookmarks.filter((bookmark) =>
  bookmark.tags.some((tag) => tag.name.toLowerCase() === "website")
);
```

Finally, it formats the filtered bookmarks into a single markdown file for the week. The title is generated dynamically with the current date, and the body is a numbered list of links. If a bookmark has a summary, it's included as an indented sub-bullet.

```typescript
const markdownList = bookmarks
  .map((bookmark, index) => {
    let markdownItem = `${index + 1}. [${escapedItemTitle}](${itemUrl})`;

    if (bookmark.summary) {
      markdownItem += `\n    - ${bookmark.summary}`;
    }
    return markdownItem;
  })
  .join("\n\n");
```

### Step 2: The GitHub Action Workflow

With the script ready, the next step was to automate it. I created a GitHub Actions workflow file at `.github/workflows/weekly-digest.yml`.

The workflow is configured to run every Sunday at midnight UTC, with `workflow_dispatch` added to allow for manual runs from the GitHub UI.

```yaml
on:
  schedule:
    - cron: '0 0 * * 0' # Every Sunday at midnight UTC
  workflow_dispatch: {}
```

The job itself is straightforward:
1.  **Check out the code:** `actions/checkout@v4`
2.  **Set up Node.js:** `actions/setup-node@v4`
3.  **Install dependencies:** `npm install`
4.  **Run the script:** `npx ts-node scripts/sync-bookmarks.ts`. The Karakeep credentials are provided securely via GitHub Actions Secrets, which are mapped to environment variables.
5.  **Commit the new file:** This is the magic step. I used the `stefanzweifel/git-auto-commit-action` which automatically detects if new files were created by the script and, if so, commits them to the `main` branch.

Here's the core of the job definition:

```yaml
jobs:
  build-and-commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run sync script
        env:
          KARAKEEP_API_URL: ${{ secrets.KARAKEEP_API_URL }}
          KARAKEEP_API_KEY: ${{ secrets.KARAKEEP_API_KEY }}
          KARAKEEP_LIST_ID: ${{ secrets.KARAKEEP_LIST_ID }}
        run: npx ts-node scripts/sync-bookmarks.ts

      - name: Commit and push if changed
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: weekly digest post for {{date}}"
          commit_options: '--no-verify --signoff'
          file_pattern: '_posts/*.md'
```
*(Note: I haven't implemented the GitHub action part yet, but this is what it will look like)*

### A Note on `ts-node` and Next.js
A final hurdle was getting `ts-node` to work correctly with the Next.js project's TypeScript configuration. The `"moduleResolution": "bundler"` setting in `tsconfig.json` is great for Next.js builds but can cause issues for standalone scripts. The fix was to provide a `ts-node`-specific override in `tsconfig.json` to use the `CommonJS` module system for script execution.

```json
{
  //... compilerOptions
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  },
  //... include/exclude
}
```

### Final Result

Now, every Sunday, this workflow runs automatically. It fetches my bookmarks, creates a new digest post, and commits it. Vercel sees the new commit and triggers a deployment. By the time I wake up, a new "Internet Goodies" post is live on my blog, all without any manual intervention. It's a clean, robust, and entirely self-contained system that embraces the Git-as-a-CMS philosophy. 