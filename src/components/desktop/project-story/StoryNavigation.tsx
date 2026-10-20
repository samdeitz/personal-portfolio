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
  navRef, chapters, active, sectionID, jumpTo,
}: StoryNavigationProps) {
  const navigation = [{ id: "overview", label: "Overview" }, ...chapters];
  return (
    <nav
      ref={navRef}
      className="story-nav sticky top-0 z-2 border-b border-theme-foreground/15 bg-theme-page px-5 py-3.5 [--story-compact:1] @min-[850px]:max-h-[100cqh] @min-[850px]:overflow-y-auto @min-[850px]:border-r @min-[850px]:border-b-0 @min-[850px]:border-theme-foreground/12 @min-[850px]:px-3.5 @min-[850px]:py-[34px] @min-[850px]:[--story-compact:0]"
      aria-label="Project chapters"
    >
      <p className="mb-3.5 hidden text-[.68rem] font-[650] tracking-[.16em] text-theme-secondary uppercase @min-[850px]:block">
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
              <span className="font-mono text-[.68rem]">
                {String(index).padStart(2, "0")}
              </span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
      <label className="flex items-center gap-3.5 text-[.78rem] tracking-[.08em] uppercase @min-[850px]:hidden">
        Jump to
        <select
          className="min-w-0 flex-1 rounded-[5px] bg-theme-surface p-2 text-inherit tracking-normal text-theme-foreground normal-case"
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
