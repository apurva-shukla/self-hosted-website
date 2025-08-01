export interface KarakeepBookmark {
  id: string;
  createdAt: string;
  modifiedAt: string;
  title: string | null;
  archived: boolean;
  favourited: boolean;
  taggingStatus: string;
  summarizationStatus: string;
  note: string | null;
  summary: string | null;
  tags: KarakeepTag[];
  content: KarakeepContent;
  assets: KarakeepAsset[];
}

export interface KarakeepTag {
  id: string;
  name: string;
  attachedBy: string;
}

export interface KarakeepContent {
  type: "link" | "text" | "file";
  url: string;
  title: string;
  description: string;
  imageUrl: string | null;
  screenshotAssetId: string;
  favicon: string;
  htmlContent: string;
  crawledAt: string;
  author: string | null;
  publisher: string;
  datePublished: string | null;
  dateModified: string | null;
}

export interface KarakeepAsset {
  id: string;
  assetType: "screenshot" | string;
}

export interface KarakeepApiResponse {
  bookmarks: KarakeepBookmark[];
  nextCursor: string | null;
} 