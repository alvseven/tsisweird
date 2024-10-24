"use client";

import { type ReactNode, createContext, useContext, useState } from "react";
import { questions } from "../data/questions";

type GameStatus = {
  currentQuestion: number;
  total: number;
  corrects: number[];
};

type GameContext = {
  registerAttempt: ({
    attempt,
    correct,
  }: {
    attempt: number;
    correct: number;
  }) => void;
  gameStatus: GameStatus;
};

const GameContext = createContext<GameContext | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    currentQuestion: 0,
    total: questions.length,
    corrects: [],
  });

  const registerAttempt: GameContext["registerAttempt"] = ({
    attempt,
    correct,
  }) => {
    setGameStatus((prev) => {
      const isCorrectAnswer = attempt === correct;
      return {
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        corrects: isCorrectAnswer
          ? [...prev.corrects, prev.currentQuestion]
          : prev.corrects,
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
