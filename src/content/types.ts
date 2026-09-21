import type { Technology } from "./technologies";

export type ContentBlock = (
  | { type: "heading"; text: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "link"; href: string; label: string; icon?: "github" | "open" }
  | { type: "technologies"; technologies: readonly Technology[] }
  | {
      type: "group";
      direction: "horizontal" | "vertical";
      content: readonly ContentBlock[];
    }
) & { className?: string };
