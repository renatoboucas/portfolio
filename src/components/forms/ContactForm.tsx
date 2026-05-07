"use client";

import { FormEvent } from "react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo, mailtoLink } from "@/data/contact";

const reasonOptions = [
  "AI implementation",
  "LLM/RAG or AI assistant",
  "Salesforce Marketing Cloud",
  "Data Cloud / CRM/CDP activation",
  "Data engineering / integration",
  "Consulting or technical advisory",
  "Professional opportunity",
  "Partnership",
  "Other",
];

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getString(formData, "name");
    const email = getString(formData, "email");
    const company = getString(formData, "company");
    const reason = getString(formData, "reason");
    const timeline = getString(formData, "timeline");
    const message = getString(formData, "message");

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      company && `Company: ${company}`,
      reason && `Reason: ${reason}`,
      timeline && `Timeline: ${timeline}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = mailtoLink(
      reason ? `${reason} - Portfolio Contact` : "Portfolio Contact",
      body,
    );
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-700">Direct contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Send a focused note by email.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Fill out the details below and your email app will open with a prepared message to Renato.
            No backend form processing is used in this MVP.
          </p>
        </div>
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-xl">Useful details to include</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="min-h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="min-h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-800" htmlFor="company">
                    Company
                  </label>
                  <input
                    className="min-h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                    id="company"
                    name="company"
                    placeholder="Company or organization"
                    type="text"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-800" htmlFor="reason">
                    Reason for contact
                  </label>
                  <select
                    className="min-h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                    defaultValue=""
                    id="reason"
                    name="reason"
                  >
                    <option disabled value="">
                      Select a reason
                    </option>
                    {reasonOptions.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-800" htmlFor="timeline">
                  Timeline
                </label>
                <input
                  className="min-h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                  id="timeline"
                  name="timeline"
                  placeholder="Immediate, this quarter, exploratory, etc."
                  type="text"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="min-h-36 resize-y rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-700"
                  id="message"
                  name="message"
                  placeholder="Share the context, systems involved, role or consulting need, and what a useful next conversation would cover."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">
                  <Mail className="h-4 w-4" />
                  Open Email Draft
                </Button>
                <p className="text-sm text-slate-500">{contactInfo.email}</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
