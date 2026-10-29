import Typer from "./Typer";
import { useBreakpoint } from "../hooks/useBreakpoint";

const Header = ({ ready }: { ready: boolean }) => {
  const breakpoint = useBreakpoint();
  const columns = { sm: 2, md: 3, lg: 4, xl: 5 }[breakpoint];

  return (
    <header className="relative z-98 shrink-0 px-4 pt-10 pb-4 sm:px-8 sm:pt-13 sm:pb-6 [--grid-gap:1rem] sm:[--grid-gap:2rem]">
      <div
        className="grid gap-2"
        // Match the inset of the centered card in the desktop's first column.
        style={{
          paddingLeft: `max(0px, ((100% - ${columns - 1} * var(--grid-gap)) / ${columns} - clamp(6rem, 20vw, 8.75rem)) / 2)`,
        }}
      >
        <h1 className="text-2xl sm:text-3xl leading-tight font-bold text-theme-foreground">
          Hi, I'm Sam Deitz
        </h1>
        <div className="min-h-12 sm:min-h-14">
          {ready && <Typer
            baseString=">"
            startDelay={6600}
            transitionStrings={[
              "I develop frontend experiences.",
              "I architect backend systems.",
              "I build full stack applications.",
              "I create games.",
              "I love to build stuff.",
            ]}
          />}
        </div>
      </div>
    </header>
  );
};

export default Header;
