import type { Ref } from "react";
import type { ProjectStoryContent } from "../../../content/story";
import type { ProjectMetadata } from "../../../projects/types";
import AppElement from "../AppElement";
import ContentImage from "../content/ContentImage";

export default function StoryOverview({
  overview,
  metadata,
  sectionID,
  sectionRef,
}: {
  sectionRef: Ref<HTMLElement>;
  sectionID: string;
  overview: ProjectStoryContent["overview"];
  metadata?: ProjectMetadata;
}) {
  // Budget one app-height for the overview; container queries also handle short tiles.
  return (
    <section
      ref={sectionRef}
      id={sectionID}
      tabIndex={-1}
      className="story-overview flex h-[calc(100cqh-var(--story-nav-height)-2*var(--story-top-space))] min-h-[440px] flex-col gap-3.5 not-has-[figure]:justify-center [@container(max-height:550px)]:min-h-[320px] [@container(max-height:550px)]:gap-2"
    >
      {overview.image && <ContentImage hero image={overview.image} />}
      <div className="story-overview-copy flex-none">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[.68rem] font-[650] tracking-[.16em] text-theme-secondary uppercase">
            {overview.eyebrow}
          </p>
          {metadata && (
            <AppElement element={{ type: "status", status: metadata.status }} />
          )}
        </div>
        <h1 className="my-2.5 font-[Georgia,serif] text-[clamp(1.65rem,3.5cqi,2.8rem)] leading-[1.12] font-medium tracking-[-.035em] text-balance [@container(max-height:550px)]:my-2 [@container(max-height:550px)]:text-[clamp(1.5rem,2.7cqi,2rem)]">
          {overview.headline}
        </h1>
        <p className="max-w-[62ch] text-[.92rem] leading-[1.5] text-theme-secondary">
          {overview.summary}
        </p>
        <dl className="mt-4 grid grid-cols-[1.4fr_1fr_1fr] gap-3 border-y border-theme-foreground/18 py-3 [@container(max-height:550px)]:mt-2.5 [@container(max-height:550px)]:py-2">
          {overview.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mb-1 block text-[.6rem] tracking-[.13em] text-theme-secondary uppercase">
                {fact.label}
              </dt>
              <dd className="text-xs leading-[1.4]">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-[.72rem] text-theme-secondary">
          {overview.stack.join(" / ")}
        </p>
        {!!metadata?.links.length && (
          <div className="story-links mt-2.5 flex flex-wrap gap-2">
            {metadata.links.map((link) => (
              <AppElement
                key={link.href}
                element={{
                  type: "link",
                  ...link,
                  className:
                    "border border-theme-foreground/25 rounded-[7px] bg-theme-surface/55 hover:bg-theme-surface",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
