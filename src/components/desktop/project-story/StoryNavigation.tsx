import type { Ref } from "react";
import type { StoryChapter } from "../../../content/story";

interface StoryNavigationProps {
  navRef: Ref<HTMLElement>;
  chapters: readonly StoryChapter[];
  active: string;
  sectionID: (id: string) => string;
  jumpTo: (id: string) => void;
}

// Both navigation presentations share the same chapter list and active state.
export default function StoryNavigation({
  navRef,
  chapters,
  active,
  sectionID,
  jumpTo,
}: StoryNavigationProps) {
  const navigation = [{ id: "overview", label: "Overview" }, ...chapters];
  return (
    <nav
      ref={navRef}
      className="story-nav sticky top-0 z-2 bg-theme-page p-4 border-b border-theme-foreground/20
        [--story-compact:1] @min-[850px]:[--story-compact:0]
        @min-[850px]:max-h-[100cqh] @min-[850px]:overflow-y-auto
        @min-[850px]:border-b-0 @min-[850px]:border-r @min-[850px]:py-8"
      aria-label="Project chapters"
    >
      <p className="text-xs font-semibold tracking-wide uppercase mb-4 hidden text-theme-secondary @min-[850px]:block">
        In this story
      </p>
      <ol className="hidden list-none p-0 @min-[850px]:block">
        {navigation.map((chapter, index) => (
          <li key={chapter.id}>
            <a
              className="flex items-baseline gap-3 border-l-2 border-transparent px-2 py-3 text-xs text-theme-secondary no-underline hover:text-theme-foreground aria-[current=location]:border-theme-focused aria-[current=location]:bg-theme-focused/8 aria-[current=location]:text-theme-foreground"
              href={`#${sectionID(chapter.id)}`}
              aria-current={active === chapter.id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                jumpTo(chapter.id);
              }}
            >
              <span className="font-mono text-xs">
                {String(index).padStart(2, "0")}
              </span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
      <label className="flex items-center gap-4 text-sm tracking-wide uppercase @min-[850px]:hidden">
        Jump to
        <select
          className="min-w-0 flex-1 rounded bg-theme-surface p-2 text-inherit tracking-normal text-theme-foreground normal-case"
          value={active}
          onChange={(event) => jumpTo(event.target.value)}
        >
          {navigation.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.label}
            </option>
          ))}
        </select>
      </label>
    </nav>
  );
}
