"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import { questions } from "../data/questions";

type GameStatus = {
  quizHasEnded: boolean;
  currentQuestion: number;
  answers: number[];
  readonly total: number;
  showFeedback: boolean;
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
    answers: [],
    total: questions.length,
    showFeedback: false,
  });

  const registerAttempt: RegisterAttempt = useCallback(({ attempt }) => {
    setGameStatus((previousState) => ({
      ...previousState,
      answers: [...previousState.answers, attempt],
      showFeedback: true,
    }));

    setTimeout(() => {
      setGameStatus((previousState) => {
        const isLastQuestion =
          previousState.currentQuestion + 1 === previousState.total;

        return {
          ...previousState,
          quizHasEnded: isLastQuestion,
          currentQuestion: isLastQuestion
            ? previousState.currentQuestion
            : previousState.currentQuestion + 1,
          showFeedback: false,
        };
      });
    }, 1000); // 1 second delay, matching the feedback duration in the Question component
  }, []);

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
