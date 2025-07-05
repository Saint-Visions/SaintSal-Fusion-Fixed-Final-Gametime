// Environment configuration for SaintSal™ Empire Platform
export const APP_CONFIG = {
  name: "SaintSal™ Empire",
  version: "1.0.0",
  environment: import.meta.env.MODE || "development",
};

// Helper function for placeholder images
export const getPlaceholderImage = (
  width: number = 800,
  height: number = 600,
) => {
  return `https://via.placeholder.com/${width}x${height}/000000/FFD700?text=SaintSal`;
};
