// Public Builder.io Space ID for CDN assets
// This is a public identifier, not a secret - it's used in CDN URLs
export const BUILDER_SPACE_ID = "d83998c6a81f466db4fb83ab90c7ba25";

// Helper function to create Builder.io image URLs
export const getBuilderImageUrl = (assetId: string, width: number = 800) => {
  return `https://cdn.builder.io/api/v1/image/assets%2F${BUILDER_SPACE_ID}%2F${assetId}?format=webp&width=${width}`;
};
