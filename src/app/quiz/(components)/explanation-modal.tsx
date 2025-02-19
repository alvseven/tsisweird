"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { questions } from "../data/questions";
import { compressToEncodedURIComponent } from "lz-string";
import Link from "next/link";

export type ExplanationModalProps = {
  explanationModalIsOpen: boolean;
  onClose: () => void;
  question: Pick<(typeof questions)[number], "title" | "explanation" | "code">;
};

export function ExplanationModal({
  explanationModalIsOpen,
  onClose,
  question,
}: ExplanationModalProps) {
  const QuestionCode = question.code;

  return (
    <AnimatePresence>
      {explanationModalIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-[#1a1f3d] rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex justify-between items-center border-b border-indigo-900 p-6">
              <div>
                <h3
                  id="modal-title"
                  className="text-2xl font-bold text-slate-100 mb-2"
                >
                  Question
                </h3>
                <p className="text-slate-400 text-sm">{question.title}</p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2.5  hover:bg-indigo-800 border border-indigo-700"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar space-y-6">
              <div className="bg-[#10132B] p-6 rounded-lg border border-indigo-900/30">
                {
                  <QuestionCode
                    components={{
                      pre: (props) => (
                        <pre {...props} className="custom-scrollbar" />
                      ),
                    }}
                  />
                }
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-100">
                  Explanation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
              <div className="flex justify-end pt-4">
                <Link
                  href={
                    "https://www.typescriptlang.org/play/?#code/C4TwDgpgBAkgzgKQIYDckHED2mAmAeAFSggA9gIA7HOKAI2wBsIkKA+KAXiiNPKpoBmSBnAgAoKJKgB+KACIAIhAEBLCivIMQUCpmByJUgFzyAmpgCuUALYW4wOtADWKnDjUBzOQG4xY0JBQAEoQcBYMDlzwyGhYuHhCIhCsvkA"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 font-medium text-sm hover:underline-offset-2 hover:underline"
                >
                  Open in TypeScript Playground
                  <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
