import type { Technology } from "../../../content/technologies";
import TechnologyList from "../content/TechnologyList";

export default function StoryTechnologyStack({ technologies = [] }: {
  technologies?: readonly Technology[];
}) {
  if (!technologies.length) return null;
  return (
    <details className="mt-7 mb-3 border-y border-theme-foreground/15 py-[18px] text-[.85rem]">
      <summary className="cursor-pointer font-semibold">
        Explore the full technology stack
      </summary>
      {/* Reuse the original flipping buttons; prose spacing stays scoped to prose. */}
      <div className="pt-4">
        <TechnologyList technologies={technologies} className="story-technologies text-[.85rem] leading-[1.25]" />
      </div>
    </details>
  );
}
