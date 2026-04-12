"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import Confetti from "react-confetti";
import { BookOpen } from "lucide-react";

import {
  ExplanationModal,
  type ExplanationModalProps,
} from "./explanation-modal";
import { ShareMenu } from "./share-menu";
import { ScoreSummary } from "./score-summary";

import { useGame } from "../contexts/game";
import { questions } from "../data/questions";
import { cn } from "@/lib/utils";

export default function EndGame() {
  const [explanationModalIsOpen, setExplanationModalIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<
    ExplanationModalProps["question"] | null
  >(null);
  const prefersReducedMotion = useReducedMotion();

  const { gameStatus } = useGame();

  const correctsAnswers = questions.filter(
    (question, index) => question.correctAnswer === gameStatus.answers[index]
  );
  const correctCount = correctsAnswers.length;
  const incorrectCount = gameStatus.total - correctCount;

  const shareText = `I scored ${correctCount}/${gameStatus.total} on the TypeScript is weird quiz! Can you beat my score?`;
  const shareUrl = "https://tsisweird.com";

  const openExplanationModal = (
    question: ExplanationModalProps["question"]
  ) => {
    setCurrentQuestion(question);
    setExplanationModalIsOpen(true);
  };

  const closeExplanationModal = () => {
    setExplanationModalIsOpen(false);
    setCurrentQuestion(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
      },
    },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      {!prefersReducedMotion && (
        <Confetti
          width={window.innerWidth - 50}
          height={window.innerHeight}
          colors={["#3b82f6", "#8b5cf6", "#6366f1", "#2563eb", "#1d4ed8"]}
          numberOfPieces={150}
          style={{ zIndex: 9999 }}
          recycle={false}
        />
      )}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center w-full text-neutral-50 px-4 py-10 z-50"
      >
        <motion.div variants={item} className="w-full max-w-4xl">
          <motion.div variants={item} className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight mb-2">
              Quiz complete
            </h1>
            <p className="text-sm text-slate-400 font-roboto-mono">
              Here&apos;s how you did across all {gameStatus.total} questions.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <ScoreSummary
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              total={gameStatus.total}
            />
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <ShareMenu shareText={shareText} shareUrl={shareUrl} />
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/[0.05] border border-white/[0.08] text-slate-300 font-sans hover:bg-white/[0.08] hover:text-slate-100 transition-all duration-150"
            >
              <BookOpen className="w-3.5 h-3.5" />
              All explanations
            </Link>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-xs font-roboto-mono text-slate-500 uppercase tracking-wider mb-4">
              Review
            </h2>
            {questions.map((question, index) => {
              const userAnswer = gameStatus.answers[index];
              const isCorrectAnswer = userAnswer === question.correctAnswer;
              const QuestionCode = question.code;

              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span
                        className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-bold font-roboto-mono shrink-0 mt-0.5",
                          isCorrectAnswer
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-red-500/15 text-red-400"
                        )}
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-sans text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                        {question.title}
                      </h3>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02] mb-4">
                      <div className="[&>figure]:m-0 [&>figure>pre]:rounded-none [&>figure>pre]:border-0 overflow-x-auto">
                        <QuestionCode />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {question.options.map((option, optionIndex) => {
                        const isUserAnswer = optionIndex === userAnswer;
                        const isCorrectOption =
                          question.correctAnswer === optionIndex;

                        return (
                          <div
                            key={optionIndex}
                            className={cn(
                              "flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-[13px] font-sans border",
                              isCorrectOption &&
                                "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
                              !isCorrectOption &&
                                isUserAnswer &&
                                !isCorrectAnswer &&
                                "bg-red-500/10 border-red-500/20 text-red-300",
                              !isCorrectOption &&
                                !(isUserAnswer && !isCorrectAnswer) &&
                                "bg-transparent border-white/[0.04] text-slate-500"
                            )}
                          >
                            <span className="leading-snug">{option}</span>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => openExplanationModal(question)}
                      className="text-xs px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] transition-all duration-150 font-roboto-mono"
                    >
                      View explanation
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {explanationModalIsOpen && currentQuestion && (
            <ExplanationModal
              question={currentQuestion}
              onClose={closeExplanationModal}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
