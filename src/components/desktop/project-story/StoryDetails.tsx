import type { ReactNode } from "react";
import StoryDivider from "./StoryDivider";

export default function StoryDetails({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid gap-4">
      <StoryDivider />
      <details className="story-details">
        <summary className="cursor-pointer font-semibold">{title}</summary>
        <div className="pt-6">{children}</div>
      </details>
      <StoryDivider />
    </div>
  );
}
