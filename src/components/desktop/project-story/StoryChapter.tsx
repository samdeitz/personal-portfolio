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
      className="mt-12 border-t border-theme-foreground/18 pt-9 [&>[data-story-block=prose]+figure]:mt-7 [&>figure+[data-story-block=prose]]:mt-7"
    >
      <p className="mb-3.5 text-[.68rem] font-[650] tracking-[.16em] text-theme-focused uppercase">
        {chapter.eyebrow}
      </p>
      <h2 className="mb-[22px] font-[Georgia,serif] text-[clamp(1.8rem,3.5cqi,2.75rem)] leading-[1.12] font-medium tracking-[-.035em] text-balance">
        {chapter.title}
      </h2>
      {chapter.intro && (
        <p className="mb-7 max-w-[62ch] text-[clamp(1rem,1.7cqi,1.15rem)] text-theme-secondary">
          {chapter.intro}
        </p>
      )}
      <StoryBlocks blocks={chapter.blocks} />
    </section>
  );
}
