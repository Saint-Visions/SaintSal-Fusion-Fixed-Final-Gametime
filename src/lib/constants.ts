// Builder.io Space ID from environment variable only
export const BUILDER_SPACE_ID = import.meta.env.VITE_BUILDER_SPACE_ID;

// Helper function to create Builder.io image URLs
export const getBuilderImageUrl = (assetId: string, width: number = 800) => {
  if (!BUILDER_SPACE_ID) {
    console.warn("VITE_BUILDER_SPACE_ID not configured, using placeholder URL");
    return `https://via.placeholder.com/800x600/000000/FFD700?text=Configure+VITE_BUILDER_SPACE_ID`;
  }
  return `https://cdn.builder.io/api/v1/image/assets%2F${BUILDER_SPACE_ID}%2F${assetId}?format=webp&width=${width}`;
};
