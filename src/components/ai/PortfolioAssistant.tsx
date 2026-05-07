"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

import { AssistantDisclaimer } from "@/components/ai/AssistantDisclaimer";
import { ChatInput } from "@/components/ai/ChatInput";
import { ChatMessages, type ChatMessage } from "@/components/ai/ChatMessages";
import { SuggestedQuestions } from "@/components/ai/SuggestedQuestions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

export function PortfolioAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendQuestion(question = input) {
    const trimmed = question.trim();

    if (!trimmed || isLoading) {
      return;
    }

    if (trimmed.length > 1000) {
      setError("Please keep questions under 1,000 characters.");
      return;
    }

    setError("");
    setInput("");
    setIsLoading(true);

    const userMessage = createMessage("user", trimmed);
    const assistantMessage = createMessage("assistant", "");
    const requestMessages = [...messages, userMessage].slice(-8);

    setMessages([...messages, userMessage, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: requestMessages }),
      });

      if (!response.ok || !response.body) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "The assistant could not respond.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        content += decoder.decode(value, { stream: true });
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id ? { ...message, content } : message,
          ),
        );
      }
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "The assistant is unavailable right now.";

      setError(message);
      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessage.id
            ? {
                ...chatMessage,
                content:
                  "I could not complete that response. Please try again or contact Renato directly.",
              }
            : chatMessage,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="overflow-hidden border-slate-200 shadow-xl">
      <CardHeader className="border-b bg-white">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-950 text-white">
            <Bot className="h-6 w-6" />
          </span>
          <div>
            <CardTitle className="text-2xl">Renato&apos;s AI Portfolio Assistant</CardTitle>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ask about Renato&apos;s public portfolio content: projects, services, AI/RAG work,
              Salesforce architecture, data engineering, and consulting focus.
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 p-5 sm:p-6">
        <AssistantDisclaimer />
        <SuggestedQuestions disabled={isLoading} onSelect={sendQuestion} />
        <ChatMessages messages={messages} />
        {error && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}
        <ChatInput input={input} isLoading={isLoading} onSubmit={() => sendQuestion()} setInput={setInput} />
        <div className="flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            For availability, rates, or private details, contact Renato directly.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact Renato
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

