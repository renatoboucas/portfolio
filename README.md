# Renato Boucas Portfolio

Professional portfolio for Renato Boucas, focused on AI implementation, LLM/RAG applications, data engineering, Salesforce Marketing Cloud, Salesforce Data Cloud, CRM/CDP activation, marketing automation architecture, and technical leadership.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible components
- Static data files for projects, services, skills, certifications, and contact details
- Vercel AI SDK with OpenAI for the AI Portfolio Assistant
- Vercel-ready deployment structure

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Environment Variables

Copy `.env.example` if needed and set the production URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CONSENT_DEBUG=false
OPENAI_API_KEY=
```

This value is used for metadata, canonical URLs, sitemap, robots, and social sharing URLs. If it is not set, the site falls back to `https://your-domain.com`.

`OPENAI_API_KEY` is used only by the server-side `/api/chat` route. Do not expose it as a `NEXT_PUBLIC_` variable.

`NEXT_PUBLIC_GTM_ID` is optional. If it is empty, the Google Tag Manager script is not rendered. If it is set, the site initializes Google Consent Mode defaults before GTM loads.

`NEXT_PUBLIC_CONSENT_DEBUG` is reserved for consent debugging and should remain `false` in production unless intentionally testing.

## AI Portfolio Assistant

The `/ask` page contains Renato's AI Portfolio Assistant, a lightweight RAG-style portfolio demo.

The assistant:

- Answers questions about public portfolio content.
- Uses curated Markdown knowledge files from `content/knowledge`.
- Retrieves relevant chunks before calling the model.
- Streams responses from the server-side `/api/chat` route.
- Uses OpenAI through the Vercel AI SDK.
- Includes guardrails so it does not impersonate Renato or invent private details.

Local setup:

1. Create `.env.local`.
2. Add:

```bash
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run `npm run dev`.
4. Open `http://localhost:3000/ask`.

Vercel setup:

1. Open the Vercel project settings.
2. Add `OPENAI_API_KEY` as a production environment variable.
3. Keep `NEXT_PUBLIC_SITE_URL` set to the production domain.
4. Redeploy.

### Assistant Knowledge Base

Knowledge files live in `content/knowledge`.

Current files:

- `renato-profile.md`
- `projects.md`
- `services.md`
- `skills.md`
- `ai-positioning.md`
- `salesforce-experience.md`
- `data-engineering.md`
- `consulting-style.md`
- `faq.md`

To update the assistant, edit the Markdown files, keep the content public and accurate, and run `npm run build`.

Retrieval logic lives in `src/lib/ai/retrieveKnowledge.ts`.

Prompt guardrails live in `src/lib/ai/prompts.ts`.

The current retrieval is keyword-based and intentionally simple. A future upgrade can replace it with embeddings, Supabase pgvector, Neon, Pinecone, source citations, evaluation sets, lead capture, or multi-provider support for Anthropic Claude and Google Gemini.

### Assistant Guardrails

The assistant should:

- Identify as Renato's AI Portfolio Assistant.
- Say it uses public portfolio content.
- Avoid saying "I am Renato."
- Refuse unsupported private, confidential, availability, compensation, or rates questions.
- Recommend contacting Renato directly when the context does not support an answer.
- Avoid inventing certifications, employers, clients, metrics, private details, or guarantees.

## Contact Configuration

Update contact details in `src/data/contact.ts`.

Only configured values are rendered. Empty GitHub, website, phone, and Calendly values will not create broken links.

```ts
export const contactInfo = {
  email: "renatoboucas@gmail.com",
  linkedin: "https://www.linkedin.com/in/renato-boucas-83b7331b3/",
  github: "",
  website: "",
  calendly: "",
  resumeUrl: "",
};
```

## Resume

If a resume PDF is ready, place it at:

```text
public/resume.pdf
```

Then set:

```ts
resumeUrl: "/resume.pdf"
```

If `resumeUrl` is empty, the Contact page shows a request-resume CTA instead of a broken download link.

## Certifications

Certification data lives in:

```text
src/data/certifications.ts
```

Only verified credentials should be added. Each certification can include an optional logo:

```ts
{
  title: "Credential name",
  issuer: "Issuer",
  category: "Salesforce",
  status: "Active",
  url: "https://credential-url.example",
  logo: "/images/certifications/issuer-logo.png",
  logoAlt: "Issuer logo"
}
```

Store certification logos in `public/images/certifications/` and keep them small, transparent, and web-ready. If no logo is configured, the site renders a simple issuer initials mark instead of a broken image.

