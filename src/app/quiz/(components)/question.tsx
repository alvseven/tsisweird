"use client";

import type { ReactNode } from "react";
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

  const currentQuestion = gameStatus.currentQuestion + 1;
  const totalQuestions = gameStatus.total;

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
            className="rounded-2xl text-slate-100 font-inter border-2 border-blue-800 p-4 text-xs text-left"
            onClick={() => registerAttempt({ attempt: index, correctAnswer })}
          >
            {option}
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
