// Keep source offsets alongside decoded values so completion can replace quoted tokens.
export interface Token {
  value: string;
  start: number;
  end: number;
}

// Completion accepts unfinished quotes; execution reports them as input errors.
export function tokenize(line: string, partial = false): Token[] {
  const tokens: Token[] = [];
  let value = "",
    start = -1,
    quote = "",
    escaped = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (start === -1 && /\s/.test(char)) continue;
    if (start === -1) start = i;
    if (escaped) {
      value += char;
      escaped = false;
    } else if (char === "\\" && quote !== "'") escaped = true;
    else if (quote) {
      if (char === quote) quote = "";
      else value += char;
    } else if (char === '"' || char === "'") quote = char;
    else if (/\s/.test(char)) {
      tokens.push({ value, start, end: i });
      value = "";
      start = -1;
    } else value += char;
  }
  if (!partial && (quote || escaped))
    throw new Error(quote ? "Unclosed quote" : "Incomplete escape");
  if (start !== -1) tokens.push({ value, start, end: line.length });
  return tokens;
}

export function parseCommand(line: string): [string, string[]] {
  const tokens = tokenize(line).map((token) => token.value);
  return [tokens[0] ?? "", tokens.slice(1)];
}

// Completion output must parse back into one argument, even with spaces or quotes.
export const quoteArgument = (value: string): string =>
  /^[a-zA-Z0-9_./~:-]+$/.test(value)
    ? value
    : '"' + value.replace(/["\\]/g, "\\$&") + '"';
