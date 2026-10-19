import { useRef, useEffect, useState, type KeyboardEvent } from "react";
import { executeCommand } from "../../../commands/registry";
import { completeCommand } from "../../../commands/completion";
import { filesystem } from "../../../filesystem";
import { useApp } from "../../../context/AppContext";
import { useTheme } from "../../../context/ThemeContext";
import { useTerminalSession } from "../../../context/TerminalContext";
import CommandOutput from "./terminal/CommandOutput";

export default function Terminal({ windowID }: { windowID: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wasAtBottom = useRef(true);
  const { session, update } = useTerminalSession(windowID);
  const { isDark, setTheme } = useTheme();
  const { dispatch, openApp } = useApp();
  // Suggestions are temporary UI, separate from the persisted session transcript.
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const context = { cwd: session.cwd, filesystem, isDark };

  // Follow new output when already at the bottom, preserving scroll position otherwise.
  useEffect(() => {
    if (wasAtBottom.current && scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [session.transcript, suggestions]);

  const submit = () => {
    const result = executeCommand(session.input, context);
    let cwd: string | undefined;
    let clear = false;
    // Apply app effects here; directory/clear effects join the single session update below.
    for (const effect of result.effects ?? []) {
      switch (effect.type) {
        case "changeDirectory":
          cwd = effect.path;
          break;
        case "clear":
          clear = true;
          break;
        case "theme":
          setTheme(effect.theme);
          break;
        case "openApp":
          openApp(effect.appID);
          break;
        case "close":
          // Mouse focus may point at another window; exit always targets this terminal.
          dispatch({ type: "CLOSE_WINDOW", payload: { windowID } });
          break;
      }
    }
    // Explicit submission brings the new prompt into view, even after scrolling up.
    wasAtBottom.current = true;
    setSuggestions([]);
    update({
      type: "submit",
      command: session.input,
      output: result.output,
      cwd,
      clear,
    });
  };

  const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
    // Enter used to confirm an IME composition must not submit a command.
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      setSuggestions([]);
      update({ type: "recall", direction: event.key === "ArrowUp" ? -1 : 1 });
    } else if (event.key === "Tab") {
      event.preventDefault();
      const completion = completeCommand(
        session.input,
        event.currentTarget.selectionStart ?? session.input.length,
        context,
      );
      update({ type: "input", value: completion.input });
      setSuggestions(completion.suggestions);
      // Restore the caret after React commits the completed controlled-input value.
      requestAnimationFrame(() =>
        inputRef.current?.setSelectionRange(completion.caret, completion.caret),
      );
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={() => {
        const el = scrollRef.current;
        if (el)
          wasAtBottom.current =
            el.scrollHeight - el.scrollTop - el.clientHeight <= 30;
      }}
      onClick={() => {
        // Let users select/copy output without moving focus back to the input.
        if (!window.getSelection()?.toString()) inputRef.current?.focus();
      }}
      className="bg-theme-terminal text-theme-on-dark w-full h-full min-h-0 overflow-y-auto rounded-lg p-4 font-mono text-sm"
    >
      <p className="mb-3 opacity-70">
        Type help for commands. Explore with ls, cd, and launch.
      </p>
      <div role="log" aria-label="Terminal output" aria-live="polite">
        {session.transcript.map((entry) => (
          <div key={entry.id} className="mb-2">
            <p className="whitespace-pre-wrap break-words">
              {entry.cwd} &gt; {entry.command}
            </p>
            {entry.output && <CommandOutput output={entry.output} />}
          </div>
        ))}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="shrink-0">{session.cwd} &gt;</span>
        <input
          ref={inputRef}
          value={session.input}
          aria-label="Terminal command"
          autoFocus
          onChange={(event) => {
            update({ type: "input", value: event.target.value });
            setSuggestions([]);
          }}
          onKeyDown={handleKey}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="min-w-0 flex-1 bg-transparent outline-none caret-terminal caret-theme-on-dark"
        />
      </div>
      {suggestions.length > 0 && (
        <p
          aria-live="polite"
          className="mt-2 whitespace-pre-wrap break-words opacity-70"
        >
          {suggestions.join("  ")}
        </p>
      )}
    </div>
  );
}
