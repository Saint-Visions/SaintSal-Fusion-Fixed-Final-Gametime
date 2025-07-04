// Font fix utility to eliminate Times font from Builder.io components
export function applyInterFontFix() {
  // Override any inline styles with Times font
  function fixFonts() {
    const elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.fontFamily && style.fontFamily.includes("Times")) {
        el.style.fontFamily =
          "Inter, system-ui, -apple-system, sans-serif !important";
      }

      // Check inline styles
      if (el.style.fontFamily && el.style.fontFamily.includes("Times")) {
        el.style.fontFamily =
          "Inter, system-ui, -apple-system, sans-serif !important";
      }
    });
  }

  // Apply immediately
  fixFonts();

  // Apply on DOM changes
  const observer = new MutationObserver(() => {
    fixFonts();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"],
  });

  // Apply on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixFonts);
  }

  return observer;
}

// Auto-apply when script loads
if (typeof window !== "undefined") {
  applyInterFontFix();
}
