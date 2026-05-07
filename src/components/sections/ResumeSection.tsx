import { Download, FileText, Mail, Network } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo, mailtoLink } from "@/data/contact";

export function ResumeSection() {
  const hasResume = Boolean(contactInfo.resumeUrl);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-white">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">Resume</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
                Resume and Professional Background
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-600">
                For recruiters, hiring managers, and collaborators, I can provide a resume focused on AI
                implementation, data engineering, Salesforce Marketing Cloud architecture, CRM/CDP activation,
                and technical leadership.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {hasResume ? (
                  <Button asChild>
                    <a href={contactInfo.resumeUrl}>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                ) : (
                  <Button asChild>
                    <a href={mailtoLink("Resume Request")}>
                      <Mail className="h-4 w-4" />
                      Request Resume
                    </a>
                  </Button>
                )}
                {contactInfo.linkedin ? (
                  <Button asChild variant="outline">
                    <a href={contactInfo.linkedin} rel="noreferrer" target="_blank">
                      <Network className="h-4 w-4" />
                      View LinkedIn
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <a href={mailtoLink("Professional Background Request")}>
                      <FileText className="h-4 w-4" />
                      Request Background
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
