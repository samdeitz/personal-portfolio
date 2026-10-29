import { useEffect, useRef, useState } from "react";
import HBox from "./ui/HBox";

interface TyperProps {
  baseString: string;
  transitionStrings: string[];
}

export default function Typer({ baseString, transitionStrings }: TyperProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const displayedString = transitionStrings[currentPhrase].slice(
    0,
    currentLetter,
  );
  const [adding, setAdding] = useState(true);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let t;
    const dec = (time?: number) => {
      t = setTimeout(
        () => {
          setCurrentLetter((prev) => prev - 1);
        },
        time ? time : 30,
      );
    };
    const inc = (time?: number) => {
      t = setTimeout(
        () => {
          setCurrentLetter((prev) => prev + 1);
        },
        time ? time : 65,
      );
    };
    const changeString = () => {
      setTyping(true);

      if (currentLetter === transitionStrings[currentPhrase].length) {
        setAdding(false);

        setTyping(false);
        if (currentPhrase != transitionStrings.length - 1) {
          dec(2000);
        }
      } else if (currentLetter === 0 && !adding) {
        setCurrentPhrase((prev) => prev + 1);
        setAdding(true);
        inc();
      } else if (adding) {
        inc();
      } else {
        dec();
      }
    };

    if (currentPhrase === 0 && currentLetter === 0 && adding)
      t = setTimeout(changeString, 2000);
    else changeString();

    return () => {
      clearTimeout(t);
    };
  }, [currentLetter]);

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
