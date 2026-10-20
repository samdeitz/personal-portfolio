import { useApp } from "../../../../context/AppContext";
import { allProjects } from "../../../../projects";
import ContentImage from "../../content/ContentImage";
import workoutFinder from "../../../../assets/images/exercise-finder-banner.jpg";
import partyIslands from "../../../../assets/logos/partyislandsLogo.jpg";
import swingSync from "../../../../assets/logos/swingsyncLogo.jpg";

// Reuse project artwork as placeholders and open the existing project apps.
const interests = [
  {
    project: allProjects["workout-finder"],
    image: workoutFinder,
    title: "Interfaces that do something useful",
    text: "My first React app brought components, state, and APIs together. That grew into full-stack websites and content systems.",
  },
  {
    project: allProjects["party-islands"],
    image: partyIslands,
    title: "Games that bring systems to life",
    text: "I’m getting more into game development. Multiplayer games have given me a reason to explore networking, shared state, and the player experience.",
  },
  {
    project: allProjects["swing-sync"],
    image: swingSync,
    title: "Tools that make building better",
    text: "Sometimes the interesting project is the tool behind the work—from rebuilding Swing interfaces at runtime to running my own server.",
  },
];

export default function AboutInterests() {
  const { openApp } = useApp();
  return (
    <section aria-labelledby="about-build">
      <h2
        id="about-build"
        className="font-[Georgia,serif] text-3xl leading-tight"
      >
        I learn by building.
      </h2>
      <p className="mt-3 max-w-[65ch] text-sm text-theme-secondary">
        The projects have grown, but the motivation is the same: find something
        interesting and work out how to make it real.
      </p>
      <div className="mt-7 grid gap-7 @min-[750px]:grid-cols-3">
        {interests.map(({ project, image, title, text }, index) => (
          <div key={project.id} className="min-w-0">
            <p className="mb-3 font-mono text-xs text-theme-focused">
              0{index + 1} / {project.title}
            </p>
            <ContentImage
              image={{
                type: "figure",
                src: image,
                alt: `${project.title} project artwork`,
                caption: "Project artwork used as a placeholder.",
                placeholder: true,
              }}
            />
            <h3 className="mt-4 text-base font-semibold leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm text-theme-secondary">{text}</p>
            <button
              type="button"
              onClick={() => openApp(project.id)}
              className="mt-3 min-h-10 cursor-pointer py-2 text-sm text-theme-focused underline-offset-4 hover:underline"
              aria-label={`Explore ${project.title}`}
            >
              Explore the project <span aria-hidden="true">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
