import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { FloatingAssistant } from "@/components/ai/FloatingAssistant";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { personJsonLd, professionalServiceJsonLd, websiteJsonLd } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Renato Boucas",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Renato Boucas - AI Architect, Data Engineering, and Salesforce Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <GoogleTagManager />
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={[personJsonLd(), websiteJsonLd(), professionalServiceJsonLd()]} />
        <GoogleTagManagerNoScript />
        <ConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingAssistant />
          <Analytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
