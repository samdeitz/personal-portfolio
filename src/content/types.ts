import type { Technology } from "./technologies";

export type ProjectStatus =
  | "Deployed"
  | "Published"
  | "Active"
  | "Finalizing"
  | "Completed";

export type ContentBlock = (
  | { type: "heading"; text: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }
  | { type: "paragraph"; text: string }
  | { type: "status"; status: ProjectStatus }
  | { type: "image"; src: string; alt: string }
  | { type: "link"; href: string; label: string; icon?: "github" | "open" }
  | { type: "technologies"; technologies: readonly Technology[] }
  | {
      type: "group";
      direction: "horizontal" | "vertical";
      content: readonly ContentBlock[];
    }
) & { className?: string };

export type AppShape = {
  kind: "project" | "special";
  id: string;
  title: string;
  desktopImageSrc: string;
};
