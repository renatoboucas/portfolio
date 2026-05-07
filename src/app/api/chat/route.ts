import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { buildPortfolioContext, portfolioAssistantSystemPrompt } from "@/lib/ai/prompts";
import { retrieveKnowledge } from "@/lib/ai/retrieveKnowledge";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 1000;
const MAX_MESSAGES = 8;
const openaiApiKey = process.env.OPENAI_API_KEY || process.env.openai_api_key;
const UNSUPPORTED_PRIVATE_PATTERNS = [
  /\b(rate|rates|hourly|salary|compensation|pricing|price|cost)\b/i,
  /\b(available next|availability|start date|next week|this week)\b/i,
  /\b(confidential|private client|private project|internal project|secret)\b/i,
];

type IncomingMessage = {
  role?: string;
  content?: string;
};

type ChatApiMessage = {
  role: "user" | "assistant";
  content: string;
};

function sanitizeMessages(messages: IncomingMessage[]): ChatApiMessage[] {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role as "user" | "assistant",
      content: String(message.content ?? "").slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content.trim().length > 0);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { messages?: IncomingMessage[] } | null;
  const messages = sanitizeMessages(Array.isArray(body?.messages) ? body.messages : []);
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");

  if (!latestUserMessage?.content.trim()) {
    return Response.json({ error: "Please send a question for the assistant." }, { status: 400 });
  }

  if (latestUserMessage.content.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Please keep questions under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 },
    );
  }

  if (UNSUPPORTED_PRIVATE_PATTERNS.some((pattern) => pattern.test(latestUserMessage.content))) {
    return new Response(
      "Renato's AI Portfolio Assistant does not have enough public portfolio context to answer questions about private details, confidential work, availability, rates, or compensation. Please contact Renato directly at renatoboucas@gmail.com or through LinkedIn for that kind of information.",
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      },
    );
  }

  if (!openaiApiKey) {
    return Response.json(
      {
        error:
          "OPENAI_API_KEY is not configured. Add it locally or in Vercel to enable the assistant. Environment variable names are case-sensitive.",
      },
      { status: 503 },
    );
  }

  const chunks = await retrieveKnowledge(latestUserMessage.content);
  const context = buildPortfolioContext(chunks);
  const openai = createOpenAI({ apiKey: openaiApiKey });

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: `${portfolioAssistantSystemPrompt}

Portfolio knowledge context:
${context}`,
    messages,
    temperature: 0.3,
    maxOutputTokens: 650,
  });

  return result.toTextStreamResponse();
}
