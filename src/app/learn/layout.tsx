import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypeScript Behaviors Reference — Every Quirk Explained",
  description:
    "A detailed reference of 20 TypeScript type system behaviors with code examples, correct answers, and explanations. Covers conditional types, distributive types, infer, satisfies, type predicates, and more.",
  alternates: {
    canonical: "https://tsisweird.com/learn",
  },
  openGraph: {
    title: "TypeScript Behaviors Reference — Every Quirk Explained",
    description:
      "A detailed reference of 20 TypeScript type system behaviors with code examples, correct answers, and explanations.",
    url: "https://tsisweird.com/learn",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
