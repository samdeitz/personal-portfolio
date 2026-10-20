import ContentImage from "../content/ContentImage";
import type { StoryBlock as Block } from "../../../content/story";

export function StoryBlocks({ blocks }: { blocks: readonly Block[] }) {
  return <>{blocks.map((block, index) => <StoryBlock key={index} block={block} />)}</>;
}

// An exhaustive union keeps new block types from silently rendering nothing.
function StoryBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "figure": return <ContentImage image={block} />;
    case "prose": return <div data-story-block="prose" className="max-w-[68ch] text-[.94rem] [&_p+p]:mt-4">
      {block.title && <h3 className="mb-2 text-base leading-[1.4] font-semibold">{block.title}</h3>}
      {block.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>;
    case "callout": return <aside className="mt-[26px] border-l-2 border-theme-focused pl-[18px] text-[.9rem]">
      <span className="mb-2 block text-[.65rem] tracking-[.13em] text-theme-secondary uppercase">{block.label}</span>{block.text}
    </aside>;
    case "split": return <div className="grid items-start gap-7 @min-[850px]:grid-cols-[1fr_1.1fr]">
      <div><StoryBlocks blocks={block.content} /></div><ContentImage image={block.visual} />
    </div>;
    case "comparison": return <div className="mt-7 grid gap-6 border-y border-theme-foreground/12 py-[22px] @min-[550px]:grid-cols-2">
      {block.items.map((item, i) => <div key={i}>
        <span className="mb-2 block text-[.65rem] tracking-[.13em] text-theme-secondary uppercase">{item.label}</span>
        <h3 className="mb-2 text-base leading-[1.4] font-semibold">{item.title}</h3>
        <p className="text-[.85rem] text-theme-secondary">{item.text}</p>
      </div>)}
    </div>;
    case "flow": return <ol className={`my-[30px] grid list-none gap-3 p-0 ${block.items.length > 3 ? "@min-[550px]:grid-cols-2 @min-[1100px]:grid-cols-4" : "@min-[550px]:grid-cols-3"}`} aria-label={block.label}>
      {block.items.map((item, i) => <li key={i} className="relative rounded-[7px] border border-theme-foreground/14 bg-theme-surface/60 p-[18px] not-last:after:absolute not-last:after:bottom-[-19px] not-last:after:left-1/2 not-last:after:z-1 not-last:after:text-theme-secondary not-last:after:content-['↓'] @min-[550px]:not-last:after:hidden @min-[1100px]:not-last:after:right-[-14px] @min-[1100px]:not-last:after:bottom-[45%] @min-[1100px]:not-last:after:left-auto @min-[1100px]:not-last:after:block @min-[1100px]:not-last:after:content-['→']">
        <span className="text-[.65rem] tracking-[.1em] text-theme-focused uppercase">{item.label}</span>
        <h3 className="mt-2 mb-2 text-[.88rem] leading-[1.4] font-semibold">{item.title}</h3>
        <p className="text-[.74rem] text-theme-secondary">{item.text}</p>
      </li>)}
    </ol>;
    case "takeaways": return <ul className="list-none p-0">{block.items.map((item, i) => <li key={i} className="flex gap-[22px] border-b border-theme-foreground/12 py-[22px]">
      <span className="pt-1 font-mono text-xs text-theme-focused">{String(i + 1).padStart(2, "0")}</span>
      <div><h3 className="mb-2 text-base leading-[1.4] font-semibold">{item.title}</h3><p className="text-[.88rem] text-theme-secondary">{item.text}</p></div>
    </li>)}</ul>;
    case "details": return <details className="mt-7 border-y border-theme-foreground/15 py-[18px] text-[.85rem] [&_[data-story-block=prose]_p]:mt-4 [&_[data-story-block=prose]_p]:max-w-[68ch] [&_[data-story-block=prose]_p]:text-theme-secondary">
      <summary className="cursor-pointer font-semibold">{block.title}</summary><StoryBlocks blocks={block.blocks} />
    </details>;
    default: { const unreachable: never = block; throw new Error(`Unknown story block: ${JSON.stringify(unreachable)}`); }
  }
}
