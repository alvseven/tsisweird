"use client";

import { useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { questions } from "../data/questions";
import { compressToEncodedURIComponent } from "lz-string";
import Link from "next/link";

export type ExplanationModalProps = {
  onClose: () => void;
  question: Pick<
    (typeof questions)[number],
    "title" | "explanation" | "code" | "playgroundCode"
  >;
};

export function ExplanationModal({ onClose, question }: ExplanationModalProps) {
  const QuestionCode = question.code;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        className="bg-[#12152e] rounded-2xl shadow-2xl shadow-black/40 max-w-3xl w-full max-h-[85vh] overflow-hidden border border-white/[0.06]"
        onClick={(event) => event.stopPropagation()}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-start gap-4 p-6 pb-4">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-slate-500 font-roboto-mono mb-2">
              Explanation
            </p>
            <h3
              id="modal-title"
              className="text-lg font-semibold text-slate-100 font-sans leading-snug"
            >
              {question.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-200 transition-colors duration-150 rounded-lg p-2 hover:bg-white/[0.06] shrink-0"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(85vh-100px)] custom-scrollbar space-y-5">
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
                <div className="w-2 h-2 rounded-full bg-white/[0.08]" />
              </div>
              <span className="text-[10px] text-slate-500 font-roboto-mono ml-1.5 select-none">
                TypeScript
              </span>
            </div>
            <div className="[&>figure]:m-0 [&>figure>pre]:rounded-none [&>figure>pre]:border-0">
              <QuestionCode
                components={{
                  pre: (props: React.ComponentProps<"pre">) => (
                    <pre {...props} className="custom-scrollbar" />
                  ),
                }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[13px] text-slate-300 leading-relaxed font-sans">
              {question.explanation}
            </p>
          </div>

          {question.playgroundCode && (
            <Link
              href={`https://www.typescriptlang.org/play/?#code/${compressToEncodedURIComponent(question.playgroundCode)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 text-xs font-roboto-mono hover:text-blue-300 transition-colors duration-150"
            >
              Open in TypeScript Playground
              <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
