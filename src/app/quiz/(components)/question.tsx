"use client";

import { useState, useEffect, type ReactNode } from "react";
import { CheckCircle, XCircle } from "lucide-react";
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
      }, 1000); // Delay before moving to the next question

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
      <div className="flex flex-col gap-4 px-2 min-w-[70%]">
        <h2 className="font-inter text-sm font-bold text-pretty text-slate-100 md:text-base lg:text-xl mx-2">
          {title}
        </h2>
        <div className="[&>figure>pre]:min-h-[400px]">{code}</div>
      </div>
      <div className="flex flex-col justify-end gap-4 min-w-[30%]">
        {options.map((option, index) => (
          <button
            key={option}
            className={`rounded-2xl text-slate-100 font-inter border-2 p-4 text-xs text-left relative
              ${
                showFeedback && index === correctAnswer
                  ? "bg-green-500/20 border-green-500/30"
                  : showFeedback &&
                    index === selectedAnswer &&
                    index !== correctAnswer
                  ? "bg-red-500/20 border-red-500/30"
                  : "border-blue-800 hover:bg-[#252A44]"
              }`}
            onClick={() => handleAttempt(index)}
            disabled={showFeedback}
          >
            {option}
            {showFeedback && (
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {index === correctAnswer && (
                  <CheckCircle className="w-5 h-5 z-50 text-green-400" />
                )}
                {index === selectedAnswer && index !== correctAnswer && (
                  <XCircle className="w-5 h-5 z-50 text-red-400" />
                )}
              </div>
            )}
          </button>
        ))}
        <div className="flex items-center justify-center mt-8 mb-2 ">
          <h4 className="text-sm font-inter">
            Question {currentQuestion} of {totalQuestions}
          </h4>
        </div>
      </div>
    </>
  );
}
