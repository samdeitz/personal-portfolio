import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext";

const TaskbarControls = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-nowrap shrink-0">
      <a href="../../SamDeitz.pdf" target="_blank" rel="noreferrer" className="taskbar-item flex items-center w-20">
        resume
      </a>
      <button
        type="button"
        onClick={toggleTheme}
        className="taskbar-item border-0 outline-none"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <LuSun className="size-7" aria-hidden="true" /> : <LuMoon className="size-7" aria-hidden="true" />}
      </button>
    </div>
  );
};

export default TaskbarControls;
