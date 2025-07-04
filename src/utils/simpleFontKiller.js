// SIMPLE FONT KILLER - NO RECURSION
(function () {
  "use strict";

  // Simple DOM-based font override
  const killTimesFonts = () => {
    try {
      document.querySelectorAll("*").forEach((el) => {
        const computed = window.getComputedStyle(el);
        if (computed.fontFamily && computed.fontFamily.includes("Times")) {
          el.style.setProperty(
            "font-family",
            "Inter, system-ui, -apple-system, sans-serif",
            "important",
          );
        }
      });
    } catch (e) {
      // Fail silently
    }
  };

  // Override CSSStyleDeclaration safely
  if (typeof CSSStyleDeclaration !== "undefined") {
    const originalSetProperty = CSSStyleDeclaration.prototype.setProperty;
    CSSStyleDeclaration.prototype.setProperty = function (
      property,
      value,
      priority,
    ) {
      if (property === "font-family" && value && value.includes("Times")) {
        value = "Inter, system-ui, -apple-system, sans-serif";
      }
      return originalSetProperty.call(this, property, value, priority);
    };
  }

  // Simple interval-based checking
  setInterval(killTimesFonts, 200);

  // MutationObserver for new elements
  if (typeof MutationObserver !== "undefined") {
    const observer = new MutationObserver(killTimesFonts);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  console.log("🔥 SIMPLE FONT KILLER ACTIVATED! 🔥");
})();
