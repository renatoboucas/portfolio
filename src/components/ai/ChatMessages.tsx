export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatMessages({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="grid max-h-[560px] gap-4 overflow-y-auto border-y bg-slate-50 p-4">
      {messages.length === 0 ? (
        <div className="bg-white p-5 text-sm leading-6 text-slate-600">
          Ask about Renato&apos;s AI architecture work, RAG approach, Salesforce and Data Cloud
          experience, services, or case studies.
        </div>
      ) : (
        messages.map((message) => (
          <div
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            key={message.id}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                message.role === "user"
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
