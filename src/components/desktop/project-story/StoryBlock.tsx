import StoryDivider from "./StoryDivider";
import StoryDetails from "./StoryDetails";
import ContentImage from "../content/ContentImage";
import type { StoryBlock as Block, StoryFigure } from "../../../content/story";

export function StoryBlocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="grid min-w-0 gap-6">
      {blocks.map((block, index) => (
        <StoryBlock key={index} block={block} />
      ))}
    </div>
  );
}

// An exhaustive union keeps new block types from silently rendering nothing.
function StoryBlock({ block }: { block: Block }) {
  const getImageSplitStyles = (visual: StoryFigure[], vert = false) => {
    let rows = 1;
    let cols = 1;
    for (let i = 0; i < visual.length / 2; i++) {
      if (vert) {
        if (cols <= rows) cols++;
        else rows++;
      } else {
        if (cols >= rows) rows++;
        else cols++;
      }
    }
    return {
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    };
  };
  switch (block.type) {
    case "figure":
      return <ContentImage image={block} />;
    case "prose":
      return (
        <div
          data-story-block="prose"
          className="grid max-w-prose gap-4"
        >
          {block.title && (
            <h3 className="text-base leading-snug font-semibold">
              {block.title}
            </h3>
          )}
          {block.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      );
    case "callout":
      return (
        <aside className="border-l-2 border-theme-focused pl-4">
          <span className="text-xs font-semibold tracking-wide uppercase mb-2 block text-theme-secondary">
            {block.label}
          </span>
          {block.text}
        </aside>
      );
    case "split":
      return (
        <div
          className={`grid min-w-0 gap-6 items-start ${block.content?.length && (block.splitContentVert ?? true) ? "@min-[850px]:grid-cols-[1fr_1.1fr]" : ""}`}
        >
          {!!block.content?.length && <StoryBlocks blocks={block.content} />}
          {!Array.isArray(block.visual) ? (
            <ContentImage image={block.visual} />
          ) : (
            <div
              className="grid gap-4"
              style={getImageSplitStyles(block.visual, block.splitImagesVert)}
            >
              {block.visual.map((image, index) => (
                <ContentImage key={index} image={image} />
              ))}
            </div>
          )}
        </div>
      );

    case "comparison":
      return (
        <div className="grid gap-6">
          <StoryDivider />
          <div className="grid gap-6 @min-[550px]:grid-cols-2">
            {block.items.map((item, i) => (
              <div key={i} className="grid content-start gap-2">
                {item.label && <span className="text-xs font-semibold tracking-wide uppercase text-theme-secondary">{item.label}</span>}
                <h3 className="text-base leading-snug font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-theme-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <StoryDivider />
        </div>
      );
    case "flow":
      return (
        <ol
          className={`grid list-none gap-6 p-0 ${block.items.length > 3 ? "@min-[550px]:grid-cols-2 @min-[1100px]:grid-cols-4" : "@min-[550px]:grid-cols-3"}`}
          aria-label={block.label}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative rounded-lg border border-theme-foreground/20 bg-theme-surface/60 p-4"
            >
              <span className="text-xs font-semibold tracking-wide uppercase text-theme-focused">
                {item.label}
              </span>
              <h3 className="my-2 text-base leading-snug font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-theme-secondary">{item.text}</p>
              {i < block.items.length - 1 && (
                <>
                  <span aria-hidden="true" className="absolute -bottom-6 left-1/2 text-theme-secondary @min-[550px]:hidden">↓</span>
                  <span aria-hidden="true" className="absolute -right-5 bottom-[45%] hidden text-theme-secondary @min-[1100px]:block">→</span>
                </>
              )}
            </li>
          ))}
        </ol>
      );
    case "takeaways":
      return (
        <ul className="grid list-none gap-6 p-0">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="grid gap-6"
            >
              <div className="flex gap-6">
                <span className="pt-1 font-mono text-xs text-theme-focused">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid gap-2">
                  <h3 className="text-base leading-snug font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-theme-secondary">
                    {item.text}
                  </p>
                </div>
              </div>
              <StoryDivider />
            </li>
          ))}
        </ul>
      );
    case "details":
      return (
        <StoryDetails title={block.title}>
          <StoryBlocks blocks={block.blocks} />
        </StoryDetails>
      );
    default: {
      const unreachable: never = block;
      throw new Error(`Unknown story block: ${JSON.stringify(unreachable)}`);
    }
  }
}
