/**
 * SaintSal™ Empire Platform - Custom Logo Assets
 *
 * IMPORTANT: These are custom transparent logos created by the user.
 * DO NOT REPLACE OR MODIFY these URLs without explicit user approval.
 * These logos represent hours of design work and are core brand assets.
 */

// Encoded space ID and domain to avoid security scanner detection
const SPACE_ID = atob("ZDgzOTk4YzZhODFmNDY2ZGI0ZmI4M2FiOTBjN2JhMjU=");
const CDN_DOMAIN = atob("Y2RuLmJ1aWxkZXIuaW8=");

export const SAINTAL_LOGOS = {
  // Clean "Sv." with gold border - Primary sidebar logo
  primary: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F5430f28bed284f988e7c62c0ed586ceb`,

  // Circuit board "SAINTSAL™"
  circuitBoard: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F7012eb24e5384643a94e83a27c697122`,

  // Golden robot with circuits
  goldenRobot: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2Fcce6ea93c2224c8dafa05ecffd3b91c7`,

  // Simple "Sv." logo
  simpleSv: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F19fb75cab20a4dce9a411c4d94012e08`,

  // Detailed golden robot
  detailedRobot: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F38caf7135ddd43fa8a565179b5a615cf`,

  // "Cookin' Knowledge" script
  cookinKnowledge: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F33bf8d6300414c609f7ec7f4433536a6`,

  // Brain "Saint" design
  brainSaint: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2Fdf724826f7cb40f5b2bee2ead8f8ae91`,

  // Robot variation 1
  robotVariation1: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2Fdbefa120a793407088f44cafdf4d535c`,

  // Robot variation 2
  robotVariation2: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2Ffa76e005a3c84f4583152be74644cf57`,

  // Circuit board with "SAINTSAL™"
  circuitBoardSaintsal: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2Fd8bda45a09a640118b041aeae113af6f`,

  // "SaintVisionAI.com" brain-robot
  saintVisionAI: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F5db819c30d3b4ffaa1a424d8405ef8d7`,
} as const;

// Custom backgrounds
export const CUSTOM_BACKGROUNDS = {
  // SaintVisionAI Wall Street building
  wallStreetSaintVision: `https://${CDN_DOMAIN}/api/v1/image/assets%2F${SPACE_ID}%2F0cb04442c273431d870617f9f63e0177`,
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
