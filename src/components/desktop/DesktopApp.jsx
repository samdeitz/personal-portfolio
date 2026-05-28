import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useApp } from "@/context/AppContext.js";
import OpenTab from "./OpenTab";
import { SPLIT_BREAKPOINT } from "../../context/AppProvider";

const appImages = import.meta.glob("@/assets/images/*", {
  eager: true,
  import: "default",
});

const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url]),
);

const DesktopApp = () => {
  const { windows, layoutGrid, layouts } = useApp(); // open app information
  const [isVisible, setIsVisible] = useState(false); // if an app is open

  // determine if an app is open
  useEffect(() => {
    if (windows.length != 0) setIsVisible(true);
  }, [windows]);

  return (
    <>
      {Object.values(layouts).length != 0 && (
        <div
          className="fixed w-full top-0 bottom-13 z-99 p-4"
          style={{
            display: "grid",
            gap: layoutGrid.gap,
            gridTemplateColumns: `repeat(${layoutGrid.cols - 1}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${layoutGrid.rows - 1}, minmax(0, 1fr))`,
          }}
        >
          {/* -------- APP WINDOW -------- */}
          {windows.map((window) => {
            if (window.minimized) return;
            return (
              <OpenTab
                key={window.id}
                style={{
                  gridColumnStart: layouts[window.id].colStart,
                  gridRowStart: layouts[window.id].rowStart,
                  gridColumnEnd: layouts[window.id].colEnd,
                  gridRowEnd: layouts[window.id].rowEnd,
                  minWidth: 0,
                }}
                appID={window.id}
                windowID={window.id}
                isVisible={isVisible}
                imagesByName={imagesByName}
              ></OpenTab>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DesktopApp;
