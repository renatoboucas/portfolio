import { Bot, User } from "lucide-react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatMessages({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="grid max-h-[560px] gap-4 overflow-y-auto rounded-xl border bg-slate-50/80 p-4">
      {messages.length === 0 ? (
        <div className="rounded-lg border border-dashed bg-white p-6 text-sm leading-6 text-slate-600">
          Ask about Renato&apos;s AI implementation work, RAG approach, Salesforce architecture,
          data engineering background, services, or project case studies.
        </div>
      ) : (
        messages.map((message) => (
          <div
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            key={message.id}
          >
            {message.role === "assistant" && (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                <Bot className="h-4 w-4" />
              </span>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                message.role === "user"
                  ? "bg-cyan-700 text-white"
                  : "border bg-white text-slate-700"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
            {message.role === "user" && (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-700 text-white">
                <User className="h-4 w-4" />
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
}

