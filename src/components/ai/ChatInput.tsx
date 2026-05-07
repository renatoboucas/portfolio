"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ChatInput({
  input,
  setInput,
  isLoading,
  onSubmit,
}: {
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  onSubmit: () => void;
}) {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label className="sr-only" htmlFor="assistant-question">
        Ask Renato&apos;s AI Portfolio Assistant
      </label>
      <textarea
        className="min-h-24 flex-1 resize-none rounded-lg border bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-sm outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
        id="assistant-question"
        maxLength={1000}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Ask about AI implementation, RAG, Salesforce, Data Cloud, projects, or services..."
        value={input}
      />
      <Button className="sm:self-end" disabled={isLoading || input.trim().length === 0} size="lg">
        {isLoading ? "Thinking" : "Ask"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

