import type { ContentBlock } from "../content/types";

export interface Project {
  kind: "project";
  id: string;
  title: string;
  desktopImageSrc: string;
  content: readonly ContentBlock[];
}
