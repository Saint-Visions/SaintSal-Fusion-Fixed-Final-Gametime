// NUCLEAR OPTION: ELIMINATE ALL TIMES FONTS
function killTimesFonts() {
  // Override CSS-in-JS styles
  const observer = new MutationObserver(() => {
    document.querySelectorAll("*").forEach((el) => {
      if (
        el.style &&
        el.style.fontFamily &&
        el.style.fontFamily.includes("Times")
      ) {
        el.style.fontFamily =
          "Inter, system-ui, -apple-system, sans-serif !important";
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "css"],
  });

  // Kill all existing Times fonts
  setInterval(() => {
    document.querySelectorAll("*").forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      if (
        computedStyle.fontFamily &&
        computedStyle.fontFamily.includes("Times")
      ) {
        el.style.fontFamily =
          "Inter, system-ui, -apple-system, sans-serif !important";
      }
    });
  }, 100);
}

// Apply immediately and on load
if (typeof window !== "undefined") {
  killTimesFonts();
  document.addEventListener("DOMContentLoaded", killTimesFonts);
}
