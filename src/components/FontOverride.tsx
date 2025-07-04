import { useEffect } from "react";

export default function FontOverride() {
  useEffect(() => {
    // Override Builder.io CSS-in-JS font styles
    const forceInterFont = () => {
      document.querySelectorAll("*").forEach((el) => {
        const computedStyle = window.getComputedStyle(el);
        if (
          computedStyle.fontFamily &&
          computedStyle.fontFamily.includes("Times")
        ) {
          (el as HTMLElement).style.setProperty(
            "font-family",
            "Inter, system-ui, -apple-system, sans-serif",
            "important",
          );
        }
      });
    };

    // Run immediately
    forceInterFont();

    // Run on DOM changes
    const observer = new MutationObserver(forceInterFont);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // Aggressive interval
    const interval = setInterval(forceInterFont, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
