import type { AppShape, ContentBlock } from "../content/types";

export interface Project extends AppShape {
  kind: "project";
  content: readonly ContentBlock[];
}
