import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ offset = 70 }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // បើមាន hash (#resume ឧទាហរណ៍)
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -offset; // ជំហាន offset (navbar height)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // បើគ្មាន hash, scroll ទៅលើកំពូល
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, offset]);

  return null;
}

export default ScrollToTop;
