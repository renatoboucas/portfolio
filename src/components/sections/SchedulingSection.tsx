import { CalendarDays, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, mailtoLink } from "@/data/contact";

export function SchedulingSection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">Scheduling</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal">
            {contactInfo.calendly ? "Schedule a conversation." : "Email me to coordinate a time."}
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            A short note with the topic, timeline, and type of conversation is usually enough to start.
          </p>
        </div>
        <Button asChild className="bg-white text-slate-950 hover:bg-slate-100" size="lg">
          {contactInfo.calendly ? (
            <a href={contactInfo.calendly} rel="noreferrer" target="_blank">
              <CalendarDays className="h-4 w-4" />
              Schedule a Conversation
            </a>
          ) : (
            <a href={mailtoLink("Scheduling Request")}>
              <Mail className="h-4 w-4" />
              Coordinate by Email
            </a>
          )}
        </Button>
      </div>
    </section>
  );
}
