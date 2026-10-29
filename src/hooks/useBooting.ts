import { useState } from "react";

export default function useBooting() {
  const [booting, setBooting] = useState(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return false;
    try {
      return sessionStorage.getItem("booted") !== "true";
    } catch {
      return true;
    }
  });
  return { booting, setBooting };
}
