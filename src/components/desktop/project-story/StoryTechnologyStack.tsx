import StoryDetails from "./StoryDetails";
import type { Technology } from "../../../content/technologies";
import TechnologyList from "../content/TechnologyList";

export default function StoryTechnologyStack({ technologies = [] }: {
  technologies?: readonly Technology[];
}) {
  if (!technologies.length) return null;
  return (
    <StoryDetails title="Explore the full technology stack">
      <TechnologyList technologies={technologies} className="text-sm leading-snug" />
    </StoryDetails>
  );
}