## SEO and Domain Configuration

Core SEO settings live in `src/lib/site.ts`.

Before production launch:

- Set `NEXT_PUBLIC_SITE_URL` in Vercel.
- Confirm `siteConfig.url` resolves to the public domain.
- Confirm `/sitemap.xml` includes all expected routes.
- Confirm `/robots.txt` references the correct sitemap.

## Adding a New Insight Article

Insight articles live in:

```text
src/data/insights.ts
```

To add a new article:

1. Open `src/data/insights.ts`.
2. Add a new object with `slug`, `title`, `description`, `category`, `tags`, `publishedAt`, `readingTime`, `featured`, `author`, and `content`.
3. Use a clean URL-friendly slug, for example `how-to-prepare-sfmc-data-for-ai`.
4. Keep the title and description useful for SEO and social sharing.
5. Add article body content using `intro`, `sections`, and `conclusion`.
6. Run `npm run build` to confirm the dynamic page is generated successfully.

Dynamic article pages are generated at:

```text
/insights/[slug]
```

Article metadata is generated from the article title and description. Tags and categories are rendered on cards and article pages, and related articles are selected from overlapping categories or tags.

## OG Image

The default social sharing image is:

```text
public/og-image.png
```

Editable source:

```text
public/og-image.svg
```

Replace `public/og-image.png` before final launch if a branded custom image is preferred. Recommended size: `1200 x 630`.

## Visual Assets

Profile image:

```text
public/images/renato-profile.jpg
```

The site checks this path before rendering the profile image. It also accepts `renato-profile.jpeg`, `renato-profile.png`, or `renato-profile.webp` in the same folder. If the file is missing, the About page uses a polished initials/avatar fallback, so no broken image is rendered. Rebuild/redeploy after adding the image so the static About page includes it.

Project images:

```text
public/images/projects/
```

Project case studies support either a real image or a conceptual visual. In `src/data/projects.ts`, each project can use:

```ts
visualType?: "architecture" | "ai-workflow" | "data-pipeline" | "martech-ecosystem" | "none";
image?: string;
diagramLabel?: string;
```

Visual type mapping:

- `architecture`: renders the AI + data + Salesforce architecture map.
- `ai-workflow`: renders the AI implementation workflow.
- `data-pipeline`: renders the CRM/CDP activation data flow.
- `martech-ecosystem`: renders the Salesforce and MarTech ecosystem.
- `none`: renders no conceptual visual.

If `image` is provided, it should point to an existing file in `public`. Avoid confidential client screenshots or exact production architecture diagrams. Use conceptual diagrams when the work should be represented without exposing private implementation details.

Recommended image sizes:

- OG image: `1200 x 630`
- Project visuals: `1600 x 900`
- Profile image: at least `800 x 1000`

## Contact Form

The initial version uses reliable `mailto:` contact links and does not include backend form processing.

A future version can use Formspree, Resend, HubSpot, or a Vercel serverless function.

## Analytics

Vercel Analytics is installed with `@vercel/analytics` and rendered from `src/app/layout.tsx`.

After deployment:

1. Open the project in Vercel.
2. Confirm Analytics is enabled for the production deployment.
3. Visit the production site once.
4. Confirm page views appear in the Vercel dashboard.

Optional future tools include GA4, Plausible, PostHog, or LinkedIn Insight Tag. If form tracking or additional analytics are added, create a simple privacy page before broad promotion.

## Cookie Consent and GTM Foundation

The site includes a cookie consent banner and privacy preferences drawer. This is a technical foundation for future Google Tag Manager and GA4 work, not legal advice. Cookie and privacy copy should be reviewed before broad use.

Consent files:

```text
src/lib/consent/config.ts
src/lib/consent/consentUtils.ts
src/lib/consent/googleConsent.ts
src/components/consent/
src/components/analytics/GoogleTagManager.tsx
```

Consent categories:

- Strictly Necessary Cookies: always active.
- Performance Cookies: optional analytics and performance measurement.
- Functional Cookies: optional functionality and personalization.
- Targeting / Advertising Cookies: optional advertising, retargeting, and personalized measurement.

Consent is stored in browser local storage under:

```text
renato_cookie_consent_v1
```

Google Consent Mode mapping:

- Performance Cookies: `analytics_storage`
- Functional Cookies: `functionality_storage`, `personalization_storage`
- Targeting / Advertising Cookies: `ad_storage`, `ad_user_data`, `ad_personalization`
- Security storage remains `granted`

Default consent before user choice:

