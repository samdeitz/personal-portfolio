import { useLayoutEffect, useRef, type RefObject } from "react";

/** Slides new pages in without changing the cards' own transforms. */
export function usePageSlide(gridRef: RefObject<HTMLDivElement | null>, page: number) {
  const previousPage = useRef(page);

  useLayoutEffect(() => {
    const direction = Math.sign(page - previousPage.current);
    previousPage.current = page;
    const grid = gridRef.current;
    if (!grid || direction === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = grid.animate(
      [
        { transform: `translateX(${direction * 64}px)`, opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      { duration: 500, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    return () => animation.cancel();
  }, [page, gridRef]);
}
