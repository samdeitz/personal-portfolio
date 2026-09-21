import { useState, useRef, useEffect } from "react";
import { executeCommand } from "../../../commands/registry";
import apps from "../../../appInfo";
import { useApp } from "../../../context/AppContext";
import { useTheme } from "../../../context/ThemeContext";
import HBox from "../../ui/HBox";
import VBox from "../../ui/VBox";
import CommandOutput, {
  type CommandOutput as COutput,
} from "./terminal/CommandOutput";
import { autoFill } from "../../../filesystem/utils";
import { useFileSystem } from "../../../context/FileSystemContext";

export type HistoryRecord = {
  input: string;
  output: COutput;
};

const Terminal = () => {
  const inputRef = useRef(null);
  const [path, setPath] = useState("/home/sam");
  const { isDark, toggleTheme } = useTheme();
  const { dispatch, windows, focusedWindowID } = useApp();
  const [commandLine, setCommandLine] = useState("");
  const scrollRef = useRef(null); // NEW
  const wasAtBottomRef = useRef(true); // NEW

  const {
    history,
    setHistory,
    filesystem,
    setFileSystem,
    historyIndex,
    setHistoryIndex,
  } = useFileSystem();

  const checkIfAtBottom = () => {
    const el = scrollRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight <= 30;
  };

  const focusBottom = () => {
    const el = scrollRef.current;
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el && wasAtBottomRef.current) {
      focusBottom();
    }
  }, [history]);

  const processCommand = (line: string) => {
    wasAtBottomRef.current = checkIfAtBottom();
    const output: COutput = executeCommand(line, {
      isDark,
      toggleTheme,
      dispatch,
      windows,
      focusedWindowID,
      apps,
      path,
      setPath,
      setHistory,
    });

    setCommandLine("");
    if (output ? output.type !== "DNS" : true)
      setHistory((h) => [...h, { input: `${path} > ${line}`, output }]);
  };

  const handleTabKey = () => {
    const currInput = inputRef.current.value;
    const res: COutput = autoFill(currInput, path);

    switch (res.type) {
      case "message": {
        if (res.type === "message") {
          const splitInput: string[] = currInput.split(" ");
          const newInputArray: string[] = splitInput.slice(
            0,
            splitInput.length - 1,
          );
          const newInput = newInputArray.join(" ") + " " + res.content;

          setCommandLine(newInput);
        }
        break;
      }
      case "errorMessage": {
        setHistory((h) => [
          ...h,
          { input: `${path} > ${currInput}`, output: res },
        ]);
        break;
      }
      case "list": {
        setHistory((h) => [
          ...h,
          { input: `${path} > ${currInput}`, output: res },
        ]);
      }
    }
  };

  const handleUpKey = () => {
    if (historyIndex === -1) setHistoryIndex(history.length - 1);
    console.log(historyIndex);
    if (history[historyIndex]) {
      setCommandLine(history[historyIndex].input.split(">")[1].trim());
      setHistoryIndex((prev) => (prev != 0 ? prev - 1 : prev));
    }
  };

  const handleDownKey = () => {
    if (historyIndex === -1) return;
    setHistoryIndex((prev) => (prev != history.length - 1 ? prev + 1 : prev));
    setCommandLine(history[historyIndex].input.split(">")[1].trim());
  };

  const handlePress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(inputRef.current.value);
      setHistoryIndex(-1);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabKey();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      handleUpKey();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDownKey();
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <VBox
      onClick={focusInput}
      ref={scrollRef}
      className="bg-terminal w-full gap-2 h-full rounded-lg z-200 p-4 border-3 overflow-y-auto hide-scrollbar"
    >
      {history.map((entry, index) => {
        return (
          <VBox key={index} className="text-light-grey">
            <HBox className="gap-4">
              <p>{entry.input}</p>
            </HBox>
            <VBox>
              {entry.output && (
                <CommandOutput output={entry.output}></CommandOutput>
              )}
            </VBox>
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
