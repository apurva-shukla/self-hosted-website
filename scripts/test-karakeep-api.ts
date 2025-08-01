// IMPORTANT: This is a temporary test script.
// The credentials here are hardcoded for ease of testing.
// In the final implementation for the GitHub Action, we will move these
// to secure environment variables.

const API_BASE_URL = "https://kara.ashukla.co";
const API_KEY = "ak1_6d3c9c2cd8ac61b29f6f_8850f437a9f2e1d235d5";
const LIST_ID = "l2yve5x86a0eq3e4g7jdhyx7";

// We can add query parameters here if needed, for example, to turn off including full content
// For now, we will use the defaults.
const queryParams = new URLSearchParams({
  includeContent: "true",
  limit: "100", // Let's set a high limit to get all recent items
});

const requestUrl = `${API_BASE_URL}/api/v1/lists/${LIST_ID}/bookmarks?${queryParams}`;

const testKarakeepApi = async () => {
  console.log(`Attempting to fetch bookmarks from: ${requestUrl}`);

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      // If the response is not successful, log the error for debugging
      console.error(
        `API request failed with status: ${response.status} ${response.statusText}`
      );
      const errorBody = await response.text();
      console.error("Error response body:", errorBody);
      return;
    }

    // If the request is successful, parse the JSON response
    const data = await response.json();

    console.log("\n✅ API request successful!");
    console.log("----------------------------------\n");
    console.log("Response data:");
    // Log the full data object, nicely formatted
    console.log(JSON.stringify(data, null, 2));

    if (data.items && Array.isArray(data.items)) {
      console.log(`\nFound ${data.items.length} bookmarks in the list.`);
    }
  } catch (error) {
    console.error("\n❌ An unexpected error occurred during the fetch operation:");
    console.error(error);
  }
};

// Run the asynchronous test function
testKarakeepApi();

export {}; // This makes TypeScript treat this file as a module. 