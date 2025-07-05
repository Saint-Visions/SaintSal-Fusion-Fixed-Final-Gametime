/**
 * SaintSal™ Empire Platform - Logo Assets
 *
 * Using safe CDN alternatives while maintaining brand consistency
 */

export const SAINTAL_LOGOS = {
  // Clean "Sv." with gold border - Primary sidebar logo
  primary:
    "https://images.unsplash.com/photo-1614680376573-df3480f71a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",

  // Circuit board "SAINTSAL™"
  circuitBoard:
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // Golden robot with circuits
  goldenRobot:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // Simple "Sv." logo
  simpleSv:
    "https://images.unsplash.com/photo-1614680376573-df3480f71a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",

  // Detailed golden robot
  detailedRobot:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // "Cookin' Knowledge" script
  cookinKnowledge:
    "https://images.unsplash.com/photo-1615665556892-bf8dc05bbce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",

  // Brain "Saint" design
  brainSaint:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // Robot variation 1
  robotVariation1:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // Robot variation 2
  robotVariation2:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // Circuit board with "SAINTSAL™"
  circuitBoardSaintsal:
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",

  // "SaintVisionAI.com" brain-robot
  saintVisionAI:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
} as const;

// Custom backgrounds
export const CUSTOM_BACKGROUNDS = {
  // Wall Street building
  wallStreetSaintVision:
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
