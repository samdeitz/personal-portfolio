import { useCallback, useLayoutEffect, useRef, useState } from "react";

/** Measures layout boxes, so transforms such as the card shake do not affect paging. */
export function useGridCapacity(columns: number) {
  const gridRef = useRef<HTMLDivElement>(null);
  const measuredCard = useRef<HTMLDivElement | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);
  // Paging replaces the first card. Ref attachment must not itself update state.
  const cardRef = useCallback((card: HTMLDivElement | null) => {
    const observer = resizeObserver.current;
    if (measuredCard.current) observer?.unobserve(measuredCard.current);
    measuredCard.current = card;
    if (card) observer?.observe(card);
  }, []);
  const [rows, setRows] = useState(1);
  const [rowHeight, setRowHeight] = useState(0);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const card = measuredCard.current;
      if (!card || !grid.contains(card)) return;
      const cardHeight = card.offsetHeight;
      // A detached or hidden card cannot provide a usable page capacity.
      if (cardHeight <= 0) return;
      setRowHeight(cardHeight);
      const gap = parseFloat(getComputedStyle(grid).rowGap) || 0;
      setRows(
        Math.max(1, Math.floor((grid.clientHeight + gap) / (cardHeight + gap))),
      );
    };

    const observer = new ResizeObserver(measure);
    resizeObserver.current = observer;
    observer.observe(grid);
    if (measuredCard.current) observer.observe(measuredCard.current);
    measure();
    return () => {
      observer.disconnect();
      resizeObserver.current = null;
    };
  }, [columns]);

  return { gridRef, cardRef, rows, rowHeight, pageSize: columns * rows };
}
