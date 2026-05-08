import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Renato Boucas",
  description:
    "Cookie policy for Renato Boucas's portfolio, including cookie categories, preference management, and analytics notes.",
};

const sections = [
  {
    title: "What cookies are",
    body:
      "Cookies and similar technologies are small files or browser storage signals that help websites remember preferences, operate core features, and understand how visitors use a site.",
  },
  {
    title: "How this site uses cookies",
    body:
      "This portfolio may use cookies or similar technologies to remember privacy preferences, measure site performance, improve the experience, and support optional analytics or marketing integrations when configured.",
  },
  {
    title: "Cookie categories",
    body:
      "Strictly necessary cookies support essential site behavior and privacy preference storage. Performance cookies help measure visits and site performance. Functional cookies support enhanced functionality. Targeting or advertising cookies may support advertising, retargeting, or personalized measurement if those tools are configured later.",
  },
  {
    title: "Managing preferences",
    body:
      "You can manage optional cookie preferences through the cookie banner or the Manage Cookies link in the footer. Strictly necessary cookies cannot be disabled because they are required for the website to work.",
  },
  {
    title: "Analytics and measurement",
    body:
      "This site includes a foundation for Google Tag Manager and Google Consent Mode. Analytics tags and event tracking may be configured in a later sprint and should respect the preferences selected in the consent center.",
  },
  {
    title: "Updates to this policy",
    body:
      "This cookie policy may be updated as analytics, tag configurations, or site features change.",
  },
  {
    title: "Contact",
    body:
      "For privacy or cookie questions related to this portfolio, use the contact page to reach Renato.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <section className="border-b bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_58%,_#eef6fb_100%)] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-cyan-700">Privacy</p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This cookie policy is provided for transparency and may be updated as analytics and tag
            configurations change. It is not legal advice and should be reviewed before broad use.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-200 border-y">
            {sections.map((section) => (
              <section className="py-6" key={section.title}>
                <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
          <Link className="mt-8 inline-flex text-sm font-semibold text-cyan-700" href="/contact">
            Contact Renato
          </Link>
        </div>
      </section>
    </>
  );
}
