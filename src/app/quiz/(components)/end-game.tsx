"use client";

import { useState } from "react";

import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Download,
  Share,
} from "lucide-react";

import { ExplanationModal } from "./explanation-modal";

import { useGame } from "../contexts/game";

import { questions } from "../data/questions";

export default function EndGame() {
  const { gameStatus } = useGame();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState("");

  const correctCount = gameStatus.corrects.length;
  const incorrectCount = gameStatus.total - correctCount;

  const openExplanation = (explanation: string) => {
    setCurrentExplanation(explanation);
    setModalOpen(true);
  };

  const generatePDF = () => {
    console.log("Generating PDF...");
  };

  const shareQuizResults = () => {};

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  text-neutral-50 px-4 py-8 z-50">
      <div className="w-full lg:w-4/5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-inter text-center tracking-wider mb-8">
          Congratulations for completing the quiz! Here are the results:
        </h1>
        <div className="bg-[#1a1f3d] rounded-lg p-4 sm:p-6 w-full mb-8">
          <div className="flex justify-between items-center mb-6 text-base sm:text-lg md:text-xl">
            <p className="flex items-center gap-2 text-xs md:text-xl lg:text-2xl">
              <XCircle className="text-red-400 w-5 h-5 lg:w-7 lg:h-7" />
              <span className="font-roboto-mono text-red-400">
                Incorrects: {incorrectCount}
              </span>
            </p>
            <p className="flex items-center gap-2 text-xs md:text-xl lg:text-2xl">
              <CheckCircle className="text-green-400 w-5 h-5 lg:w-7 lg:h-7" />
              <span className="font-roboto-mono text-green-400">
                Corrects: {correctCount}
              </span>
            </p>
          </div>
          <div className="space-y-8">
            {questions.map((question, index) => {
              const isCorrect = gameStatus.corrects.includes(index);
              const userAnswer = isCorrect
                ? question.correct
                : gameStatus.corrects.includes(index + 1)
                ? 0
                : gameStatus.corrects.includes(index - 1)
                ? question.options.length - 1
                : null;
              return (
                <div
                  key={index}
                  className="border border-indigo-900 rounded-lg p-4 transition-all duration-300 hover:border-indigo-600"
                >
                  <h2 className="font-inter text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-100 mb-4">
                    {question.title}
                  </h2>

                  <question.code />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    {question.options.map((option, optionIndex) => {
                      const isCorrectAnswer = optionIndex === question.correct;
                      const isUserAnswer = optionIndex === userAnswer;
                      return (
                        <div
                          key={optionIndex}
                          className={`relative rounded-lg text-slate-100 font-inter p-4 text-xs sm:text-sm transition-all duration-300
                            ${
                              isCorrectAnswer
                                ? "bg-green-500/20 border-2 border-green-500"
                                : isUserAnswer && !isCorrect
                                ? "bg-red-500/20 border-2 border-red-500"
                                : "border-blue-800 border-2"
                            }`}
                        >
                          <div className="pr-6">{option}</div>
                          <div className="absolute top-2 right-2">
                            {isCorrectAnswer && (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            )}
                            {isUserAnswer && !isCorrect && (
                              <XCircle className="w-5 h-5 text-red-400" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => openExplanation(question.explanation)}
                      className="flex items-center gap-1  text-indigo-400 hover:text-indigo-300 transition-colors text-xs sm:text-sm font-roboto-mono"
                    >
                      <HelpCircle className="w-4 h-4" />
                      See question explanation
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="flex gap-4 items-center justify-center text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
            onClick={shareQuizResults}
          >
            Share results
            <Share />
          </button>
          <button
            onClick={generatePDF}
            className="flex gap-4 items-center justify-center text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
          >
            Download PDF
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      <ExplanationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        explanation={currentExplanation}
      />
    </div>
  );
}
