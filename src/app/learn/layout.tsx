import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypeScript Behaviors Reference | TypeScript is weird",
  description:
    "A comprehensive reference of TypeScript behaviors, quirks, and concepts with detailed explanations.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
