"use client";

import { useEffect, useState } from "react";
import { Bot, MessageCircle, Minus, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, mailtoLink } from "@/data/contact";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type LeadIntent = "contact" | "resume" | null;
type LeadStep = "name" | "context" | null;

const starterQuestions = [
  "What AI implementation work does Renato do?",
  "How does Renato approach RAG?",
  "Can Renato help with Data Cloud?",
];

const contactIntentPattern = /\b(contact|email|reach out|connect|talk|speak|hire|consulting|consultation)\b/i;
const resumeIntentPattern = /\b(resume|cv|curriculum|background summary)\b/i;
const STORAGE_KEY = "renato-floating-assistant";
const initialAssistantMessage =
  "Hi, I am Renato's AI Portfolio Assistant. Ask about Renato's projects, services, AI/RAG work, Salesforce experience, or data engineering background.";

type StoredAssistantSession = {
  isOpen?: boolean;
  messages?: ChatMessage[];
  leadIntent?: LeadIntent;
  leadStep?: LeadStep;
  leadName?: string;
  leadContext?: string;
};

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

function getStoredAssistantSession(): StoredAssistantSession {
  if (typeof window === "undefined") {
    return {};
  }

  const stored = window.sessionStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return {};
  }

  try {
    return JSON.parse(stored) as StoredAssistantSession;
  } catch {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

export function FloatingAssistant() {
  const storedSession = getStoredAssistantSession();

  const [isOpen, setIsOpen] = useState(storedSession.isOpen ?? true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(
    Array.isArray(storedSession.messages) && storedSession.messages.length > 0
      ? storedSession.messages
      : [createMessage("assistant", initialAssistantMessage)],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [leadIntent, setLeadIntent] = useState<LeadIntent>(storedSession.leadIntent ?? null);
  const [leadStep, setLeadStep] = useState<LeadStep>(storedSession.leadStep ?? null);
  const [leadName, setLeadName] = useState(storedSession.leadName ?? "");
  const [leadContext, setLeadContext] = useState(storedSession.leadContext ?? "");

  useEffect(() => {
    window.sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        isOpen,
        messages,
        leadIntent,
        leadStep,
        leadName,
        leadContext,
      }),
    );
  }, [isOpen, messages, leadIntent, leadStep, leadName, leadContext]);

  useEffect(() => {
    function openAssistantFromLink(event?: Event) {
      if (event) {
        event.preventDefault();
      }

      setIsOpen(true);
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    function handleHashChange() {
      if (window.location.hash === "#ask-ai") {
        openAssistantFromLink();
      }
    }

    function handleDocumentClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (target?.getAttribute("href") === "#ask-ai") {
        openAssistantFromLink(event);
      }
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function openLeadFlow(intent: Exclude<LeadIntent, null>) {
    setLeadIntent(intent);
    setLeadStep("name");
    setLeadName("");
    setLeadContext("");
    setMessages((current) => [
      ...current,
      createMessage(
        "assistant",
        intent === "resume"
          ? "I can help you request Renato's resume. What is your name?"
          : "I can help you start an email to Renato. What is your name?",
      ),
    ]);
  }

  function openEmailDraft(intent: Exclude<LeadIntent, null>, name: string, context: string) {
    const subject =
      intent === "resume" ? "Resume Request from Portfolio" : "Portfolio Contact Request";
    const body =
      intent === "resume"
        ? `Hi Renato,\n\nMy name is ${name}.\n\nCould you please send me your current resume?\n\nWhat Renato should know before replying:\n${context}`
        : `Hi Renato,\n\nMy name is ${name}.\n\nI found your portfolio and would like to connect.\n\nWhat Renato should know before replying:\n${context}`;

    window.location.assign(mailtoLink(subject, body));
  }

  function handleLeadConversation(trimmed: string, userMessage: ChatMessage) {
    if (!leadIntent || !leadStep) {
      return false;
    }

    if (leadStep === "name") {
      setLeadName(trimmed);
      setLeadStep("context");
      setMessages((current) => [
        ...current,
        userMessage,
        createMessage(
          "assistant",
          leadIntent === "resume"
            ? `Thanks, ${trimmed}. What should Renato know before sending the resume?`
            : `Thanks, ${trimmed}. What should Renato know before he replies?`,
        ),
      ]);
      return true;
    }

    const name = leadName || "there";
    setLeadContext(trimmed);
    setMessages((current) => [
      ...current,
      userMessage,
      createMessage(
        "assistant",
        "Got it. I am opening a prefilled email draft now. You can review it before sending.",
      ),
    ]);
    openEmailDraft(leadIntent, name, trimmed);
    setLeadIntent(null);
    setLeadStep(null);
    setLeadName("");
    setLeadContext("");
    return true;
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

    if (handleLeadConversation(trimmed, userMessage)) {
      setIsLoading(false);
      return;
    }

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
            <p className="text-xs text-slate-500">
              {leadIntent ? "Contact flow" : "Public portfolio answers"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
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
