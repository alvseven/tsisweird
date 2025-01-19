"use client";

import { useState, useEffect, type ReactNode } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useGame } from "../contexts/game";
import { questions } from "../data/questions";

type QuestionProps = Omit<
  (typeof questions)[number],
  "explanation" | "code"
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

  const currentQuestion = gameStatus.currentQuestion + 1;
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
    <>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 px-2 min-w-[70%]"
      >
        <h2 className="font-inter text-sm font-bold text-pretty text-slate-100 md:text-base lg:text-xl mx-2">
          {title}
        </h2>
        <div className="[&>figure>pre]:min-h-[400px]">{code}</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-end gap-4 min-w-[30%]"
      >
        {options.map((option, index) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={` rounded-2xl text-slate-100 font-inter border-2 p-4 text-xs text-left flex items-center justify-between gap-4 transition-colors duration-200
             ${
                showFeedback && index === correctAnswer
                  ? "bg-green-500/20 border-green-500/30"
                  : showFeedback &&
                    index === selectedAnswer &&
                    index !== correctAnswer
                  ? "bg-red-500/20 border-red-500/30"
                  : "border-blue-800 hover:bg-[#252A44] hover:border-blue-700"
              }
              ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
            onClick={() => handleAttempt(index)}
            disabled={showFeedback}
            aria-label={`Answer option ${index + 1}`}
          >
            <span className="flex-1">{option}</span>
            <AnimatePresence mode="wait">
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {index === correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  )}
                  {index === selectedAnswer && index !== correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center mt-8 mb-2"
        >
          <h4 className="text-sm font-inter">
            Question {currentQuestion} of {totalQuestions}
          </h4>
        </motion.div>
      </motion.div>
    </>
  );
}
