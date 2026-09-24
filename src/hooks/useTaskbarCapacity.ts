import { useLayoutEffect, useRef, useState } from "react";
import type { RefObject } from "react";

export function useTaskbarCapacity(iconRef: RefObject<HTMLElement | null>, enabled: boolean) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [slots, setSlots] = useState(0);

  useLayoutEffect(() => {
    const strip = stripRef.current;
    const icon = iconRef.current;
    if (!strip || !icon || !enabled) return;

    const measure = () => {
      // The fixed social icon shares the app icons' CSS width.
      const iconWidth = icon.getBoundingClientRect().width;
      const availableWidth = strip.getBoundingClientRect().width;
      setSlots(iconWidth > 0 ? Math.max(0, Math.floor(availableWidth / iconWidth)) : 0);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(strip);
    observer.observe(icon);
    return () => observer.disconnect();
  }, [iconRef, enabled]);

  return { stripRef, slots };
}
