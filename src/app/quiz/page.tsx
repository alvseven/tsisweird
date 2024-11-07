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
    <section className="flex flex-col xl:flex-row gap-8 pt-6 pb-12 px-1 lg:px-12 max-w-full z-50 drop-shadow-lg shadow-lg shadow-blue-950 min-w-[100%] min-h-[424px]">
      <Question
        title={currentQuestion.title}
        code={<QuestionCode />}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correct}
        explanation={currentQuestion.explanation}
      />
    </section>
  );
}
