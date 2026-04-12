"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  CheckCircle,
  ExternalLink,
  ArrowLeft,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { compressToEncodedURIComponent } from "lz-string";

import { questions } from "../quiz/data/questions";
import { cn } from "@/lib/utils";

export default function LearnPage() {
  const prefersReducedMotion = useReducedMotion();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 z-50 relative">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150 font-roboto-mono mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" />
          Back to home
        </Link>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight mb-3">
          TypeScript Behaviors
        </h1>
        <p className="text-sm text-slate-500 font-roboto-mono max-w-xl">
          A reference for every question, with code and detailed explanations.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        {questions.map((question, index) => {
          const QuestionCode = question.code;

          return (
            <motion.div
              key={index}
              id={`question-${index + 1}`}
              variants={item}
              className="group rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden scroll-mt-24 hover:border-white/[0.1] transition-colors duration-200"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-5">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 bg-white/[0.06] text-slate-400 text-xs font-bold font-roboto-mono">
                    {index + 1}
                  </span>
                  <h2 className="font-sans text-sm sm:text-base md:text-lg font-semibold text-slate-200 leading-snug pt-0.5">
                    {question.title}
                  </h2>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] mb-5">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                      <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-roboto-mono ml-1.5 select-none">
                      TypeScript
                    </span>
                  </div>
                  <div className="[&>figure]:m-0 [&>figure>pre]:rounded-none [&>figure>pre]:border-0 overflow-x-auto">
                    <QuestionCode
                      components={{
                        pre: (props: React.ComponentProps<"pre">) => (
                          <pre {...props} className="custom-scrollbar" />
                        ),
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-emerald-300/90 font-sans">
                    {question.options[question.correctAnswer]}
                  </span>
                </div>

                <p className="text-[13px] text-slate-400 leading-relaxed font-sans mb-4">
                  {question.explanation}
                </p>

                <Link
                  href={`https://www.typescriptlang.org/play/?#code/${compressToEncodedURIComponent(question.playgroundCode ?? "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-roboto-mono hover:text-slate-300 transition-colors duration-150"
                >
                  Open in Playground
                  <ExternalLink size={11} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-14 text-center"
      >
        <Link
          href="/quiz"
          className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3 font-sans text-sm text-slate-200 bg-gradient-to-b from-white/[0.1] to-white/[0.04] border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:from-white/[0.14] hover:to-white/[0.06] hover:border-white/[0.16] hover:text-white transition-all duration-200"
        >
          Take the quiz
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-0.5 transition-all duration-200" />
        </Link>
      </motion.div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-2.5 rounded-xl bg-[#151937] border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] transition-all duration-150 shadow-lg shadow-black/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
