import OpenTab from "./OpenTab";
import { useApp } from "../../context/AppContext";

const DesktopApp = () => {
  const { windows, layoutGrid, layouts } = useApp(); // open app information

  return (
    <>
      {Object.values(layouts).length != 0 && (
        <div
          className="fixed w-full top-0 bottom-13 z-99 p-4 backdrop-blur-[2px]"
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
                windowID={window.id}
              ></OpenTab>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DesktopApp;
