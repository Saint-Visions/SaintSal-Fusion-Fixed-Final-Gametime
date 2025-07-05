// Public Builder.io Space ID for CDN assets from environment
export const BUILDER_SPACE_ID =
  import.meta.env.VITE_BUILDER_SPACE_ID || "public-space-id-not-configured";

// Helper function to create Builder.io image URLs
export const getBuilderImageUrl = (assetId: string, width: number = 800) => {
  return `https://cdn.builder.io/api/v1/image/assets%2F${BUILDER_SPACE_ID}%2F${assetId}?format=webp&width=${width}`;
};
