import type { DesktopApp } from "../../apps/registry";
import AppElement from "./AppElement";
import AboutMe from "./apps/AboutMe";
import PreviousWork from "./apps/PreviousWork";
import Terminal from "./apps/Terminal";

export default function AppContent({ app }: { app: DesktopApp }) {
  if (app.kind === "project") {
    const metadata = app.metadata;
    const legacyBanner = metadata
      ? undefined
      : app.content.find((element) => element.type === "image");
    const banner = metadata?.banner ?? legacyBanner;
    const overview = metadata
      ? []
      : app.content.filter((element) => element !== legacyBanner);
    const story = metadata ? app.content : [];
    return (
      <article
        className="mx-auto w-full max-w-[76ch] shrink-0 [--project-padding:clamp(1rem,4cqi,2rem)] p-[var(--project-padding)] text-base leading-[1.65] [overflow-wrap:anywhere]"
        aria-label={app.title}
      >
        <section
          className="flex min-h-[calc(100cqh-2*var(--project-padding))] w-full flex-col gap-3.5 [&>*]:shrink-0"
          aria-label="Project overview"
        >
          {banner && (
            <img
              className="block aspect-[16/7] max-h-[min(16rem,30cqh)] w-full rounded-xl object-cover bg-theme-surface"
              src={banner.src}
              alt={banner.alt}
            />
          )}
          {metadata && (
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 items-center ">
                <p className="mb-0">{metadata.summary}</p>
              </div>
              <div className="flex flex-col gap-2" aria-label="Project details">
                <AppElement
                  element={{ type: "status", status: metadata.status }}
                />
                <AppElement
                  element={{
                    type: "group",
                    direction: "horizontal",
                    content: metadata.links.map((link) => ({
                      ...link,
                      type: "link",
                    })),
                  }}
                />
                <AppElement
                  element={{
                    type: "technologies",
                    technologies: metadata.technologies,
                  }}
                />
              </div>
            </div>
          )}
          {overview.map((element, index) => (
            <AppElement key={index} element={element} />
          ))}
        </section>
        {story.length > 0 && (
          <section
            className="content-flow pt-[var(--project-padding)]"
            aria-label="Project Story"
          >
            <h2 className="content-heading font-bold border-t pt-6">
              Project Story
            </h2>
            {story.map((element, index) => (
              <AppElement key={index} element={element} />
            ))}
          </section>
        )}
      </article>
    );
  }
  switch (app.id) {
    case "about-me":
      return <AboutMe />;
    case "previous-work":
      return <PreviousWork />;
    case "terminal":
      return <Terminal />;
    default: {
      const unreachable: never = app;
      throw new Error(`Unknown special app: ${JSON.stringify(unreachable)}`);
    }
  }
}
