"use client";

import { Button } from "@/components/ui/button";

export const suggestedQuestions = [
  "Summarize Renato's fit for an AI architect role.",
  "How does Renato approach RAG projects?",
  "What Salesforce and Data Cloud experience does Renato have?",
  "Which projects best show architecture depth?",
  "How can I contact Renato or request a resume?",
];

export function SuggestedQuestions({
  onSelect,
  disabled,
}: {
  onSelect: (question: string) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Suggested prompts</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <Button
            className="h-auto rounded-full border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs text-slate-700 hover:bg-white"
            disabled={disabled}
            key={question}
            onClick={() => onSelect(question)}
            type="button"
            variant="outline"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}
