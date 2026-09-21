import type { DesktopApp } from "../../apps/registry";
import AppElement from "./AppElement";
import AboutMe from "./apps/AboutMe";
import PreviousWork from "./apps/PreviousWork";
import Terminal from "./apps/Terminal";

export default function AppContent({ app }: { app: DesktopApp }) {
  if (app.kind === "project") {
    return (
      <article className="project-content content-flow" aria-label={app.title}>
        {app.content.map((element, index) => (
          <AppElement key={index} element={element} />
        ))}
      </article>
    );
  }
  switch (app.id) {
    case "about-me": return <AboutMe />;
    case "previous-work": return <PreviousWork />;
    case "terminal": return <Terminal />;
    default: {
      const unreachable: never = app;
      throw new Error(`Unknown special app: ${JSON.stringify(unreachable)}`);
    }
  }
}
