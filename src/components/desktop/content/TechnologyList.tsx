import type { Technology } from "../../../content/technologies";
import TechnologyIcon from "../TechnologyIcon";

// One list implementation preserves the flip buttons wherever technologies are shown.
export default function TechnologyList({ technologies, className = "" }: {
  technologies: readonly Technology[];
  className?: string;
}) {
  return <ul className={`m-0 flex list-none flex-wrap items-center gap-2 p-0 [&_p]:m-0 ${className}`}>
    {technologies.map((technology) => <li key={technology}><TechnologyIcon technology={technology} /></li>)}
  </ul>;
}
