#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

console.log("🔐 SAINTSAL™ PushGate™ QA Enforcement Active...\n");

let violations = [];
let warningCount = 0;

// Colors for terminal output
const colors = {
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function addViolation(type, file, message) {
  violations.push({ type, file, message });
  console.log(`${colors.red}🛑 ${type}: ${message}${colors.reset}`);
  console.log(`${colors.yellow}   📁 ${file}${colors.reset}\n`);
}

function addWarning(type, file, message) {
  warningCount++;
  console.log(`${colors.yellow}⚠️  ${type}: ${message}${colors.reset}`);
  console.log(`${colors.blue}   📁 ${file}${colors.reset}\n`);
}

// Check for multiple background assets in single components
function checkBackgroundAssets() {
  console.log(
    `${colors.blue}🖼️  Checking background asset compliance...${colors.reset}`,
  );

  const componentFiles = glob.sync("src/**/*.{tsx,jsx}", {
    cwd: process.cwd(),
  });

  componentFiles.forEach((file) => {
    try {
      const content = fs.readFileSync(file, "utf8");

      // Count background image declarations
      const bgImageMatches = content.match(/backgroundImage.*?url\(/g) || [];
      const bgMatches = content.match(/background.*?url\(/g) || [];
      const imgTags = content.match(/<img[^>]*src=/g) || [];

      const totalBackgrounds = bgImageMatches.length + bgMatches.length;

      // Check for stacked backgrounds in same component
      if (totalBackgrounds > 2) {
        addViolation(
          "ASSET_STACKING",
          file,
          `${totalBackgrounds} background assets detected - Empire standard is 1 bold asset per section`,
        );
      }

      // Check for excessive img tags that might indicate visual clutter
      if (imgTags.length > 5) {
        addWarning(
          "IMAGE_CLUTTER",
          file,
          `${imgTags.length} image tags found - consider consolidation`,
        );
      }
    } catch (error) {
      // Silently skip files that can't be read
    }
  });
}

// Check contrast compliance
function checkContrastCompliance() {
  console.log(
    `${colors.blue}🎨 Checking contrast compliance...${colors.reset}`,
  );

  const componentFiles = glob.sync("src/**/*.{tsx,jsx}", {
    cwd: process.cwd(),
  });

  componentFiles.forEach((file) => {
    try {
      const content = fs.readFileSync(file, "utf8");

      // Look for potential contrast violations
      const grayOnGrayPatterns = [
        /color.*?gray-400.*?bg-gray-800/,
        /text-gray-400.*?bg-gray-700/,
        /color.*?#6B7280.*?background.*?#374151/,
      ];

      grayOnGrayPatterns.forEach((pattern) => {
        if (pattern.test(content)) {
          addViolation(
            "CONTRAST_VIOLATION",
            file,
            "Low contrast detected - text may not be readable",
          );
        }
      });

      // Check for missing dark overlays on background images
      if (
        content.includes("backgroundImage") &&
        !content.includes("overlay") &&
        !content.includes("gradient")
      ) {
        addWarning(
          "MISSING_OVERLAY",
          file,
          "Background image without overlay - check text readability",
        );
      }
    } catch (error) {
      // Silently skip files that can't be read
    }
  });
}

// Check branding consistency
function checkBrandingConsistency() {
  console.log(
    `${colors.blue}🔱 Checking branding consistency...${colors.reset}`,
  );

  const componentFiles = glob.sync("src/**/*.{tsx,jsx}", {
    cwd: process.cwd(),
  });

  componentFiles.forEach((file) => {
    try {
      const content = fs.readFileSync(file, "utf8");

      // Check for HACP™ mentions without patent number
      const hacpMatches = content.match(/HACP™/g) || [];
      const patentMatches = content.match(/10,290,222/g) || [];

      if (hacpMatches.length > 0 && patentMatches.length === 0) {
        addWarning(
          "MISSING_PATENT",
          file,
          'HACP™ mentioned without patent number - consider adding "U.S. Patent No. 10,290,222"',
        );
      }

      // Check for inconsistent gold color usage
      const goldVariations = [
        /#FFD700/,
        /#FFC700/,
        /rgb\(255, 199, 0\)/,
        /rgb\(255, 215, 0\)/,
      ];

      let goldCount = 0;
      goldVariations.forEach((pattern) => {
        const matches = content.match(pattern) || [];
        goldCount += matches.length;
      });

      if (goldCount > 3) {
        addWarning(
          "GOLD_INCONSISTENCY",
          file,
          `${goldCount} different gold color values - standardize to Empire Gold (#FFC700)`,
        );
      }
    } catch (error) {
      // Silently skip files that can't be read
    }
  });
}

// Check layout and spacing
function checkLayoutCompliance() {
  console.log(`${colors.blue}🧱 Checking layout compliance...${colors.reset}`);

  const componentFiles = glob.sync("src/**/*.{tsx,jsx}", {
    cwd: process.cwd(),
  });

  componentFiles.forEach((file) => {
    try {
      const content = fs.readFileSync(file, "utf8");

      // Check for missing z-index on overlays
      if (
        content.includes("absolute") &&
        content.includes("backgroundImage") &&
        !content.includes("zIndex")
      ) {
        addWarning(
          "MISSING_Z_INDEX",
          file,
          "Absolute positioned background without z-index - may cause layering issues",
        );
      }

      // Check for missing backdrop filters on glass morphism elements
      if (content.includes("backdrop") && !content.includes("backdropFilter")) {
        addWarning(
          "INCOMPLETE_GLASS",
          file,
          "Backdrop blur effect incomplete - ensure backdropFilter is applied",
        );
      }
    } catch (error) {
      // Silently skip files that can't be read
    }
  });
}

// Check specific page requirements
function checkPageRequirements() {
  console.log(
    `${colors.blue}📄 Checking page-specific requirements...${colors.reset}`,
  );

  // Check signup page
  const signupFile = "src/pages/signup.tsx";
  if (fs.existsSync(signupFile)) {
    const content = fs.readFileSync(signupFile, "utf8");

    if (!content.includes("Become a Saint")) {
      addViolation(
        "MISSING_CTA",
        signupFile,
        'Missing "Become a Saint" CTA copy',
      );
    }

    if (!content.includes("SaintSal™ AI doesn't just assist")) {
      addWarning("MISSING_TAGLINE", signupFile, "Missing primary tagline");
    }
  }

  // Check partnertech page
  const partnertechFile = "src/pages/partnertech.tsx";
  if (fs.existsSync(partnertechFile)) {
    const content = fs.readFileSync(partnertechFile, "utf8");

    if (!content.includes("executes actions")) {
      addWarning(
        "MISSING_EXECUTION_COPY",
        partnertechFile,
        'Missing "executes actions" messaging',
      );
    }
  }

  // Check console page
  const consoleFile = "src/pages/console.tsx";
  if (fs.existsSync(consoleFile)) {
    const content = fs.readFileSync(consoleFile, "utf8");

    if (
      !content.includes("SaintVision") &&
      !content.includes("Dual Cognitive")
    ) {
      addWarning(
        "MISSING_AI_BRANDING",
        consoleFile,
        "Missing AI companion branding",
      );
    }
  }
}

// Main execution
async function runPushGateCheck() {
  console.log(`${colors.bold}${colors.magenta}`);
  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║                    SAINTSAL™ PushGate™                   ║");
  console.log("║              Empire-Grade QA Enforcement                ║");
  console.log("╚══════════════════════════════════════════════════════════╝");
  console.log(`${colors.reset}\n`);

  checkBackgroundAssets();
  checkContrastCompliance();
  checkBrandingConsistency();
  checkLayoutCompliance();
  checkPageRequirements();

  console.log(`${colors.blue}📊 PushGate™ Analysis Complete${colors.reset}\n`);

  if (violations.length > 0) {
    console.log(
      `${colors.red}${colors.bold}❌ PUSH BLOCKED BY SAINTSAL™ PushGate™${colors.reset}\n`,
    );
    console.log(
      `${colors.red}${violations.length} critical violation(s) detected:${colors.reset}\n`,
    );

    violations.forEach((violation, index) => {
      console.log(
        `${colors.red}${index + 1}. ${violation.type}${colors.reset}`,
      );
      console.log(`   ${violation.message}`);
      console.log(`   📁 ${violation.file}\n`);
    });

    console.log(
      `${colors.yellow}🔧 Fix these issues or use --no-verify to override (NOT RECOMMENDED)${colors.reset}`,
    );
    console.log(
      `${colors.blue}💡 SaintSal™ expects empire precision. Not chaos.${colors.reset}\n`,
    );

    process.exit(1);
  } else {
    console.log(
      `${colors.green}✅ All checks passed! Empire standards maintained.${colors.reset}`,
    );

    if (warningCount > 0) {
      console.log(
        `${colors.yellow}⚠️  ${warningCount} warning(s) noted for future optimization.${colors.reset}`,
      );
    }

    console.log(
      `${colors.blue}🚀 Push approved. Your empire remains pristine.${colors.reset}\n`,
    );
    process.exit(0);
  }
}

// Handle errors gracefully
process.on("uncaughtException", (error) => {
  console.log(
    `${colors.red}💥 PushGate™ encountered an error: ${error.message}${colors.reset}`,
  );
  console.log(
    `${colors.yellow}🔧 Allowing push to proceed...${colors.reset}\n`,
  );
  process.exit(0);
});

runPushGateCheck();
