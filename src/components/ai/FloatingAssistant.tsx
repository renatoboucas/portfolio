"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Minus, Send, ShieldCheck, Sparkles, X } from "lucide-react";

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
  "Summarize Renato's fit",
  "What AI/RAG work does he do?",
  "Can he help with Data Cloud?",
];

const contactIntentPattern = /\b(contact|email|reach out|connect|talk|speak|hire|consulting|consultation)\b/i;
const resumeIntentPattern = /\b(resume|cv|curriculum|background summary)\b/i;
const STORAGE_KEY = "renato-floating-assistant";
const initialAssistantMessage =
  "This is Renato's AI Portfolio Assistant. Ask about his work, services, AI/RAG experience, Salesforce architecture, or data engineering background.";

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
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

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
          ? "I can help prepare a resume request. What name should Renato see in the email?"
          : "I can help prepare a focused email to Renato. What name should Renato see in the message?",
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
            ? `Thanks, ${trimmed}. What should Renato know about the resume request?`
            : `Thanks, ${trimmed}. What context should Renato know before replying?`,
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
                  "I could not complete that response. You can still ask again, request a resume, or email Renato directly.",
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
          className="h-12 rounded-full border border-slate-200 bg-white px-4 text-slate-950 shadow-xl hover:bg-slate-50"
          onClick={() => setIsOpen(true)}
          type="button"
          variant="outline"
        >
          <MessageCircle className="h-4 w-4" />
          Ask AI Assistant
        </Button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Renato's AI Portfolio Assistant"
      className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:bottom-6 sm:right-6"
    >
      <div className="flex items-start justify-between border-b bg-white px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-white">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950">Renato&apos;s AI Portfolio Assistant</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {leadIntent ? "Preparing a focused email" : "Grounded in public portfolio content"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button aria-label="Minimize assistant" className="h-8 w-8" onClick={() => setIsOpen(false)} size="icon" variant="ghost">
            <Minus className="h-4 w-4" />
          </Button>
          <Button aria-label="Close assistant" className="h-8 w-8" onClick={() => setIsOpen(false)} size="icon" variant="ghost">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border-b bg-slate-50 px-4 py-3">
        <div className="flex items-start gap-2 text-xs leading-5 text-slate-600">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
          <p>Answers from curated portfolio knowledge. For private details, it will recommend contacting Renato.</p>
        </div>
      </div>

      <div className="max-h-[50vh] space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
        {messages.map((message) => (
          <div
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            key={message.id}
          >
            <p
              className={`max-w-[86%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${
                message.role === "user"
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {message.content || "Reviewing portfolio context..."}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="space-y-3 border-t bg-white p-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-3.5 w-3.5" />
            Suggested prompts
          </div>
          <div className="flex flex-wrap gap-2">
          {starterQuestions.map((question) => (
            <button
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:bg-white hover:text-slate-950"
              disabled={isLoading}
              key={question}
              onClick={() => sendQuestion(question)}
              type="button"
            >
              {question}
            </button>
          ))}
          </div>
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
            className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-slate-500"
            id="floating-assistant-input"
            maxLength={1000}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Renato's work..."
            value={input}
          />
          <Button className="h-10 w-10 rounded-full" disabled={isLoading || input.trim().length === 0} size="icon" type="submit">
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
