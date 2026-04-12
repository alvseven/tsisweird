import type { Metadata } from "next";

import { GameProvider } from "./contexts/game";

export const metadata: Metadata = {
  title: "Quiz — Test Your TypeScript Knowledge",
  description:
    "20 tricky TypeScript questions on conditional types, type predicates, infer, satisfies, never, and more. Can you get them all right?",
  alternates: {
    canonical: "https://tsisweird.com/quiz",
  },
  openGraph: {
    title: "TypeScript is weird — Take the Quiz",
    description:
      "20 tricky TypeScript questions on conditional types, type predicates, infer, satisfies, never, and more.",
    url: "https://tsisweird.com/quiz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GameProvider>{children}</GameProvider>;
}
