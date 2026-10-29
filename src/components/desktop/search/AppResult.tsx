import HBox from "../../ui/HBox";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

interface AppResultProps {
  handleOpen: (id: string) => void;
  setHighlighted: (id: string) => void;
  keyboardNavigation: boolean;
  title: string;
  id: string;
  isHighlighted: boolean;
  image: string;
}

export default function AppResult({
  handleOpen,
  isHighlighted,
  setHighlighted,
  keyboardNavigation,
  title,
  id,
  image,
}: AppResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted && keyboardNavigation) {
      resultRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    }
  }, [isHighlighted, keyboardNavigation]);

  return (
    // app to show
    <HBox
      className={twMerge(
        "w-full p-2 rounded-md gap-4 cursor-pointer items-center",
        isHighlighted && "highlight",
      )}
      ref={resultRef}
      onMouseMove={(event) => {
        // Scrolling beneath a stationary pointer must not steal keyboard selection.
        if (event.movementX || event.movementY) setHighlighted(id);
      }}
      onClick={() => handleOpen(id)}
    >
      <img className="h-7 rounded-lg" src={image} alt="desktop image" />
      <h1 className="">{title}</h1>
    </HBox>
  );
}
