import family from "../../../../assets/images/family.jpg";
import { useApp } from "../../../../context/AppContext";
import ContentImage from "../../content/ContentImage";
import ResumeLink from "../../content/ResumeLink";

export default function AboutIntro() {
  const { openApp } = useApp();
  return (
    <>
      <header className="grid items-center gap-8 @min-[700px]:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[.18em] text-theme-focused uppercase">
            Sam Deitz / A little about me
          </p>
          <h1 className="font-[Georgia,serif] text-4xl leading-[1.08] tracking-tight text-balance @min-[900px]:text-5xl">
            Curious, ambitious, thorough
          </h1>
          <p className="mt-5 text-lg">I love building things.</p>
          <p className="mt-3 text-sm text-theme-secondary">
            I study Computer Science at Western University. My interests take me
            from interfaces and full-stack development to game development,
            developer tools, and the systems underneath them.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openApp("party-islands")}
              className="min-h-10 cursor-pointer rounded-lg border border-theme-focused bg-theme-focused/15 px-4 py-2 text-sm font-semibold hover:bg-theme-focused/25"
            >
              Explore a game I built <span aria-hidden="true">→</span>
            </button>
            <ResumeLink />
          </div>
        </div>
        <ContentImage
          image={{
            type: "figure",
            src: family,
            alt: "Family photograph",
            caption: "A little life beyond the code.",
          }}
        />
      </header>
      <dl className="grid gap-5 border-y border-theme-foreground/15 py-6 @min-[550px]:grid-cols-4">
        {[
          ["Studying", "Computer Science"],
          ["At", "Western University"],
          ["Currently", "Full stack"],
          ["Exploring", "Game development + systems"],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="mb-1 text-[.65rem] font-semibold tracking-[.15em] text-theme-focused uppercase">
              {label}
            </dt>
            <dd className="text-sm">{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
