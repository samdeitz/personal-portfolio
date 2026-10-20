import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { StoryChapter } from "../../../content/story";

// Leave room for the sticky dropdown when the app window is narrow.
function getNavigationSpace(nav: HTMLElement | null) {
  const isCompact =
    nav &&
    getComputedStyle(nav).getPropertyValue("--story-compact").trim() === "1";
  return isCompact ? nav.getBoundingClientRect().height + 12 : 24;
}

export function useStoryNavigation(chapters: readonly StoryChapter[]) {
  const instanceID = useId();
  const scrollRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sections = useRef(new Map<string, HTMLElement>());
  const [active, setActive] = useState("overview");

  const sectionID = (id: string) => `${instanceID}-${id}`;

  // Each section gives us its element through a React ref.
  const registerSection = (id: string) => (element: HTMLElement | null) => {
    if (element) sections.current.set(id, element);
    else sections.current.delete(id);
  };

  const updateActiveChapter = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    // The window's opening scale animation distorts screen coordinates.
    // At the top we already know the active section, so skip those measurements.
    if (container.scrollTop <= 0) {
      setActive("overview");
      return;
    }

    const readingLine =
      container.getBoundingClientRect().top +
      getNavigationSpace(navRef.current) +
      12;
    let current = "overview";

    // Highlight the last chapter heading that has passed the reading line.
    for (const chapter of chapters) {
      const section = sections.current.get(chapter.id);
      if (section && section.getBoundingClientRect().top <= readingLine)
        current = chapter.id;
    }

    // A short final chapter might never reach that line, even at the bottom.
    const atBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 4;
    if (container.scrollTop > 0 && atBottom)
      current = chapters.at(-1)?.id ?? "overview";
    setActive(current);
  }, [chapters]);

  // Recheck when the app resizes, an image loads, or expandable content changes height.
  useEffect(() => {
    const observer = new ResizeObserver(updateActiveChapter);
    if (scrollRef.current) observer.observe(scrollRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    updateActiveChapter();
    return () => observer.disconnect();
  }, [updateActiveChapter]);

  const jumpTo = (id: string) => {
    const container = scrollRef.current;
    const section = sections.current.get(id);
    if (!container || !section) return;

    // Convert the section's screen position into a position inside the scroll area.
    const sectionTop =
      section.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    container.scrollTo({
      top:
        id === "overview" ? 0 : sectionTop - getNavigationSpace(navRef.current),
      behavior: reduceMotion ? "instant" : "smooth",
    });
    section.focus({ preventScroll: true });
  };

  return {
    scrollRef,
    navRef,
    contentRef,
    active,
    sectionID,
    registerSection,
    updateActiveChapter,
    jumpTo,
  };
}