```text
ad_storage: denied
analytics_storage: denied
ad_user_data: denied
ad_personalization: denied
functionality_storage: denied
personalization_storage: denied
security_storage: granted
```

The consent system pushes dataLayer events for later GTM configuration:

- `consent_banner_view`
- `consent_accept_all`
- `consent_reject_optional`
- `consent_confirm_choices`
- `consent_preferences_open`
- `consent_preferences_close`
- `consent_update`

It also dispatches a browser event:

```text
renatoConsentUpdated
```

### Testing Consent Locally

1. Run `npm run dev`.
2. Open the site in a browser.
3. Confirm the cookie banner appears on first visit.
4. Test Accept Cookies, Your Privacy Rights, category toggles, and Confirm My Choices.
5. Confirm `renato_cookie_consent_v1` appears in local storage.

To reset consent:

1. Open browser developer tools.
2. Go to Application > Local Storage.
3. Delete `renato_cookie_consent_v1`.
4. Refresh the page.

### Future GTM, GA4, and Consent Mode Sprint

Future scope:

- Create GTM container.
- Add GA4 configuration tag.
- Configure Consent Initialization.
- Configure Google Consent Mode 2.0 settings.
- Map consent categories to GTM consent types.
- Add GA4 page view strategy.
- Add custom events such as `ask_ai_click`, `chat_message_submit`, `contact_click`, `resume_download`, `project_view`, `insight_view`, `service_click`, and `certification_click`.
- Configure tag firing rules based on consent.
- Validate with Google Tag Assistant.
- Verify consent states for `ad_storage`, `analytics_storage`, `ad_user_data`, and `ad_personalization`.
- Validate in GA4 DebugView.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Confirm the framework preset is Next.js.
4. Confirm the build command is `npm run build`.
5. Use the default Vercel output settings.
6. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
7. Deploy.
8. Add the custom domain.
9. Confirm SSL is active.
10. Test the production routes listed in the post-launch QA checklist.

## Custom Domain Setup

In Vercel, open Project Settings, then Domains, and add the production domain.

Recommended canonical options:

- `https://renatoboucas.com`
- `https://renatoboucas.dev`
- `https://renatoboucas.ai`
- `https://portfolio.benrer.com`

Typical DNS setup:

- Root domain: add the Vercel A record required by the Vercel domain screen.
- `www`: add the CNAME record required by Vercel.

After the domain works:

1. Choose the canonical domain.
2. Redirect the non-canonical version to the canonical version.
3. Update `NEXT_PUBLIC_SITE_URL` in Vercel.
4. Redeploy.
5. Confirm `/sitemap.xml`, `/robots.txt`, metadata, and social previews use the production domain.

## Google Search Console

After the production domain is live:

1. Open Google Search Console.
2. Add a domain property or URL prefix property.
3. Verify ownership with DNS or the method Google provides.
4. Submit the sitemap:

```text
https://your-domain.com/sitemap.xml
```

Monitor indexing, crawl issues, mobile usability, and search queries after launch.

## Repository Replacement Workflow

Target repository:

```text
https://github.com/renatoboucas/portfolio
```

The existing repository contains an older portfolio. Preserve it before replacing the main branch.

Safe replacement steps:

1. Clone the existing repository.

```bash
git clone https://github.com/renatoboucas/portfolio.git
cd portfolio
```

2. Confirm and update the production branch. This repository currently uses `master`.

```bash
git checkout master
git pull origin master
```

3. Create and push a backup branch.

```bash
git checkout -b backup/old-portfolio
git push origin backup/old-portfolio
```

4. Return to the production branch.

```bash
git checkout master
```

5. Remove old files while keeping `.git`.

```bash
find . -mindepth 1 \
  ! -path "./.git" \
  ! -path "./.git/*" \
  -exec rm -rf {} +
```

6. Copy the new portfolio files into the repository root.

Correct:

```text
portfolio/src/app/page.tsx
portfolio/package.json
portfolio/README.md
```

Incorrect:

```text
portfolio/renato-portfolio/src/app/page.tsx
```

7. Install and verify.

```bash
npm install
npm run lint
npm run build
```

8. Commit and push.

```bash
git add .
git commit -m "Replace old portfolio with AI data Salesforce portfolio"
git push origin master
```

Do not delete the GitHub repository itself. The previous version remains available on `backup/old-portfolio`.

## Production Route Checks

After deployment, verify:

