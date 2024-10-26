import type { Metadata } from "next";

import { GameProvider } from "./contexts/game";

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
  return <GameProvider>{children}</GameProvider>;
}
