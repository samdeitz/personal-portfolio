import type { AppShape, ContentBlock, ProjectStatus } from "../content/types";
import type { Technology } from "../content/technologies";

export interface ProjectMetadata {
  summary: string;
  status: ProjectStatus;
  banner?: { src: string; alt: string };
  links: readonly {
    label: string;
    href: string;
    icon?: "github" | "open";
  }[];
  technologies: readonly Technology[];
}

export interface Project extends AppShape {
  kind: "project";
  metadata?: ProjectMetadata;
  content: readonly ContentBlock[];
}
