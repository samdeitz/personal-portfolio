import { useRef } from "react";
import type { AppShape } from "../../content/types";
import Searchbar from "./Searchbar";
import TaskbarSocialLinks from "./TaskbarSocialLinks";
import TaskbarApps from "./TaskbarApps";
import TaskbarControls from "./TaskbarControls";

const Taskbar = ({ apps }: { apps: Record<string, AppShape> }) => {
  const iconRef = useRef<HTMLAnchorElement>(null);

  return (
    <div id="taskbar" className="fixed bottom-0 z-100 max-w-full">
      <div
        className="flex h-13 w-screen flex-nowrap items-center justify-between bg-theme-surface"
      >
        <Searchbar />
        <TaskbarSocialLinks iconRef={iconRef} />
        <TaskbarApps apps={apps} iconRef={iconRef} />
        <TaskbarControls />
      </div>
    </div>
  );
};

export default Taskbar;
