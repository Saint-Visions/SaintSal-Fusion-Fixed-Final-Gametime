// NUCLEAR OPTION: ELIMINATE ALL TIMES FONTS INCLUDING CSS-IN-JS
function killTimesFonts() {
  // Kill CSS-in-JS Times fonts (like page builder content)
  const killCSSinJS = () => {
    document.querySelectorAll("*").forEach((el) => {
      // Check for CSS-in-JS objects
      if (el.props && el.props.css && el.props.css.fontFamily === "Times") {
        el.props.css.fontFamily = "Inter, system-ui, -apple-system, sans-serif";
      }

      // Override any Times font styles
      if (el.style) {
        if (el.style.fontFamily && el.style.fontFamily.includes("Times")) {
          el.style.setProperty(
            "font-family",
            "Inter, system-ui, -apple-system, sans-serif",
            "important",
          );
        }
      }

      // Check computed styles
      const computedStyle = window.getComputedStyle(el);
      if (
        computedStyle.fontFamily &&
        computedStyle.fontFamily.includes("Times")
      ) {
        el.style.setProperty(
          "font-family",
          "Inter, system-ui, -apple-system, sans-serif",
          "important",
        );
      }
    });
  };

  // Override CSS-in-JS styles with MutationObserver
  const observer = new MutationObserver(() => {
    killCSSinJS();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "css", "class"],
  });

  // Aggressive interval checking
  setInterval(killCSSinJS, 50);

  // Override React/CSS-in-JS at the style application level
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

// Apply immediately and on load
if (typeof window !== "undefined") {
  killTimesFonts();
  document.addEventListener("DOMContentLoaded", killTimesFonts);
}
