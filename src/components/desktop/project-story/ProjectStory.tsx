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
      className="project-story scrollbar-style h-full min-h-0 w-full shrink-0 overflow-y-auto leading-relaxed wrap-anywhere text-theme-foreground"
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
        <div ref={contentRef} className="grid min-w-0 gap-12 px-[clamp(1rem,4cqi,3rem)] pt-6 pb-12">
          <StoryOverview sectionRef={registerSection("overview")} sectionID={sectionID("overview")} overview={story.overview} metadata={metadata} />
          {story.chapters.map((chapter) => (
            <StoryChapter sectionRef={registerSection(chapter.id)} key={chapter.id} chapter={chapter} sectionID={sectionID(chapter.id)} />
          ))}
          <StoryTechnologyStack technologies={metadata?.technologies} />
          <button
            type="button"
            className="story-back justify-self-start cursor-pointer py-2 text-sm text-theme-foreground hover:underline"
            onClick={() => jumpTo("overview")}
          >
            Back to overview ↑
          </button>
        </div>
      </div>
    </article>
  );
}
