import { LuPanelsTopLeft } from "react-icons/lu";
import { useState } from "react";
import type { AppShape } from "../../content/types";
import type { AppWindow } from "../../context/types";
import { useApp } from "../../context/AppContext";

interface OverflowingAppsProps {
  windows: AppWindow[];
  apps: Record<string, AppShape>;
  appImages: Record<string, string>;
}

const OverflowingApps = ({ windows, apps, appImages }: OverflowingAppsProps) => {
  const { dispatch } = useApp();
  // Unmounting on mobile or when all apps fit also resets the menu.
  const [isOpen, setIsOpen] = useState(false);
  const menuBackground = "bg-theme-inverse-surface text-theme-inverse-foreground";

  return (
    <div className={`flex flex-col shrink-0 ${isOpen ? menuBackground : ""}`}>
      <div
        className={`fixed flex flex-wrap bottom-13 z-98 transition-[opacity,scale,max-width,max-height] duration-500 ease-in-out origin-bottom-left ${menuBackground} ${isOpen ? "max-w-57 opacity-100 scale-100" : "max-w-0 opacity-0 scale-0"}`}
      >
        {windows.map((app) => (
          <div
            className="taskbar-item"
            key={app.id}
            onClick={() => {
              setIsOpen(false);
              dispatch({ type: "RESTORE_WINDOW", payload: { windowID: app.id } });
            }}
          >
            <img className="rounded-lg" src={appImages[apps[app.type].desktopImageSrc]} alt={app.title} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="taskbar-item"
        aria-label="Open apps"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <LuPanelsTopLeft className="size-7" aria-hidden="true" />
      </button>
    </div>
  );
};

export default OverflowingApps;
