export interface Message {
  type: "message";
  content: string;
}

export interface List {
  type: "list";
  content: string[];
}

export interface DNS {
  type: "DNS";
}

export interface ErrorMessage {
  type: "errorMessage";
  content: string;
}

export type CommandOutput = Message | List | DNS | ErrorMessage;

export default function CommandOutput({ output }: { output: CommandOutput }) {
  switch (output.type) {
    case "message":
    case "errorMessage":
      return <p>{output.content}</p>;
    case "list": {
      return output.content.map((item) => <p key={item}>{item}</p>);
    }
    default:
      return <p>Rendering Error</p>;
  }
}
