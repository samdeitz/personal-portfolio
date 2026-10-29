import { useEffect, useState } from "react";
import VBox from "./ui/VBox";
import HBox from "./ui/HBox";

type BootLine = {
  line: string;
  timestamp: number;
  newline: boolean;
};

const bootLines: BootLine[] = [
  { line: "SAM OS", timestamp: 0, newline: false },
  { line: "STARTING SESSION...", timestamp: 0.5, newline: true },
  { line: "LOADING PROJECTS...", timestamp: 0.75, newline: false },
  { line: "[ OK ] LOADED PROJECTS", timestamp: 1, newline: true },
  { line: "CONNECTING IDEAS...", timestamp: 1.3, newline: false },
  { line: "[ OK ] CONNECTED", timestamp: 1.6, newline: true },
  { line: "GETTING DESKTOP READY...", timestamp: 1.75, newline: false },
  { line: "[ OK ] DESKTOP READY", timestamp: 2, newline: true },
  { line: "BOOTING...", timestamp: 2.1, newline: false },
  { line: "DONE", timestamp: 4, newline: false },
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleCount, setVisibleCount] = useState(1);
  const currLines = bootLines.slice(0, visibleCount);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Reveal by index so each line appears only once.
    const timers = bootLines.slice(1).map((line, index) =>
      window.setTimeout(() => {
        setVisibleCount(index + 2);
      }, line.timestamp * 1000),
    );
    // Hold DONE, fade the text for 200ms, then hold solid black for 100ms.
    timers.push(window.setTimeout(() => setIsDone(true), 4300));
    timers.push(window.setTimeout(onComplete, 4600));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [onComplete]);

  return (
    <VBox className="p-4 fixed inset-0 z-10000 bg-black text-gray-200">
      <div
        className={`transition-opacity duration-200 motion-reduce:transition-none ${isDone ? "opacity-0" : "opacity-100"}`}
      >
        {currLines.map((line) => (
          <HBox
            key={line.line}
            className={line.newline ? "pt-4 gap-2" : "gap-2"}
          >
            <span>&gt; </span>
            <span className="text-theme-secondary">{line.timestamp}s</span>
            <span>{line.line}</span>
          </HBox>
        ))}
      </div>
    </VBox>
  );
}
