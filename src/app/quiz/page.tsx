"use client";

import EndGame from "./(components)/end-game";
import { Question } from "./(components)/question";

import { useGame } from "./contexts/game";

import { questions } from "./data/questions";

export default function Home() {
  const { gameStatus } = useGame();

  if (gameStatus.quizHasEnded) {
    return <EndGame />;
  }

  const currentQuestion = questions[gameStatus.currentQuestion];
  const QuestionCode = currentQuestion?.code;

  return (
    <section className="flex flex-col xl:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-12 w-full max-w-7xl mx-auto my-auto z-50">
      <Question
        title={currentQuestion.title}
        code={<QuestionCode />}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
      />
    </section>
  );
}
