import type { ProjectStoryContent } from "../../../content/story";
import type { ProjectMetadata } from "../../../projects/types";
import StoryNavigation from "./StoryNavigation";
import StoryOverview from "./StoryOverview";
import StoryChapter from "./StoryChapter";
import StoryTechnologyStack from "./StoryTechnologyStack";
import { useStoryNavigation } from "./useStoryNavigation";

export default function ProjectStory({ title, story, metadata }: {
  title: string;
  story: ProjectStoryContent;
  metadata?: ProjectMetadata;
}) {
  const { scrollRef, navRef, contentRef, active, sectionID, registerSection, updateActiveChapter, jumpTo } =
    useStoryNavigation(story.chapters);

  // This shell owns the scroll container and coordinates the focused story components.
  return (
    <article
      ref={scrollRef}
      onScroll={updateActiveChapter}
      className="project-story scrollbar-style h-full min-h-0 w-full shrink-0 overflow-y-auto font-sans leading-[1.65] text-theme-foreground [overflow-wrap:anywhere] [--story-nav-height:64px] [--story-top-space:20px] @min-[850px]:[--story-nav-height:0px] @min-[850px]:[--story-top-space:24px]"
      aria-label={`${title} project story`}
    >
      <div className="mx-auto max-w-7xl @min-[850px]:grid @min-[850px]:grid-cols-[250px_minmax(0,1fr)] @min-[850px]:items-start">
        <StoryNavigation
          navRef={navRef}
          chapters={story.chapters}
          active={active}
          sectionID={sectionID}
          jumpTo={jumpTo}
        />
        <div ref={contentRef} className="min-w-0 px-[clamp(18px,4cqi,48px)] pt-[var(--story-top-space)] pb-12">
          <StoryOverview sectionRef={registerSection("overview")} sectionID={sectionID("overview")} overview={story.overview} metadata={metadata} />
          {story.chapters.map((chapter) => (
            <StoryChapter sectionRef={registerSection(chapter.id)} key={chapter.id} chapter={chapter} sectionID={sectionID(chapter.id)} />
          ))}
          <StoryTechnologyStack technologies={metadata?.technologies} />
          <button
            type="button"
            className="story-back mt-7 cursor-pointer py-2 text-[.82rem] text-theme-foreground hover:underline"
            onClick={() => jumpTo("overview")}
          >
            Back to overview ↑
          </button>
        </div>
      </div>
    </article>
  );
}
