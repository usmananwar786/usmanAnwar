import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls window to top on every route change AND on initial mount,
 * so the portfolio always starts from the Hero section.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration so reloads also start at top
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
