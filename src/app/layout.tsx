import type { Metadata } from "next";
import Image from "next/image";
import { Fira_Code, Inter, Roboto_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Header } from "./(components)/header";
import { Footer } from "./(components)/footer";

import Beam from "../../public/beam.png";
import Grid from "../../public/grid.png";

import "./globals.css";

const firaCode = Fira_Code({
  weight: "600",
  subsets: ["greek"],
  variable: "--font-primary",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const robotoMono = Roboto_Mono({
  weight: "600",
  subsets: ["latin-ext"],
  variable: "--font-secondary",
});

const siteUrl = "https://tsisweird.com";
const siteName = "TypeScript is weird";
const siteDescription =
  "A TypeScript quiz with 20 questions on conditional types, type predicates, infer, satisfies, and other quirks that surprise even senior developers. Test your knowledge and learn the weird parts of TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TypeScript is weird — Quiz & Reference",
    template: "%s | TypeScript is weird",
  },
  description: siteDescription,
  keywords: [
    "typescript quiz",
    "typescript type system",
    "typescript conditional types",
    "typescript infer",
    "typescript satisfies",
    "typescript never type",
    "typescript type challenges",
    "typescript gotchas",
    "typescript weird behaviors",
    "typescript type predicates",
    "learn typescript",
    "typescript interview questions",
    "typescript advanced types",
  ],
  authors: [{ name: "Alves", url: "https://bento.me/alves" }],
  creator: "Alves",
  publisher: "Alves",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "TypeScript is weird — Can you beat the quiz?",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeScript is weird — Can you beat the quiz?",
    description:
      "20 TypeScript questions on type system quirks, conditional types, infer, satisfies and more. How well do you really know TypeScript?",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: "your-verification-code",
  },
  category: "technology",
};

function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Alves",
      url: "https://bento.me/alves",
    },
  };

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "TypeScript is weird Quiz",
    description:
      "Test your TypeScript knowledge with 20 questions on type system quirks, conditional types, type predicates, and more.",
    url: `${siteUrl}/quiz`,
    educationalLevel: "Advanced",
    about: {
      "@type": "Thing",
      name: "TypeScript",
    },
    numberOfQuestions: 20,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${firaCode.variable} ${inter.variable} ${robotoMono.variable} bg-[#10132B] text-neutral-50 `}
      >
        <Header />
        <main className="flex items-start justify-center w-full min-h-[72vh] sm:min-h-[77vh] xl:min-h-[83vh] bg-[#10132b]">
          <div>
            <Image
              src={Beam}
              alt="beam"
              className="absolute opacity-70 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
            />
            <Image
              src={Grid}
              alt="grid"
              className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
            />
          </div>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
