import type { ReactElement } from "react";
import type { ContentBlock } from "../../content/types";
import HBox from "../ui/HBox";
import githubWhite from "@/assets/icons/github-white.svg";
import githubBlack from "@/assets/icons/github-black.svg";
import openWhite from "@/assets/icons/open-white.svg";
import openBlack from "@/assets/icons/open-black.svg";
import TechnologyIcon from "./TechnologyIcon";
import { useTheme } from "../../context/ThemeContext";

const AppElement = ({ element }: { element: ContentBlock }): ReactElement => {
  const { isDark } = useTheme();
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
              <img
                className="w-5 shrink-0"
                src={isDark ? githubWhite : githubBlack}
                alt=""
              />
            )}
            <span className="h-fit text-sm font-semibold">{element.label}</span>
            {element.icon === "open" && (
              <img
                className="w-5 shrink-0"
                src={isDark ? openWhite : openBlack}
                alt=""
              />
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
