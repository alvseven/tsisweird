"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { compressToEncodedURIComponent } from "lz-string";

import { questions } from "../quiz/data/questions";

export default function LearnPage() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 z-50 relative">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors font-roboto-mono mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans tracking-wider mb-4">
          TypeScript Behaviors Reference
        </h1>
        <p className="text-sm md:text-base text-slate-400 font-roboto-mono max-w-2xl">
          All {questions.length} TypeScript behaviors from the quiz, with code
          examples, correct answers, and detailed explanations.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {questions.map((question, index) => {
          const QuestionCode = question.code;

          return (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#1a1f3d] rounded-lg border border-indigo-900/50 overflow-hidden"
            >
              <div className="p-6 border-b border-indigo-900/30">
                <span className="text-xs text-indigo-400 font-roboto-mono mb-2 block">
                  Question {index + 1}
                </span>
                <h2 className="font-sans text-base md:text-lg lg:text-xl font-bold text-slate-100">
                  {question.title}
                </h2>
              </div>

              <div className="p-6 border-b border-indigo-900/30">
                <div className="bg-[#10132B] p-4 rounded-lg border border-indigo-900/20">
                  <QuestionCode
                    components={{
                      pre: (props: React.ComponentProps<"pre">) => (
                        <pre {...props} className="custom-scrollbar" />
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="p-6 border-b border-indigo-900/30">
                <h3 className="text-sm font-semibold text-slate-400 mb-3 font-roboto-mono">
                  Correct Answer
                </h3>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2.5">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-sm text-green-300 font-sans">
                    {question.options[question.correctAnswer]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-400 mb-3 font-roboto-mono">
                  Explanation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {question.explanation}
                </p>
                {question.playgroundCode && (
                  <div className="mt-4">
                    <Link
                      href={`https://www.typescriptlang.org/play/?#code/${compressToEncodedURIComponent(question.playgroundCode)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm hover:underline-offset-2 hover:underline font-roboto-mono"
                    >
                      Open in TypeScript Playground
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link
          href="/quiz"
          className="inline-flex items-center gap-3 text-base md:text-lg px-8 py-3 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300"
        >
          Take the quiz
        </Link>
      </motion.div>
    </div>
  );
}
