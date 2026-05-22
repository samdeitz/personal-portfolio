import { useState, useMemo, useEffect } from "react";
import { AppContext } from "./AppContext.js";
import apps from "@/appInfo.js";

export const AppProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [focusedWindow, setFocusedWindow] = useState("");
  const layoutGrid = {
    cols: 50,
    rows: 50,
    gap: 8,
  };

  const restoreWindow = (windowID) => {
    setFocusedWindow(windows.find((window) => window.id === windowID));
    setWindows(
      windows.map((window) => {
        if (window.id === windowID && window.minimized)
          return {
            ...window,
            minimized: false,
          };
        return window;
      }),
    );
  };

  const createWindow = (appID) => {
    let appType = Object.values(apps).find(
      (appInfo) => appInfo.id === appID,
    ).title;

    let newWindow = {
      id: crypto.randomUUID(),
      type: appType,
      title: appType,
      layout:
        windows.length != 0
          ? getLayout()
          : {
              colStart: 1,
              rowStart: 1,
              colEnd: layoutGrid.cols,
              rowEnd: layoutGrid.rows,
            },
      minimized: false,
      zIndex: windows.length != 0 ? windows[0].zIndex + 1 : 100,
    };

    setWindows([...windows, newWindow]);
    setFocusedWindow(newWindow);
  };

  // The 'x' on the open app is clicked
  const closeApp = (windowID) => {
    // setIsVisible(false); // no longer visible

    // update context for other components
    setTimeout(() => {
      setWindows(windows.filter((window) => window.id != windowID));
    }, 300);
  };

  // The '-' on the open app is clicked
  const minimizeApp = (windowID) => {
    // setIsVisible(false); // no longer visible

    // update context
    setTimeout(() => {
      setWindows(
        windows.map((window) => {
          if (window.id == windowID)
            return {
              ...window,
              minimized: true,
            };
          return window;
        }),
      );
    }, 300);
  };

  const getLayout = () => {
    if (windows.length === 0) return null;
    const parentLayout = focusedWindow.layout;
    const layout = {
      colStart: 0,
      rowStart: 0,
      colEnd: parentLayout.colEnd,
      rowEnd: parentLayout.rowEnd,
    };

    if (
      parentLayout.colStart - parentLayout.colEnd >
      parentLayout.rowStart - parentLayout.rowEnd
    ) {
      // width > height
      // create new layout values -> split window horizontally
      layout.colStart =
        Math.abs(parentLayout.colStart + parentLayout.colEnd) / 2;
      layout.rowStart = parentLayout.rowStart;

      // update parent layout
      setWindows(
        windows.map((window) => {
          if (window.id === focusedWindow.id) {
            return {
              ...focusedWindow,
              layout: {
                ...focusedWindow.layout,
                colEnd:
                  Math.abs(focusedWindow.colStart - focusedWindow.colEnd) / 2,
              },
            };
          } else return window;
        }),
      );
    } else {
      // create new layout values -> split window vertically
      layout.colStart = parentLayout.colStart;
      layout.rowStart =
        Math.abs(parentLayout.rowStart - parentLayout.rowEnd) / 2;

      // update parent layout
      setWindows(
        windows.map((window) => {
          if (windows.id === focusedWindow.id) {
            return {
              ...focusedWindow,
              layout: {
                ...focusedWindow.layout,
                rowEnd:
                  Math.abs(focusedWindow.rowStart - focusedWindow.rowEnd) / 2,
              },
            };
          } else return window;
        }),
      );
    }
    return layout;
  };

  // const getSize = () => {
  //   const parentSize = focusedWindow.size;
  //   let width = 0;
  //   let height = 0;
  //   if (parentSize.width > parentSize.height) {
  //     width = parentSize.width / 2;
  //     height = parentSize.height;
  //   } else {
  //     width = parentSize.width;
  //     height = parentSize.height / 2;
  //   }
  //
  //   return { width, height };
  // };
  //
  // const getPosition = () => {
  //   const parentSize = focusedWindow.size;
  //   const parentPos = focusedWindow.position;
  //   let x = 0;
  //   let y = 0;
  //
  //   if (parentSize.width > parentSize.height) {
  //   }
  // };

  useEffect(() => {
    console.log(windows);
  }, [windows]);
  // implement useMemo to avoid updating all states when one state changes
  const appValue = useMemo(
    () => ({
      createWindow,
      restoreWindow,
      closeApp,
      minimizeApp,
      windows,
      setWindows,
      layoutGrid,
    }),
    [windows, setWindows],
  );

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
