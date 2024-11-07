"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

import { questions } from "../data/questions";

type GameStatus = {
  quizHasEnded: boolean;
  currentQuestion: number;
  corrects: number[];
  readonly total: number;
};

type RegisterAttemptInput = { attempt: number; correctAnswer: number };

type RegisterAttempt = ({
  attempt,
  correctAnswer,
}: RegisterAttemptInput) => void;

type GameContext = {
  gameStatus: GameStatus;
  registerAttempt: RegisterAttempt;
};

const GameContext = createContext<GameContext | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    quizHasEnded: false,
    currentQuestion: 0,
    corrects: [],
    total: questions.length,
  });

  const registerAttempt: RegisterAttempt = ({ attempt, correctAnswer }) => {
    setGameStatus((previousState) => {
      const isCorrectAnswer = attempt === correctAnswer;

      const isLastQuestion =
        previousState.currentQuestion + 1 === previousState.total;

      return {
        ...previousState,
        quizHasEnded: isLastQuestion,
        currentQuestion: previousState.currentQuestion + 1,
        corrects: isCorrectAnswer
          ? [...previousState.corrects, previousState.currentQuestion]
          : previousState.corrects,
      };
    });
  };

  return (
    <GameContext.Provider value={{ gameStatus, registerAttempt }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return gameContext;
}