- `/`
- `/projects`
- `/projects/ai-marketing-operations-assistant`
- `/projects/rag-knowledge-base-customer-support`
- `/projects/data-engineering-crm-cdp-activation`
- `/projects/salesforce-data-cloud-readiness-architecture`
- `/projects/event-registration-data-integration`
- `/projects/subscriber-profile-architecture`
- `/projects/sfmc-migration-architecture`
- `/projects/preference-center-consent-architecture`
- `/projects/vbtc-campaign-analytics-automation`
- `/services`
- `/about`
- `/ask`
- `/contact`
- `/insights`
- `/insights/why-ai-projects-need-data-architecture`
- `/insights/rag-is-not-just-a-chatbot`
- `/insights/how-salesforce-data-can-power-better-ai-workflows`
- `/insights/the-hidden-data-problems-behind-marketing-automation`
- `/insights/when-to-use-agentforce-openai-anthropic-google-ai`
- `/insights/building-ai-assistants-for-internal-teams`
- `/sitemap.xml`
- `/robots.txt`

Also verify invalid project and insight URLs return the custom 404 page.

## Post-Launch Checklist

- Homepage loads.
- Header navigation works.
- Mobile navigation works.
- Footer navigation works.
- Projects page loads.
- All project detail pages load.
- Services page loads.
- About page loads.
- Ask AI page loads.
- AI assistant returns a grounded response when `OPENAI_API_KEY` is configured.
- AI assistant does not impersonate Renato.
- AI assistant refuses unsupported private/confidential questions.
- Contact page loads.
- Insights page loads.
- All insight article pages load.
- `sitemap.xml` works.
- `robots.txt` works.
- OG image loads.
- LinkedIn/social preview card works.
- Contact email links open with useful subject/body text.
- LinkedIn link opens correctly.
- Resume link appears only if `resumeUrl` is configured.
- Profile image appears if `public/images/renato-profile.*` exists.
- Vercel Analytics receives visits.
- Google Search Console sitemap is submitted.
- Lighthouse has no launch-blocking accessibility, SEO, or performance issues.

## Content Update Workflow

Add a new project:

1. Open `src/data/projects.ts`.
2. Add a new project object with a clean slug.
3. Include category, summary, context, problem, role, solution, architecture, tools, deliverables, impact, challenges, lessons learned, and `visualType`.
4. Run `npm run build`.
5. Commit and push.

Add a new insight article:

1. Open `src/data/insights.ts`.
2. Add a new article object with slug, title, description, category, tags, dates, reading time, author, and content.
3. Run `npm run build`.
4. Commit and push.

Update services:

1. Open `src/data/services.ts`.
2. Edit or add service objects.
3. Confirm `/services` renders correctly.
4. Detail pages are generated at `/services/[slug]`, so run `npm run build` after changing slugs.

Update contact info:

1. Open `src/data/contact.ts`.
2. Update email, LinkedIn, GitHub, website, Calendly, phone, or `resumeUrl`.
3. Keep blank values empty so unused links do not render.

Update resume:

1. Add the PDF at `public/resume.pdf`.
2. Set `resumeUrl: "/resume.pdf"` in `src/data/contact.ts`.
3. Confirm `/resume.pdf` opens in production.

Update images and visuals:

1. Add images to `public/images`.
2. Add project visuals to `public/images/projects`.
3. Update `image` or `visualType` in the relevant data file.
4. Avoid confidential client screenshots or exact production architecture diagrams.

Update assistant knowledge:

1. Open `content/knowledge`.
2. Edit the relevant Markdown file.
3. Keep the content public and supportable.
4. Run `npm run build`.
5. Commit and push.

## Maintenance Cadence

- Monthly: review contact links, resume status, and service copy.
- Monthly: add or polish one insight article.
- Quarterly: refresh project case studies.
- Quarterly: review Vercel Analytics and Google Search Console.
- Quarterly: check sitemap, robots, and social previews.
- After major career updates: update About, Projects, Services, and resume.

## First 30 Days After Launch

- Share the homepage on LinkedIn.
- Share one project case study on LinkedIn.
- Share one insight article on LinkedIn.
- Add the portfolio link to LinkedIn.
- Add the portfolio link to the resume.
- Add the portfolio link to the email signature.
- Publish or polish two insight articles.
- Add one deeper AI/RAG case study.
- Add one Salesforce/Data Cloud case study.

## Email Signature

```text
Renato Boucas
AI Implementation | Data Engineering | Salesforce Architecture
Portfolio: https://your-domain.com
LinkedIn: https://www.linkedin.com/in/renato-boucas-83b7331b3/
```
