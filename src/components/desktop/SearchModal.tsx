import VBox from "../ui/VBox";
import apps from "../../apps/registry";
import { useApp } from "../../context/AppContext";
import { useSearch } from "../../context/SearchContext";
import { useScrollLock } from "../../hooks/useScrollLock";
import AppResult from "./search/AppResult";
import { useEffect, useRef, useState } from "react";
import type { AppShape } from "../../content/types";
import { useKeyDown } from "../../hooks/useKeyDown";

// import app icons for results tab
const appImages = import.meta.glob<string>("@/assets/icons/appIcons/*", {
  eager: true,
  import: "default",
});

// change keys to image name
const imagesByName: Record<string, string> = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url]),
);

export default function SearchModal() {
  const firstApp = Object.values(apps)[0].id ?? "";
  const [highlighted, setHighlighted] = useState<string>(firstApp);
  const { dispatch } = useApp();
  const {
    isSearching,
    searchValue,
    handleSearchQuery,
    toggleSearching,
    inputRef,
    focusInput,
  } = useSearch();
  useScrollLock(isSearching);

  const currResults = searchValue[1];

  useEffect(() => {
    const firstMatch = Object.values(apps).find((app) =>
      app.title.toLowerCase().includes(searchValue[0].toLowerCase()),
    );

    setHighlighted(firstMatch?.id ?? "");
  }, [searchValue, isSearching]);

  const getCurrIndex = () => {
    return currResults.findIndex((app: AppShape) => app.id === highlighted);
  };

  const goToPrev = () => {
    const currIndex = getCurrIndex();
    if (currIndex > 0) {
      setHighlighted(currResults[currIndex - 1].id);
    }
  };

  const goToNext = () => {
    const currIndex = getCurrIndex();
    if (currIndex < currResults.length - 1)
      setHighlighted(currResults[currIndex + 1].id);
  };

  useKeyDown((event) => {
    const keyHit = () => {
      event.preventDefault();
      document.body.style.pointerEvents = "none";
    };
    if (event.code === "ArrowUp") {
      keyHit();
      if (!event.repeat) goToPrev();
    }
    if (event.code === "ArrowDown") {
      keyHit();
      if (!event.repeat) goToNext();
    }
    if (event.code === "Enter") {
      handleOpen(highlighted);
    }
  });

  const handleOpen = (id: string) => {
    toggleSearching();
    dispatch({
      type: "CREATE_WINDOW",
      payload: {
        windowID: id,
      },
    });
  };
  focusInput();

  return isSearching ? (
    <div className="flex fixed w-screen h-full backdrop-blur-[2px] z-100 items-center justify-center">
      <VBox className="fixed p-4 bg-theme-page text-theme-foreground min-w-11/12 md:min-w-124 gap-4 border-theme-secondary border-2 rounded-md">
        {/* searchbar, conditionally rendered by isSearching */}
        <input
          className="transition-[opacity, transform] duration-500 ease-in-out origin-left w-full h-12 rounded-sm pl-2 outline-none bg-theme-surface"
          placeholder="Launch..."
          type="text"
          value={searchValue[0]}
          ref={inputRef}
          onChange={(e) => handleSearchQuery(e.target.value)}
        />

        <VBox className="h-72 overflow-y-scroll hide-scrollbar gap-2">
          {/* Current viewable apps that match search value */}
          {currResults.map((a: AppShape) => {
            return (
              <AppResult
                image={imagesByName[a?.desktopImageSrc]}
                handleOpen={handleOpen}
                title={a.title}
                id={a.id}
                key={a.id}
                isHighlighted={highlighted === a.id}
                setHighlighted={setHighlighted}
              />
            );
          })}
        </VBox>
      </VBox>
    </div>
  ) : (
    <></>
  );
}
