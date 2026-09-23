import HBox from "../../ui/HBox";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, type SetStateAction } from "react";

interface AppResultProps {
  handleOpen: (id: String) => void;
  setHighlighted: React.Dispatch<SetStateAction<string>>;
  title: string;
  id: string;
  isHighlighted: boolean;
  image: string;
}

export default function AppResult({
  handleOpen,
  isHighlighted,
  setHighlighted,
  title,
  id,
  image,
}: AppResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element: HTMLDivElement = resultRef.current;

    const entered = () => {
      setHighlighted(id);
    };

    element.addEventListener("mouseover", entered);

    return () => {
      element.removeEventListener("mouseover", entered);
    };
  }, []);

  return (
    // app to show
    <HBox
      className={twMerge(
        "w-full p-2 rounded-md gap-4 cursor-pointer hover-over duration-500 items-center",
        isHighlighted && "highlight",
      )}
      ref={resultRef}
      onClick={() => handleOpen(id)}
    >
      <img className="h-7 rounded-lg" src={image} alt="desktop image" />
      <h1 className="">{title}</h1>
    </HBox>
  );
}
