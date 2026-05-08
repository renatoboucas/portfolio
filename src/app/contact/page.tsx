import type { Metadata } from "next";
import { FileText, Mail, Network } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, mailtoLink } from "@/data/contact";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Renato Boucas for AI implementation, LLM/RAG strategy, data engineering, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, marketing automation, consulting, or professional opportunities.",
  keywords: [
    "contact Renato Boucas",
    "AI implementation consultant",
    "LLM consultant",
    "RAG consultant",
    "data engineering consultant",
    "Salesforce Marketing Cloud architect",
    "Salesforce Data Cloud consultant",
    "CRM/CDP activation",
    "marketing automation consultant",
    "technical advisory",
  ],
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact",
    description:
      "Contact Renato Boucas for AI implementation, LLM/RAG strategy, data engineering, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, marketing automation, consulting, or professional opportunities.",
    url: absoluteUrl("/contact"),
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Contact Renato Boucas for AI implementation, LLM/RAG strategy, data engineering, Salesforce Marketing Cloud architecture, Data Cloud readiness, CRM/CDP activation, marketing automation, consulting, or professional opportunities.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const bestReasons = [
  "AI architecture, LLM/RAG, or assistant workflow planning",
  "Data engineering, CRM/CDP activation, or reporting automation",
  "Salesforce Marketing Cloud, Data Cloud, or MarTech architecture",
  "Recruiting or hiring conversations for AI, data, or solution architecture roles",
];

export default function ContactPage() {
  const hasResume = Boolean(contactInfo.resumeUrl);

  return (
    <main>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Let’s connect.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I’m open to conversations around AI architecture, LLM/RAG systems, data engineering,
            Salesforce Marketing Cloud, Data Cloud, CRM/CDP activation, and relevant professional opportunities.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Direct contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
              Best way to reach me.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-y py-6">
              <p className="text-sm font-semibold text-slate-950">Email</p>
              <p className="mt-2 break-words text-sm text-slate-600">{contactInfo.email}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={mailtoLink("Portfolio Contact")}>
                    <Mail className="h-4 w-4" />
                    Email Renato
                  </a>
                </Button>
                {contactInfo.linkedin && (
                  <Button asChild variant="outline">
                    <a href={contactInfo.linkedin} rel="noreferrer" target="_blank">
                      <Network className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="border-b pb-6">
              <p className="text-sm font-semibold text-slate-950">Resume</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {hasResume
                  ? "My resume is available as a PDF."
                  : "Resume available by request for recruiting, hiring, and relevant collaboration conversations."}
              </p>
              <Button asChild className="mt-5" variant="outline">
                {hasResume ? (
                  <a href={contactInfo.resumeUrl}>
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </a>
                ) : (
                  <a href={mailtoLink("Resume Request")}>
                    <FileText className="h-4 w-4" />
                    Request Resume
                  </a>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-700">Good fit</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
              Useful reasons to reach out.
            </h2>
          </div>
          <ul className="divide-y divide-slate-200 border-y text-sm leading-6 text-slate-600">
            {bestReasons.map((reason) => (
              <li className="py-4" key={reason}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
