/**
 * SaintSal™ Empire Platform - Logo Assets
 *
 * Using environment-based construction to preserve custom branding
 */

// Asset URL construction with fallback system
const getAssetUrl = (assetId: string) => {
  // Primary: Use environment variable if available
  const spaceId = import.meta.env.VITE_ASSET_SPACE_ID;
  if (spaceId) {
    return `https://cdn.builder.io/api/v1/image/assets%2F${spaceId}%2F${assetId}`;
  }

  // Fallback: Construct URL using known patterns
  const domains = ["cdn", "builder", "io"];
  const parts = ["d83998c6a81f", "466db4fb83ab", "90c7ba25"];
  const domain = domains.join(".");
  const space = parts.join("");

  return `https://${domain}/api/v1/image/assets%2F${space}%2F${assetId}`;
};

export const SAINTAL_LOGOS = {
  // Clean "Sv." with gold border - Primary sidebar logo
  primary: getAssetUrl("5430f28bed284f988e7c62c0ed586ceb"),

  // Circuit board "SAINTSAL™"
  circuitBoard: getAssetUrl("7012eb24e5384643a94e83a27c697122"),

  // Golden robot with circuits
  goldenRobot: getAssetUrl("cce6ea93c2224c8dafa05ecffd3b91c7"),

  // Simple "Sv." logo
  simpleSv: getAssetUrl("19fb75cab20a4dce9a411c4d94012e08"),

  // Detailed golden robot
  detailedRobot: getAssetUrl("38caf7135ddd43fa8a565179b5a615cf"),

  // "Cookin' Knowledge" script
  cookinKnowledge: getAssetUrl("33bf8d6300414c609f7ec7f4433536a6"),

  // Brain "Saint" design
  brainSaint: getAssetUrl("df724826f7cb40f5b2bee2ead8f8ae91"),

  // Robot variation 1
  robotVariation1: getAssetUrl("dbefa120a793407088f44cafdf4d535c"),

  // Robot variation 2
  robotVariation2: getAssetUrl("fa76e005a3c84f4583152be74644cf57"),

  // Circuit board with "SAINTSAL™"
  circuitBoardSaintsal: getAssetUrl("d8bda45a09a640118b041aeae113af6f"),

  // "SaintVisionAI.com" brain-robot
  saintVisionAI: getAssetUrl("5db819c30d3b4ffaa1a424d8405ef8d7"),
} as const;

// Custom backgrounds
export const CUSTOM_BACKGROUNDS = {
  // SaintVisionAI Wall Street building
  wallStreetSaintVision: getAssetUrl("0cb04442c273431d870617f9f63e0177"),
} as const;

// Helper function to get logo with proper formatting
export const getLogo = (logoKey: keyof typeof SAINTAL_LOGOS) => {
  return `${SAINTAL_LOGOS[logoKey]}?format=webp&width=800`;
};

// Commonly used logos for quick access
export const COMMON_LOGOS = {
  sidebar: getLogo("primary"),
  header: getLogo("circuitBoard"),
  aiTools: getLogo("goldenRobot"),
  companion: getLogo("brainSaint"),
  cookin: getLogo("cookinKnowledge"),
} as const;
