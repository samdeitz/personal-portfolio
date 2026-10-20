import AboutIntro from "./about/AboutIntro";
import AboutInterests from "./about/AboutInterests";
import { AboutOrigins, AboutProblemSolving, AboutMotivation } from "./about/AboutBackground";

export default function AboutMe() {
  return (
    <article className="@container w-full max-w-6xl shrink-0 font-sans leading-relaxed text-theme-foreground" aria-label="About Me">
      <div className="space-y-10 p-5 @min-[700px]:space-y-14 @min-[700px]:p-10">
        <AboutIntro />
        <AboutOrigins />
        <AboutInterests />
        <AboutProblemSolving />
        <AboutMotivation />
      </div>
    </article>
  );
}
