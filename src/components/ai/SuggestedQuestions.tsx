"use client";

import { Button } from "@/components/ui/button";

export const suggestedQuestions = [
  "What kind of AI implementation work does Renato do?",
  "How does Renato approach RAG projects?",
  "How does Renato combine Salesforce and AI?",
  "What Salesforce Marketing Cloud experience does Renato have?",
  "Can Renato help with Data Cloud and CRM/CDP activation?",
  "What data engineering tools does Renato work with?",
  "What projects best show Renato's architecture experience?",
  "How can I contact Renato?",
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
      <p className="mb-3 text-sm font-semibold text-slate-700">Suggested questions</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <Button
            className="h-auto rounded-full px-3 py-2 text-left text-xs"
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

