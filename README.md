# Renato Boucas Portfolio

Professional portfolio for Renato Boucas, focused on AI implementation, LLM/RAG applications, data engineering, Salesforce Marketing Cloud, Salesforce Data Cloud, CRM/CDP activation, marketing automation architecture, and technical leadership.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible components
- Static data files for projects, services, skills, certifications, and contact details
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
```

This value is used for metadata, canonical URLs, sitemap, robots, and social sharing URLs. If it is not set, the site falls back to `https://your-domain.com`.

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

2. Confirm and update `main`.

```bash
git checkout main
git pull origin main
```

3. Create and push a backup branch.

```bash
git checkout -b backup/old-portfolio
git push origin backup/old-portfolio
```

4. Return to `main`.

```bash
git checkout main
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
git push origin main
```

Do not delete the GitHub repository itself. The previous version remains available on `backup/old-portfolio`.

## Production Route Checks

After deployment, verify:

- `/`
- `/projects`
- `/projects/ai-marketing-operations-assistant`
- `/projects/rag-knowledge-base-customer-support`
- `/projects/data-engineering-crm-cdp-activation`
- `/projects/sfmc-migration-architecture`
- `/projects/preference-center-consent-architecture`
- `/projects/vbtc-campaign-analytics-automation`
- `/services`
- `/about`
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
