"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import Confetti from "react-confetti";
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Share,
  Check,
  Copy,
  BookOpen,
  ChevronDown,
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
  const [copied, setCopied] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { gameStatus } = useGame();

  const correctsAnswers = questions.filter(
    (question, index) => question.correctAnswer === gameStatus.answers[index]
  );
  const correctCount = correctsAnswers.length;
  const incorrectCount = gameStatus.total - correctCount;

  const shareText = `I scored ${correctCount}/${gameStatus.total} on the TypeScript is weird quiz! Can you beat my score?`;
  const shareUrl = "https://tsisweird.com";

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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShareMenuOpen(false);
    }, 1500);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setShareMenuOpen(false);
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      "_blank"
    );
    setShareMenuOpen(false);
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setShareMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShareMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const item = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      {!prefersReducedMotion && (
        <Confetti
          width={window.innerWidth - 50}
          height={window.innerHeight}
          colors={["#10132B", "#2563eb", "#1e3a8a", "#1e40af", "#1d4ed8"]}
          numberOfPieces={200}
          style={{ zIndex: 9999 }}
          recycle={false}
        />
      )}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-50 px-4 py-8 z-50"
      >
        <motion.div variants={item} className="w-full lg:w-4/5">
          <motion.h1
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-sans tracking-wider mb-8"
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
                    <h2 className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-100 mb-4">
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
                            className={`relative rounded-lg text-slate-100 font-sans p-4 text-xs sm:text-sm transition-all duration-300 flex items-center
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="relative" ref={shareMenuRef}>
              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                className="flex gap-3 items-center justify-center text-base sm:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
                onClick={() => setShareMenuOpen(!shareMenuOpen)}
              >
                Share results
                <ChevronDown className={`w-5 h-5 transition-transform ${shareMenuOpen ? "rotate-180" : ""}`} />
              </motion.button>
              {shareMenuOpen && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1a1f3d] border border-indigo-900 rounded-lg shadow-xl overflow-hidden w-max z-50">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-slate-200 hover:bg-indigo-900/40 transition-colors font-roboto-mono whitespace-nowrap"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 shrink-0 text-green-400" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    {copied ? "Copied!" : "Copy to clipboard"}
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-slate-200 hover:bg-indigo-900/40 transition-colors font-roboto-mono whitespace-nowrap"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Share on X
                  </button>
                  <button
                    onClick={shareOnWhatsApp}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-slate-200 hover:bg-indigo-900/40 transition-colors font-roboto-mono whitespace-nowrap"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Share on WhatsApp
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-slate-200 hover:bg-indigo-900/40 transition-colors font-roboto-mono whitespace-nowrap"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    Share on LinkedIn
                  </button>
                </div>
              )}
            </div>
            <Link
              href="/learn"
              className="flex gap-3 items-center justify-center text-base sm:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full border border-double border-indigo-900 text-neutral-100 font-roboto-mono hover:border-gray-400 transition-all duration-300 w-full sm:w-auto"
            >
              <BookOpen className="w-5 h-5" />
              View all explanations
            </Link>
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
