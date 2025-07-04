// ULTIMATE TIMES FONT DESTROYER - OVERRIDES CSS-IN-JS AT RENDER LEVEL
(function () {
  "use strict";

  // Override React's createElement to intercept CSS-in-JS
  if (typeof window !== "undefined" && window.React) {
    const originalCreateElement = window.React.createElement;
    window.React.createElement = function (type, props, ...children) {
      if (props && props.css && props.css.fontFamily === "Times") {
        props = {
          ...props,
          css: {
            ...props.css,
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          },
        };
      }
      return originalCreateElement.call(this, type, props, ...children);
    };
  }

  // Override styled-components and emotion
  const interceptStyleObject = (obj) => {
    if (obj && typeof obj === "object") {
      if (obj.fontFamily === "Times") {
        obj.fontFamily = "Inter, system-ui, -apple-system, sans-serif";
      }
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          interceptStyleObject(obj[key]);
        }
      });
    }
    return obj;
  };

  // Override Object.assign to catch style objects
  const originalAssign = Object.assign;
  Object.assign = function (target, ...sources) {
    sources.forEach((source) => interceptStyleObject(source));
    return originalAssign.call(this, target, ...sources);
  };

  // Override CSS.supports and CSSStyleDeclaration
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

  // Nuclear DOM mutation approach
  const killTimesInDOM = () => {
    document.querySelectorAll("*").forEach((el) => {
      // Check computed styles
      const computed = window.getComputedStyle(el);
      if (computed.fontFamily && computed.fontFamily.includes("Times")) {
        el.style.setProperty(
          "font-family",
          "Inter, system-ui, -apple-system, sans-serif",
          "important",
        );
      }

      // Override any inline styles
      if (el.style.fontFamily && el.style.fontFamily.includes("Times")) {
        el.style.setProperty(
          "font-family",
          "Inter, system-ui, -apple-system, sans-serif",
          "important",
        );
      }
    });
  };

  // Continuous monitoring
  setInterval(killTimesInDOM, 50);

  // MutationObserver for dynamic content
  const observer = new MutationObserver(killTimesInDOM);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });

  // Override requestAnimationFrame to catch style updates
  const originalRAF = window.requestAnimationFrame;
  window.requestAnimationFrame = function (callback) {
    return originalRAF.call(this, function () {
      killTimesInDOM();
      return callback.apply(this, arguments);
    });
  };

  console.log(
    "🔥 ULTIMATE TIMES FONT KILLER ACTIVATED! Inter font enforced at ALL levels! 🔥",
  );
})();
