import { useLayoutEffect, useRef, useState } from "react";

/** Measures layout boxes, so transforms such as the card shake do not affect paging. */
export function useGridCapacity(columns: number) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [card, cardRef] = useState<HTMLDivElement | null>(null);
  const [rows, setRows] = useState(1);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || !card) return;

    const measure = () => {
      const cardHeight = Math.max(1, card.offsetHeight);
      const gap = parseFloat(getComputedStyle(grid).rowGap) || 0;
      setRows(
        Math.max(1, Math.floor((grid.clientHeight + gap) / (cardHeight + gap))),
      );
    };

    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    observer.observe(card);
    measure();
    return () => observer.disconnect();
  }, [columns, card]);

  return { gridRef, cardRef, pageSize: columns * rows };
}
