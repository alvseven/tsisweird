"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { questions } from "../data/questions";
import { compressToEncodedURIComponent } from "lz-string";

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

  const playgroundLink = `https://www.typescriptlang.org/play?#code/${compressToEncodedURIComponent(`
  type User = { name: string; age: number; anotherProp: 'hey' }`)}`;

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
            <div className="flex justify-between items-center border-b border-indigo-900 p-4">
              <h3 id="modal-title" className="text-xl font-bold text-slate-100">
                Explanation
              </h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2 bg-indigo-900 hover:bg-indigo-800"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar">
              <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                {question.title}
              </h4>
              <div className="bg-[#10132B] p-4 rounded mb-4 overflow-x-auto custom-scrollbar">
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
              <div className="flex flex-col gap-4">
                <h4>Explanation: </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {question.explanation}
                </p>
              </div>
              <a
                href={playgroundLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded"
              >
                Open in TypeScript Playground
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="border-t border-indigo-900 p-4 flex justify-end">
              <button
                onClick={onClose}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#1a1f3d] font-medium text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
