import type { Metadata } from "next";
import Image from "next/image";
import { Fira_Code, Roboto_Mono } from "next/font/google";

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
const robotoMono = Roboto_Mono({
  weight: "600",
  subsets: ["latin-ext"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "TypeScript is weird",
  description:
    "A TypeScript quiz where you are going to learn some TypeScript concepts and encounter some weird and perhaps unexpected behaviors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${robotoMono.variable} bg-[#10132B] text-neutral-50 `}
      >
        <Header />
        <main className="flex items-center justify-center w-full min-h-[72vh] sm:min-h-[77vh] xl:min-h-[83vh] bg-[#10132b]">
          <div>
            <Image
              src={Beam}
              alt="beam"
              className="absolute opacity-70 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden -z-50"
            />
            <Image
              src={Grid}
              alt="grid"
              className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden -z-50"
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
