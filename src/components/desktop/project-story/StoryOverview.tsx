import StoryDivider from "./StoryDivider";
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
      className="story-overview flex flex-col gap-4 not-has-[figure]:justify-center"
    >
      {overview.image && <ContentImage hero image={overview.image} />}
      <div className="story-overview-copy grid flex-none gap-3">
        <header className="grid gap-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xl font-bold text-theme-foreground">
              {overview.eyebrow}
            </p>
            {metadata && (
              <AppElement element={{ type: "status", status: metadata.status }} />
            )}
          </div>
          <h1 className="story-heading">
            {overview.headline}
          </h1>
        </header>
        <p className="max-w-prose text-base leading-normal text-theme-secondary">
          {overview.summary}
        </p>
        <StoryDivider />
        <dl className="grid grid-cols-3 gap-4">
          {overview.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mb-1 block text-xs tracking-wide text-theme-secondary uppercase">
                {fact.label}
              </dt>
              <dd className="text-sm leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <StoryDivider />
        <p className="text-sm text-theme-secondary">
          {overview.stack.join(" / ")}
        </p>
        {!!metadata?.links.length && (
          <div className="story-links flex flex-wrap gap-2">
            {metadata.links.map((link) => (
              <AppElement
                key={link.href}
                element={{
                  type: "link",
                  ...link,
                  className:
                    "border border-theme-foreground/25 rounded-lg bg-theme-surface/55 hover:bg-theme-surface",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
