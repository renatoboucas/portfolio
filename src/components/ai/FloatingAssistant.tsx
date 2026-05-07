"use client";

import { useState } from "react";
import { Bot, Maximize2, MessageCircle, Minus, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, mailtoLink } from "@/data/contact";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type LeadIntent = "contact" | "resume" | null;

const starterQuestions = [
  "What AI implementation work does Renato do?",
  "How does Renato approach RAG?",
  "Can Renato help with Data Cloud?",
];

const contactIntentPattern = /\b(contact|email|reach out|connect|talk|speak|hire|consulting|consultation)\b/i;
const resumeIntentPattern = /\b(resume|cv|curriculum|background summary)\b/i;

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      "assistant",
      "Hi, I am Renato's AI Portfolio Assistant. Ask about Renato's projects, services, AI/RAG work, Salesforce experience, or data engineering background.",
    ),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [leadIntent, setLeadIntent] = useState<LeadIntent>(null);
  const [leadName, setLeadName] = useState("");
  const [leadContext, setLeadContext] = useState("");

  function openLeadFlow(intent: Exclude<LeadIntent, null>) {
    setLeadIntent(intent);
    setMessages((current) => [
      ...current,
      createMessage(
        "assistant",
        intent === "resume"
          ? "I can help you request Renato's resume. Please share your name and what Renato should know before he replies."
          : "I can help you start an email to Renato. Please share your name and what Renato should know before he replies.",
      ),
    ]);
  }

  function submitLeadRequest() {
    const name = leadName.trim();
    const context = leadContext.trim();

    if (!name || !context || !leadIntent) {
      setError("Please add your name and a short note before continuing.");
      return;
    }

    setError("");

    const subject =
      leadIntent === "resume" ? "Resume Request from Portfolio" : "Portfolio Contact Request";
    const body =
      leadIntent === "resume"
        ? `Hi Renato,\n\nMy name is ${name}.\n\nCould you please send me your current resume?\n\nWhat Renato should know before replying:\n${context}`
        : `Hi Renato,\n\nMy name is ${name}.\n\nI found your portfolio and would like to connect.\n\nWhat Renato should know before replying:\n${context}`;

    window.location.href = mailtoLink(subject, body);
  }

  async function sendQuestion(question = input) {
    const trimmed = question.trim();

    if (!trimmed || isLoading) {
      return;
    }

    setInput("");
    setError("");
    setIsLoading(true);

    const userMessage = createMessage("user", trimmed);
    const assistantMessage = createMessage("assistant", "");
    const requestMessages = [...messages, userMessage]
      .filter((message) => message.role === "user" || message.role === "assistant")
      .slice(-8);

    const detectedLeadIntent = resumeIntentPattern.test(trimmed)
      ? "resume"
      : contactIntentPattern.test(trimmed)
        ? "contact"
        : null;

    if (detectedLeadIntent) {
      setIsLoading(false);
      setMessages((current) => [...current, userMessage]);
      openLeadFlow(detectedLeadIntent);
      return;
    }

    setMessages((current) => [...current, userMessage, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: requestMessages }),
      });

      if (!response.ok || !response.body) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "The assistant could not respond.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const delta = decoder.decode(value, { stream: true });
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: `${message.content}${delta}` }
              : message,
          ),
        );
      }
    } catch (caughtError) {
      const message =
        caughtError instanceof Error ? caughtError.message : "The assistant is unavailable.";
      setError(message);
      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessage.id
            ? {
                ...chatMessage,
                content:
                  "I could not complete that response. You can still email Renato directly or request a resume below.",
              }
            : chatMessage,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          className="h-14 rounded-full px-5 shadow-xl"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <MessageCircle className="h-5 w-5" />
          Ask AI
        </Button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Renato's AI Portfolio Assistant"
      className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:bottom-6 sm:right-6"
    >
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-white">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950">AI Portfolio Assistant</p>
            <p className="text-xs text-slate-500">Public portfolio answers</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button asChild aria-label="Open full assistant page" size="icon" variant="ghost">
            <a href="/ask">
              <Maximize2 className="h-4 w-4" />
            </a>
          </Button>
          <Button aria-label="Minimize assistant" onClick={() => setIsOpen(false)} size="icon" variant="ghost">
            <Minus className="h-4 w-4" />
          </Button>
          <Button aria-label="Close assistant" onClick={() => setIsOpen(false)} size="icon" variant="ghost">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="max-h-[52vh] space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
        {messages.map((message) => (
          <div
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            key={message.id}
          >
            <p
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-6 ${
                message.role === "user"
                  ? "bg-slate-950 text-white"
                  : "border bg-white text-slate-700"
              }`}
            >
              {message.content || "Thinking..."}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {starterQuestions.map((question) => (
            <button
              className="rounded-full border px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-400 hover:text-slate-950"
              disabled={isLoading}
              key={question}
              onClick={() => sendQuestion(question)}
              type="button"
            >
              {question}
            </button>
          ))}
        </div>

        {error && <p className="text-xs leading-5 text-red-600">{error}</p>}

        {leadIntent && (
          <div className="rounded-xl border bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-950">
              {leadIntent === "resume" ? "Request resume" : "Start a conversation"}
            </p>
            <div className="mt-3 grid gap-2">
              <label className="grid gap-1 text-xs font-medium text-slate-600">
                Your name
                <input
                  className="rounded-md border bg-white px-3 py-2 text-sm font-normal text-slate-950 outline-none focus:border-slate-500"
                  onChange={(event) => setLeadName(event.target.value)}
                  placeholder="Jane Smith"
                  value={leadName}
                />
              </label>
              <label className="grid gap-1 text-xs font-medium text-slate-600">
                What should Renato know before he replies?
                <textarea
                  className="min-h-20 resize-none rounded-md border bg-white px-3 py-2 text-sm font-normal text-slate-950 outline-none focus:border-slate-500"
                  onChange={(event) => setLeadContext(event.target.value)}
                  placeholder="Share the role, project, question, or reason for reaching out."
                  value={leadContext}
                />
              </label>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={submitLeadRequest} size="sm" type="button">
                  Open email draft
                </Button>
                <Button
                  onClick={() => {
                    setLeadIntent(null);
                    setLeadName("");
                    setLeadContext("");
                  }}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            sendQuestion();
          }}
        >
          <label className="sr-only" htmlFor="floating-assistant-input">
            Ask Renato&apos;s AI Portfolio Assistant
          </label>
          <input
            className="min-w-0 flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:border-slate-500"
            id="floating-assistant-input"
            maxLength={1000}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Renato's work..."
            value={input}
          />
          <Button disabled={isLoading || input.trim().length === 0} size="icon" type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
        {contactInfo.linkedin && (
          <a
            className="block text-center text-xs font-medium text-slate-500 hover:text-slate-950"
            href={contactInfo.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            View LinkedIn profile
          </a>
        )}
      </div>
    </aside>
  );
}
