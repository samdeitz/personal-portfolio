import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import type { ReactElement } from "react";
import type { ContentBlock, ProjectStatus } from "../../content/types";
import HBox from "../ui/HBox";
import TechnologyIcon from "./TechnologyIcon";

const statusColors = {
  Deployed: "bg-emerald-500",
  Published: "bg-violet-500",
  Active: "bg-sky-500",
  Finalizing: "bg-amber-500",
  Completed: "bg-slate-400",
} satisfies Record<ProjectStatus, string>;

const AppElement = ({ element }: { element: ContentBlock }): ReactElement => {
  const className = element.className ?? "";
  switch (element.type) {
    case "heading": {
      const Tag = `h${element.level ?? 2}` as
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";
      return (
        <Tag className={`content-heading font-bold ${className}`}>
          {element.text}
        </Tag>
      );
    }
    case "paragraph":
      return <p className={`content-paragraph ${className}`}>{element.text}</p>;
    case "status":
      return (
        <div className={className}>
          <span className="inline-flex items-center gap-2 rounded-full border border-current/15 bg-current/5 px-3 py-1 text-xs font-semibold" aria-label={`Project status: ${element.status}`}>
            <span className={`size-2 shrink-0 rounded-full ${statusColors[element.status]}`} aria-hidden="true" />
            {element.status}
          </span>
        </div>
      );
    case "image":
      return (
        <img
          className={`content-image ${className}`}
          src={element.src}
          alt={element.alt}
        />
      );
    case "link":
      return (
        <a
          className={`content-link self-start ${className}`}
          href={element.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HBox
            className={`items-center min-h-10 gap-2 hover-over px-2 py-1 rounded-lg cursor-pointer`}
          >
            {element.icon === "github" && (
              <FaGithub className="size-5 shrink-0" aria-hidden="true" />
            )}
            <span className="h-fit text-sm font-semibold">{element.label}</span>
            {element.icon === "open" && (
              <LuExternalLink className="size-5 shrink-0" aria-hidden="true" />
            )}
          </HBox>
        </a>
      );
    case "group":
      return (
        <div
          className={`min-w-0 ${element.direction === "horizontal" ? "flex flex-row flex-wrap items-center gap-2" : "content-flow"} ${className}`}
        >
          {element.content.map((child, index) => (
            <AppElement key={index} element={child} />
          ))}
        </div>
      );
    case "technologies":
      return (
        <HBox className={`gap-2 self-start ${className}`}>
          {element.technologies.map((technology, index) => (
            <TechnologyIcon key={index} technology={technology} />
          ))}
        </HBox>
      );
    default: {
      const unreachable: never = element;
      throw new Error(`Unknown content block: ${JSON.stringify(unreachable)}`);
    }
  }
};
export default AppElement;
