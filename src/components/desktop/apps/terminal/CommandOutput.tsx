import type { CommandOutput as Output } from "../../../../commands/types";

export default function CommandOutput({ output }: { output: Output }) {
  if (output.type === "list") return <div>{output.content.map((item, index) => <p className="whitespace-pre-wrap break-words" key={index}>{item}</p>)}</div>;
  return <p className={`whitespace-pre-wrap break-words ${output.type === "errorMessage" ? "text-red-400" : ""}`}>{output.content}</p>;
}
