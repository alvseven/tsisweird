"use client";

import { motion } from "motion/react";

type ScoreSummaryProps = {
  correctCount: number;
  incorrectCount: number;
  total: number;
};

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function ScoreSummary({
  correctCount,
  incorrectCount,
  total,
}: ScoreSummaryProps) {
  const percentage = total > 0 ? correctCount / total : 0;
  const strokeDashoffset = RING_CIRCUMFERENCE * (1 - percentage);

  return (
    <div className="flex flex-col items-center rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-10 mb-10">
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-6">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={RING_RADIUS}
            fill="none"
            stroke="currentColor"
            className="text-white/[0.06]"
            strokeWidth="7"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={RING_RADIUS}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient
              id="scoreGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold font-roboto-mono text-slate-100">
            {correctCount}
          </span>
          <span className="text-xs text-slate-500 font-roboto-mono">
            / {total}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 sm:gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-roboto-mono text-slate-300">
            {correctCount} correct
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <span className="text-sm font-roboto-mono text-slate-300">
            {incorrectCount} incorrect
          </span>
        </div>
      </div>
    </div>
  );
}
