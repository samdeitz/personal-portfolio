import { useState, useEffect, useRef } from "react";
import VBox from "@/components/ui/VBox";
import HBox from "@/components/ui/HBox";
import { executeCommand } from "../../../commands/registry";
import { useTheme } from "@/context/ThemeContext.js";
import { useApp } from "@/context/AppContext.js";
import apps from "@/appInfo.js";

const Terminal = () => {
  const inputRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [path, setPath] = useState("/home/samdeitz");
  const { isDark, toggleTheme } = useTheme();
  const { dispatch, windows, focusedWindowID } = useApp();
  const [commandLine, setCommandLine] = useState("");

  const processCommand = (line) => {
    const output = executeCommand(line, {
      isDark,
      toggleTheme,
      dispatch,
      windows,
      focusedWindowID,
      apps,
    });

    setCommandLine("");
    setHistory((h) => [...h, { input: line, output }]);
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(inputRef.current.value);
    }
  };

  return (
    <VBox className="bg-terminal w-full h-full rounded-lg z-200 p-4">
      {history.map((entry, index) => {
        return (
          <VBox key={index}>
            <HBox className="gap-4">
              <p>{path} &gt;</p>
              <p className="text-light-grey">{entry.input}</p>
            </HBox>
            <HBox>
              <p>{entry.output}</p>
            </HBox>
          </VBox>
        );
      })}
      <HBox className="gap-4">
        <p>{path} &gt;</p>
        <input
          value={commandLine}
          onChange={(e) => setCommandLine(e.target.value)}
          ref={inputRef}
          onKeyDown={handlePress}
          autoFocus
          className="outline-none caret-terminal caret-tlight text-light-grey"
          type="text"
          autoComplete="off"
        />
      </HBox>
    </VBox>
  );
};

export default Terminal;
