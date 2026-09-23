import { useEffect } from "react";

/** Listens for window keydown events while enabled. */
export function useKeyDown(
  handler: (event: KeyboardEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    const usingMouse = () => {
      document.body.style.pointerEvents = "auto";
    };

    window.addEventListener("mousemove", usingMouse);

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handler, enabled]);
}
