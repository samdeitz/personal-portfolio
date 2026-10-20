// Projects choose their own chapter order and blocks; layout remains shared.
export interface StoryFigure {
  type: "figure";
  src: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
}
interface StoryItem { title: string; text: string; label?: string }
export type StoryBlock =
  | StoryFigure
  | { type: "prose"; title?: string; paragraphs: readonly string[] }
  | { type: "callout"; label: string; text: string }
  | { type: "split"; content: readonly StoryBlock[]; visual: StoryFigure }
  | { type: "comparison"; items: readonly StoryItem[] }
  | { type: "flow"; label: string; items: readonly StoryItem[] }
  | { type: "takeaways"; items: readonly StoryItem[] }
  | { type: "details"; title: string; blocks: readonly StoryBlock[] };

export interface StoryChapter {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  intro?: string;
  blocks: readonly StoryBlock[];
}
export interface ProjectStoryContent {
  overview: {
    eyebrow: string;
    headline: string;
    summary: string;
    image?: StoryFigure;
    facts: readonly { label: string; value: string }[];
    stack: readonly string[];
  };
  chapters: readonly StoryChapter[];
}
