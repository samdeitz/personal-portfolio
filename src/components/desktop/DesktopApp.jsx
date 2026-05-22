import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext.js";
import OpenTab from "./OpenTab";

const appImages = import.meta.glob("@/assets/images/*", {
  eager: true,
  import: "default",
});

const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url]),
);

const DesktopApp = () => {
  const { windows, layoutGrid } = useApp(); // open app information
  const [isVisible, setIsVisible] = useState(false); // if an app is open
  const [screenHeight, setScreenHeight] = useState(
    document.documentElement.scrollHeight,
  );

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  });

  // determine if an app is open
  useEffect(() => {
    if (windows.length != 0) setIsVisible(true);
  }, [windows]);

  return (
    <>
      {windows.length != 0 &&
        /* -------- APP WINDOW -------- */
        windows.map((window) => {
          if (window.minimized) return;
          return (
            <div
              key={window.id}
              style={{
                display: "grid",
                gap: layoutGrid.gap,
                gridColumnStart: window.layout.colStart,
                gridRowStart: window.layout.rowStart,
                gridColumnEnd: window.layout.colEnd,
                gridRowEnd: window.layout.rowEnd,
              }}
            >
              <OpenTab
                appID={window.id}
                isVisible={isVisible}
                imagesByName={imagesByName}
              ></OpenTab>
            </div>
          );
        })}
    </>
  );
};

export default DesktopApp;
