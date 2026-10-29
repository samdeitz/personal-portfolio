import { useApp } from "../../../../context/AppContext";
import { allProjects } from "../../../../projects";
import ContentImage from "../../content/ContentImage";
import tract from "../../../../assets/icons/appIcons/tract.jpg";
import threeDWestern from "../../../../assets/images/3dw_poster.jpg";
import swingSync from "../../../../assets/logos/swingsyncLogo.jpg";

// Reuse project artwork as placeholders and open the existing project apps.
const interests = [
  {
    project: allProjects["tract"],
    image: tract,
    title: "Platforms built around real needs",
    text: "Rebuilding trACT’s website brought frontend development, content management, analytics, and AWS infrastructure together in one platform.",
  },
  {
    project: allProjects["3d-western"],
    image: threeDWestern,
    title: "Content teams can manage themselves",
    text: "For 3D Western, I built the CMS architecture and reusable data layer so the marketing team could update content without waiting for a developer.",
  },
  {
    project: allProjects["swing-sync"],
    image: swingSync,
    title: "Tools that make building better",
    text: "Sometimes the interesting project is the tool behind the work, from rebuilding Swing interfaces at runtime to running my own server.",
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
