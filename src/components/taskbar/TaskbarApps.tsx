import type { RefObject } from "react";
import { useMediaQuery } from "react-responsive";
import type { AppShape } from "../../content/types";
import { useApp } from "../../context/AppContext";
import { useTaskbarCapacity } from "../../hooks/useTaskbarCapacity";
import OverflowingApps from "./OverflowingApps";

const appImages = import.meta.glob<string>("@/assets/icons/appIcons/*", {
  eager: true,
  import: "default",
});

// change keys to be by image name rather than path
const imagesByName: Record<string, string> = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url]),
);

interface TaskbarAppsProps {
  apps: Record<string, AppShape>;
  iconRef: RefObject<HTMLElement | null>;
}

const TaskbarApps = ({ apps, iconRef }: TaskbarAppsProps) => {
  const { windows, dispatch } = useApp();
  // Apps cannot be minimized on mobile.
  const notMobile = useMediaQuery({ minWidth: 400 });
  const { stripRef, slots } = useTaskbarCapacity(iconRef, notMobile);
  const visibleCount = windows.length > slots ? Math.max(0, slots - 1) : windows.length;
  const visibleApps = windows.slice(0, visibleCount);
  const hiddenApps = windows.slice(visibleCount);

  return (
    <div ref={stripRef} className={`flex flex-nowrap flex-1 ${notMobile ? "min-w-13" : "min-w-0"}`}>
      {notMobile && (
        <>
          {visibleApps.map((app) => (
            <div
              key={app.id}
              className="taskbar-item flex flex-col gap-2 bounce-container shrink-0 group"
              onClick={() => dispatch({ type: "RESTORE_WINDOW", payload: { windowID: app.id } })}
            >
              <img
                className="rounded-lg group-hover:animate-small-bounce"
                src={imagesByName[apps[app.type].desktopImageSrc]}
                alt={app.title}
              />
              <div className="bg-theme-indicator rounded-lg min-w-full min-h-1 m-auto" />
            </div>
          ))}
          {slots > 0 && hiddenApps.length > 0 && (
            <OverflowingApps windows={hiddenApps} apps={apps} appImages={imagesByName} />
          )}
        </>
      )}
    </div>
  );
};

export default TaskbarApps;
