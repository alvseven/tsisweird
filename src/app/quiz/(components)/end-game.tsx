"use client";

import { useState } from "react";
import { motion } from "motion/react";

import Confetti from "react-confetti";
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Download,
  Share,
} from "lucide-react";

import {
  ExplanationModal,
  type ExplanationModalProps,
} from "./explanation-modal";

import { useGame } from "../contexts/game";

import { questions } from "../data/questions";

export default function EndGame() {
  const [explanationModalIsOpen, setExplanationModalIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<
    ExplanationModalProps["question"] | null
  >(null);

  const { gameStatus } = useGame();

  const correctsAnswers = questions.filter(
    (question, index) => question.correctAnswer === gameStatus.answers[index]
  );
  const correctCount = correctsAnswers.length;
  const incorrectCount = gameStatus.total - correctCount;

  const openExplanationModal = (
    question: ExplanationModalProps["question"]
  ) => {
    setCurrentQuestion(question);
    setExplanationModalIsOpen(true);
  };

  const closeExplanationModal = () => {
    setExplanationModalIsOpen(false);
    setCurrentQuestion(null);
  };

  const generatePDF = () => {
    console.log("Generating PDF...");
    alert("TODO :D");
  };

  const shareQuizResults = () => {
    console.log("Sharing quiz results...");
    alert("TODO :D");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Confetti
        width={window.innerWidth - 50}
        height={window.innerHeight}
        colors={["#10132B", "#2563eb", "#1e3a8a", "#1e40af", "#1d4ed8"]}
        numberOfPieces={1000}
        style={{ zIndex: 9999 }}
        recycle={false}
      />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-50 px-4 py-8 z-50"
      >
        <motion.div variants={item} className="w-full lg:w-4/5">
          <motion.h1
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-inter tracking-wider mb-8"
          >
            Congratulations on completing the quiz! Here are your results:
          </motion.h1>
          <motion.div
            variants={item}
            className="bg-[#1a1f3d] rounded-lg p-4 sm:p-6 w-full mb-8"
          >
            <div className="flex justify-between items-center mb-6 text-base sm:text-lg md:text-xl">
              <motion.p
                variants={item}
                className="flex items-center gap-2 text-xs md:text-xl lg:text-2xl"
              >
                <XCircle className="text-red-400 w-5 h-5 lg:w-7 lg:h-7" />
                <span className="font-roboto-mono text-red-400">
                  Incorrect: {incorrectCount}
                </span>
              </motion.p>
              <motion.p
                variants={item}
                className="flex items-center gap-2 text-xs md:text-xl lg:text-2xl"
              >
                <CheckCircle className="text-green-400 w-5 h-5 lg:w-7 lg:h-7" />
                <span className="font-roboto-mono text-green-400">
                  Correct: {correctCount}
                </span>
              </motion.p>
            </div>
            <motion.div variants={item} className="space-y-8">
              {questions.map((question, index) => {
                const userAnswer = gameStatus.answers[index];
                const correctOption = question.correctAnswer;
                const isCorrectAnswer = userAnswer === correctOption;

                return (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.01 }}
                    className="border border-indigo-900 rounded-lg p-4 transition-all duration-300 hover:border-indigo-600"
                  >
                    <h2 className="font-inter text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-100 mb-4">
                      {question.title}
                    </h2>
                    <div className="bg-[#10132B] p-4 rounded mb-4 overflow-x-auto">
                      <question.code />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                      {question.options.map((option, optionIndex) => {
                        const isUserAnswer = optionIndex === userAnswer;
                        const isCorrectOption =
                          question.correctAnswer === optionIndex;

                        return (
                          <div
                            key={optionIndex}
                            className={`relative rounded-lg text-slate-100 font-inter p-4 text-xs sm:text-sm transition-all duration-300 flex items-center
                            ${
                              isCorrectOption
                                ? "bg-green-500/20 border-2 border-green-500/30"
                                : isUserAnswer && !isCorrectAnswer
                                ? "bg-red-500/20 border-2 border-red-500/30"
                                : "border-2 border-blue-800/30"
                            }`}
                          >
                            <div className="pr-6">{option}</div>
                            <div className="absolute top-1/3 right-3">
                              {isCorrectOption && (
                                <CheckCircle className="w-5 h-5 text-green-400 my-auto" />
                              )}
                              {!isCorrectAnswer && isUserAnswer && (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={() => openExplanationModal(question)}
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors text-xs sm:text-sm font-roboto-mono"
                      >
                        <HelpCircle className="w-4 h-4" />
                        See question explanation
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-4 items-center justify-center text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
              onClick={shareQuizResults}
            >
              Share results
              <Share />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generatePDF}
              className="flex gap-4 items-center justify-center text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
            >
              Download PDF
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
        {explanationModalIsOpen && currentQuestion && (
          <ExplanationModal
            question={currentQuestion}
            explanationModalIsOpen={explanationModalIsOpen}
            onClose={closeExplanationModal}
          />
        )}
      </motion.div>
    </>
  );
}
