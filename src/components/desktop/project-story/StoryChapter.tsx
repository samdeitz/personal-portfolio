import StoryDivider from "./StoryDivider";
import type { Ref } from "react";
import type { StoryChapter as Chapter } from "../../../content/story";
import { StoryBlocks } from "./StoryBlock";

export default function StoryChapter({ chapter, sectionID, sectionRef }: {
  sectionRef: Ref<HTMLElement>;
  chapter: Chapter;
  sectionID: string;
}) {
  return (
    <section
      ref={sectionRef}
      id={sectionID}
      tabIndex={-1}
      className="grid min-w-0 gap-8"
    >
      <StoryDivider />
      <header className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-xs font-semibold tracking-wide uppercase text-theme-focused">
            {chapter.eyebrow}
          </p>
          <h2 className="story-heading">
            {chapter.title}
          </h2>
        </div>
        {chapter.intro && (
          <p className="max-w-prose text-lg text-theme-secondary">
            {chapter.intro}
          </p>
        )}
      </header>
      <StoryBlocks blocks={chapter.blocks} />
    </section>
  );
}
