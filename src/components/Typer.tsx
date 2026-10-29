import { useEffect, useState } from "react";
import HBox from "./ui/HBox";

interface TyperProps {
  baseString: string;
  transitionStrings: string[];
  startDelay: number;
}

export default function Typer({
  startDelay,
  baseString,
  transitionStrings,
}: TyperProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const phrase = transitionStrings[currentPhrase] ?? "";
  const displayedString = phrase.slice(0, currentLetter);
  const [adding, setAdding] = useState(true);
  const isLastPhrase = currentPhrase >= transitionStrings.length - 1;
  const typing = adding
    ? currentLetter > 0 && currentLetter < phrase.length
    : currentLetter > 0;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (adding && currentLetter >= phrase.length) {
      // Leave the final phrase visible; no timer remains running.
      if (isLastPhrase) return;
      timer = setTimeout(() => {
        setAdding(false);
        setCurrentLetter((letter) => Math.max(0, letter - 1));
      }, 2000);
    } else if (!adding && currentLetter === 0) {
      timer = setTimeout(() => {
        setCurrentPhrase((index) => index + 1);
        setAdding(true);
      }, 65);
    } else {
      const isStarting = currentPhrase === 0 && currentLetter === 0 && adding;
      const delay = isStarting
        ? Math.max(0, startDelay) + 65
        : adding
          ? 65
          : 30;
      timer = setTimeout(() => {
        setCurrentLetter((letter) => letter + (adding ? 1 : -1));
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [currentLetter, currentPhrase, adding, phrase, isLastPhrase, startDelay]);

  return (
    <HBox className="gap-2">
      <h1 className="text-lg sm:text-2xl leading-tight font-normal text-theme-secondary">
        {baseString}
      </h1>

      <div className="flex-1 text-lg sm:text-2xl leading-tight font-normal text-theme-secondary">
        <span>{displayedString}</span>
        <span className={!typing ? "animate-blink" : ""}>&#x2588;</span>
      </div>
    </HBox>
  );
}
