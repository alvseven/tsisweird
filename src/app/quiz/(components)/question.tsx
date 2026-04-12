"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useGame } from "../contexts/game";
import { questions } from "../data/questions";
import { cn } from "@/lib/utils";

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

type QuestionProps = Omit<
  (typeof questions)[number],
  "explanation" | "code" | "playgroundCode"
> & {
  code: ReactNode;
};

export function Question({
  title,
  code,
  options,
  correctAnswer,
}: QuestionProps) {
  const { gameStatus, registerAttempt } = useGame();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = gameStatus.currentQuestion;
  const totalQuestions = gameStatus.total;

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        setShowFeedback(false);
        setSelectedAnswer(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showFeedback]);

  const handleAttempt = (attempt: number) => {
    setSelectedAnswer(attempt);
    setShowFeedback(true);
    registerAttempt({ attempt, correctAnswer });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gameStatus.currentQuestion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-5 w-full"
      >
        <h2 className="font-sans text-sm font-semibold text-slate-200 md:text-base lg:text-lg leading-relaxed">
          {title}
        </h2>

        <div className="flex flex-col xl:flex-row gap-6 lg:gap-10 xl:items-start">
          <div className="xl:flex-1 xl:min-w-0">
            <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <span className="text-[11px] text-slate-500 font-roboto-mono ml-2 select-none">
                  TypeScript
                </span>
              </div>
              <div className="[&>figure>pre]:min-h-[220px] [&>figure>pre]:max-h-[45vh] [&>figure>pre]:overflow-y-auto [&>figure]:m-0 [&>figure>pre]:rounded-none [&>figure>pre]:border-0 overflow-x-auto">
                {code}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 xl:w-[360px] xl:shrink-0">
            <div className="flex flex-col gap-2.5">
              {options.map((option, index) => {
                const isCorrect = showFeedback && index === correctAnswer;
                const isWrong =
                  showFeedback &&
                  index === selectedAnswer &&
                  index !== correctAnswer;
                const isNeutralDuringFeedback =
                  showFeedback && !isCorrect && !isWrong;

                return (
                  <button
                    key={option}
                    className={cn(
                      "relative flex items-center gap-3 rounded-xl p-3.5 text-left text-[13px] sm:text-sm font-sans",
                      "border transition-all duration-150",
                      isCorrect &&
                        "bg-emerald-500/10 border-emerald-500/30 text-slate-100",
                      isWrong &&
                        "bg-red-500/10 border-red-500/30 text-slate-100",
                      isNeutralDuringFeedback &&
                        "bg-white/[0.02] border-white/[0.06] text-slate-400",
                      !showFeedback &&
                        "bg-white/[0.02] border-white/[0.06] text-slate-200 hover:bg-white/[0.05] hover:border-white/[0.12] cursor-pointer",
                      showFeedback && "cursor-default"
                    )}
                    onClick={() => handleAttempt(index)}
                    disabled={showFeedback}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center w-7 h-7 rounded-lg text-xs font-semibold font-roboto-mono shrink-0 transition-colors duration-150",
                        isCorrect && "bg-emerald-500/20 text-emerald-400",
                        isWrong && "bg-red-500/20 text-red-400",
                        !showFeedback && "bg-white/[0.06] text-slate-400",
                        isNeutralDuringFeedback &&
                          "bg-white/[0.04] text-slate-500"
                      )}
                    >
                      {OPTION_LETTERS[index]}
                    </span>
                    <span className="flex-1 leading-snug">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-4">
              {Array.from({ length: totalQuestions }, (_, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === currentQuestion
                      ? "w-5 h-1.5 bg-slate-300"
                      : i < currentQuestion
                        ? "w-1.5 h-1.5 bg-slate-400/30"
                        : "w-1.5 h-1.5 bg-white/[0.06]"
                  )}
                />
              ))}
            </div>
            <p className="text-xs font-roboto-mono text-center text-slate-500">
              {currentQuestion + 1} of {totalQuestions}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
