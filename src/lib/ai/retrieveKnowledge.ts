import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type KnowledgeChunk = {
  id: string;
  source: string;
  title: string;
  content: string;
  score: number;
};

const KNOWLEDGE_DIR = path.join(process.cwd(), "content", "knowledge");
const MAX_CHUNK_LENGTH = 1200;
const STOP_WORDS = new Set([
  "about",
  "after",
  "also",
  "and",
  "are",
  "can",
  "does",
  "for",
  "from",
  "has",
  "have",
  "his",
  "how",
  "into",
  "not",
  "renato",
  "that",
  "the",
  "this",
  "what",
  "when",
  "where",
  "with",
  "work",
]);

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9/+\s-]/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function splitIntoChunks(source: string, markdown: string): KnowledgeChunk[] {
  const sections = markdown
    .split(/\n(?=##?\s)/g)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.flatMap((section, sectionIndex) => {
    const title = section.match(/^#+\s+(.+)$/m)?.[1] ?? source;
    const paragraphs = section
      .split(/\n{2,}/g)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    const chunks: KnowledgeChunk[] = [];
    let current = "";

    for (const paragraph of paragraphs) {
      if (`${current}\n\n${paragraph}`.length > MAX_CHUNK_LENGTH && current) {
        chunks.push({
          id: `${source}-${sectionIndex}-${chunks.length}`,
          source,
          title,
          content: current,
          score: 0,
        });
        current = paragraph;
      } else {
        current = current ? `${current}\n\n${paragraph}` : paragraph;
      }
    }

    if (current) {
      chunks.push({
        id: `${source}-${sectionIndex}-${chunks.length}`,
        source,
        title,
        content: current,
        score: 0,
      });
    }

    return chunks;
  });
}

async function loadKnowledgeChunks() {
  const files = (await readdir(KNOWLEDGE_DIR)).filter((file) => file.endsWith(".md"));
  const documents = await Promise.all(
    files.map(async (file) => ({
      file,
      content: await readFile(path.join(KNOWLEDGE_DIR, file), "utf8"),
    })),
  );

  return documents.flatMap((document) => splitIntoChunks(document.file, document.content));
}

function scoreChunk(queryTerms: string[], chunk: KnowledgeChunk) {
  const haystack = `${chunk.title}\n${chunk.content}`.toLowerCase();

  return queryTerms.reduce((score, term) => {
    const exactMatches = haystack.split(term).length - 1;
    const titleBoost = chunk.title.toLowerCase().includes(term) ? 3 : 0;
    return score + exactMatches + titleBoost;
  }, 0);
}

export async function retrieveKnowledge(query: string, limit = 5): Promise<KnowledgeChunk[]> {
  const queryTerms = Array.from(new Set(tokenize(query)));

  if (queryTerms.length === 0) {
    return [];
  }

  const chunks = await loadKnowledgeChunks();

  return chunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(queryTerms, chunk),
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

