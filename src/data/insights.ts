export type InsightSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured: boolean;
  author: string;
  content: {
    intro: string;
    sections: InsightSection[];
    conclusion: string;
  };
};

export const insights: Insight[] = [
  {
    slug: "why-ai-projects-need-data-architecture",
    title: "Why AI Projects Need Data Architecture Before Model Selection",
    description:
      "A practical look at why successful AI implementation depends on trusted data, workflow context, and strong integration patterns.",
    category: "AI Implementation",
    tags: ["AI", "Data Engineering", "LLM", "RAG", "Architecture"],
    publishedAt: "2026-05-01",
    readingTime: "5 min read",
    featured: true,
    author: "Renato Boucas",
    content: {
      intro:
        "Many AI projects start with model selection, but the most important questions often come earlier: what data can the model trust, where does that data live, and how will the output be used?",
      sections: [
        {
          heading: "AI needs context, not just prompts",
          body: [
            "A strong prompt can improve an answer, but it cannot replace missing business context, poor documentation, fragmented systems, or unreliable data.",
            "For AI to be useful in real workflows, it needs access to trusted knowledge, clearly defined tasks, and boundaries around what it should and should not answer.",
          ],
          bullets: [
            "Trusted business data",
            "Clear workflow context",
            "Reliable system integration",
            "Human review where needed",
          ],
        },
        {
          heading: "Model selection is a later decision",
          body: [
            "OpenAI, Anthropic Claude, Google Gemini, and Salesforce-native AI options can all be useful, but the right choice depends on the workflow, data sensitivity, integration needs, and user experience.",
            "Teams get better outcomes when they first define the job to be done, the source systems involved, and the operating risks.",
          ],
        },
        {
          heading: "Data architecture turns AI into a system",
          body: [
            "AI becomes more valuable when it is connected to well-modeled customer data, documented business logic, CRM context, and clear escalation paths.",
            "That means data quality, ownership, access rules, and integration patterns are part of AI implementation, not separate technical chores.",
          ],
        },
      ],
      conclusion:
        "The best AI implementations are not just model implementations. They are data, workflow, and architecture implementations.",
    },
  },
  {
    slug: "rag-is-not-just-a-chatbot",
    title: "RAG Is Not Just a Chatbot: It Is a Knowledge Architecture Problem",
    description:
      "Retrieval-augmented generation works best when teams treat documents, metadata, permissions, retrieval relevance, and answer evaluation as core architecture decisions.",
    category: "LLM / RAG",
    tags: ["RAG", "LLM", "Knowledge Base", "AI", "Search"],
    publishedAt: "2026-05-02",
    readingTime: "6 min read",
    featured: true,
    author: "Renato Boucas",
    content: {
      intro:
        "RAG is often described as connecting a chatbot to documents. In practice, it is a knowledge architecture problem that requires careful decisions about source quality, retrieval design, permissions, and answer evaluation.",
      sections: [
        {
          heading: "The hard work starts before embeddings",
          body: [
            "If the source material is outdated, duplicated, contradictory, or missing ownership, a retrieval system will expose those issues quickly.",
            "Teams should inventory documents, define trusted sources, remove stale content, and decide what the assistant should never answer before building the experience.",
          ],
          bullets: ["Document quality", "Source ownership", "Metadata strategy", "Permission boundaries"],
        },
        {
          heading: "Retrieval quality is product quality",
          body: [
            "Chunking, metadata, ranking, and query rewriting all affect whether the generated answer feels useful or unreliable.",
            "A good RAG system should make it easy to inspect sources and understand why a response was generated.",
          ],
        },
        {
          heading: "Evaluation needs business context",
          body: [
            "Evaluation is not only a technical benchmark. For internal teams, it should test whether answers are correct, actionable, appropriately scoped, and safe for the workflow.",
            "Human review, source citations, and confidence thresholds are practical controls that help teams trust the system over time.",
          ],
        },
      ],
      conclusion:
        "RAG succeeds when knowledge, retrieval, permissions, and workflow design are treated as one system.",
    },
  },
  {
    slug: "how-salesforce-data-can-power-better-ai-workflows",
    title: "How Salesforce Data Can Power Better AI Workflows",
    description:
      "Salesforce CRM, Marketing Cloud, Data Cloud, preferences, campaign history, and customer profile data can support stronger AI workflows when structured and governed properly.",
    category: "Salesforce AI",
    tags: ["Salesforce", "Data Cloud", "CRM", "AI", "Customer Data"],
    publishedAt: "2026-05-03",
    readingTime: "5 min read",
    featured: true,
    author: "Renato Boucas",
    content: {
      intro:
        "Salesforce data can be a strong foundation for AI workflows, but only when customer profiles, permissions, campaign history, preferences, and operational context are structured in ways AI systems can safely use.",
      sections: [
        {
          heading: "Customer context matters",
          body: [
            "AI assistants become more useful when they can understand account context, engagement history, lifecycle stage, consent state, and recent interactions.",
            "That context often lives across Salesforce CRM, Marketing Cloud, Data Cloud, support systems, and campaign platforms.",
          ],
        },
        {
          heading: "Activation data needs governance",
          body: [
            "Customer data used for segmentation or personalization should include source, freshness, permission, and quality rules.",
            "Without those rules, AI can recommend actions that conflict with consent, outdated data, or operational reality.",
          ],
          bullets: ["Consent alignment", "Identity resolution", "Preference logic", "Source freshness"],
        },
        {
          heading: "AI should support the workflow",
          body: [
            "Salesforce-native tools may be the right fit for CRM workflows, while OpenAI, Anthropic, or Google AI may fit broader assistant, analysis, or knowledge use cases.",
            "The right architecture connects the tool to the job, the data, and the team that needs to use the output.",
          ],
        },
      ],
      conclusion:
        "Salesforce data can power better AI when it is treated as governed operational context, not just fields in a database.",
    },
  },
  {
    slug: "the-hidden-data-problems-behind-marketing-automation",
    title: "The Hidden Data Problems Behind Marketing Automation",
    description:
      "A practical look at duplicate profiles, unclear sources of truth, fragile journeys, outdated segments, missing consent logic, and weak reporting data.",
    category: "Marketing Technology",
    tags: ["Marketing Automation", "Salesforce Marketing Cloud", "Data Quality", "CRM/CDP"],
    publishedAt: "2026-05-04",
    readingTime: "6 min read",
    featured: false,
    author: "Renato Boucas",
    content: {
      intro:
        "Marketing automation problems often look like journey problems, but the root cause is frequently data: duplicates, unclear ownership, missing consent logic, stale segments, or reporting gaps.",
      sections: [
        {
          heading: "Fragile journeys usually have upstream causes",
          body: [
            "When automations are hard to maintain, the issue is rarely only the automation canvas. It may be unclear entry criteria, unstable source data, inconsistent subscriber keys, or missing suppression logic.",
            "Before rebuilding journeys, teams should inspect the data contracts that feed them.",
          ],
        },
        {
          heading: "Consent and preferences are architecture",
          body: [
            "Preference centers, publication lists, subscriber status, and opt-in rules should be designed as platform infrastructure.",
            "If they are handled as one-off campaign logic, teams create risk and make future activation harder.",
          ],
          bullets: ["Publication lists", "Subscriber status", "Audit logging", "Segmentation rules"],
        },
        {
          heading: "Reporting should be designed before launch",
          body: [
            "Campaign analytics should not be reconstructed after a campaign ends. UTM capture, form data, audience attributes, and conversion signals should be planned before launch.",
            "Good reporting turns campaign operations into a feedback loop for segmentation and journey improvement.",
          ],
        },
      ],
      conclusion:
        "Marketing automation gets better when teams treat data quality, consent, and reporting as part of the system design.",
    },
  },
  {
    slug: "when-to-use-agentforce-openai-anthropic-google-ai",
    title: "When to Use Agentforce, OpenAI, Anthropic, or Google AI",
    description:
      "A practical framework for choosing AI tools based on workflow fit, data access, governance, integration needs, and user experience.",
    category: "AI Strategy",
    tags: ["Agentforce", "OpenAI", "Anthropic", "Google Gemini", "AI Strategy"],
    publishedAt: "2026-05-05",
    readingTime: "7 min read",
    featured: false,
    author: "Renato Boucas",
    content: {
      intro:
        "Different AI tools fit different situations. The right choice depends less on vendor excitement and more on workflow fit, data access, governance, integration needs, and the experience teams need to deliver.",
      sections: [
        {
          heading: "Salesforce-native workflows may benefit from Agentforce",
          body: [
            "Agentforce can make sense when the work is deeply tied to Salesforce data, permissions, CRM processes, and Salesforce user experiences.",
            "It should still be evaluated as part of a broader architecture, not as the only possible AI path.",
          ],
        },
        {
          heading: "Broader assistants may need broader AI platforms",
          body: [
            "OpenAI, Anthropic Claude, and Google Gemini may fit use cases that span multiple systems, custom applications, multimodal inputs, or knowledge workflows outside Salesforce.",
            "Teams should compare model behavior, tool ecosystem, data handling, integration patterns, and evaluation requirements.",
          ],
          bullets: ["Workflow scope", "Data location", "Security requirements", "Integration model"],
        },
        {
          heading: "Architecture should come before vendor choice",
          body: [
            "A strong AI plan defines what the assistant should do, what data it can access, how answers are evaluated, and how people will review or act on outputs.",
            "Once that is clear, tool selection becomes a more grounded decision.",
          ],
        },
      ],
      conclusion:
        "The best AI tool is the one that fits the workflow, data, governance, and implementation path. Sometimes that is Salesforce-native. Sometimes it is not.",
    },
  },
  {
    slug: "building-ai-assistants-for-internal-teams",
    title: "Building AI Assistants for Internal Teams: Start with the Workflow",
    description:
      "Internal AI assistants work best when they are designed around real tasks like support triage, documentation search, marketing operations troubleshooting, QA, and reporting help.",
    category: "AI Workflow Automation",
    tags: ["AI Assistants", "Workflow Automation", "LLM", "RAG", "Operations"],
    publishedAt: "2026-05-06",
    readingTime: "5 min read",
    featured: true,
    author: "Renato Boucas",
    content: {
      intro:
        "Internal AI assistants should not start as generic chat boxes. They should start with a specific workflow, a clear user, trusted knowledge sources, and a definition of what useful output looks like.",
      sections: [
        {
          heading: "Start with one painful task",
          body: [
            "Good candidates include support triage, documentation search, marketing operations troubleshooting, campaign QA, reporting help, or policy lookup.",
            "The goal is to reduce friction in a known workflow, not to ask AI to be generally helpful across everything.",
          ],
        },
        {
          heading: "Define the boundaries",
          body: [
            "The assistant should have clear rules for what it can answer, what sources it can use, and when it should escalate to a person.",
            "Boundaries make adoption easier because users understand where the system is reliable and where judgment is still required.",
          ],
          bullets: ["Accepted tasks", "Trusted sources", "Escalation rules", "Human review"],
        },
        {
          heading: "Measure usefulness, not novelty",
          body: [
            "A useful assistant saves time, improves consistency, reduces searching, or helps teams make better decisions.",
            "Those outcomes require workflow design, data access, evaluation, and operational ownership.",
          ],
        },
      ],
      conclusion:
        "Internal AI assistants become valuable when they are designed as workflow tools, not demos.",
    },
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getSortedInsights() {
  return [...insights].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
