"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 w-full relative z-50 sm:px-4 px-2 my-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl font-sans text-center relative tracking-wider"
      >
        Typescript is weird
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs sm:text-sm px-4 sm:pr-0 sm:pl-4 sm:w-2/3 lg:w-2/4 xl:w-1/3 font-roboto-mono text-center text-slate-400"
      >
        Navigate through this TypeScript quiz, facing unique challenges with
        unexpected twists, exploring nuances that may surprise even seasoned
        TypeScript developers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Link
          href="/quiz"
          className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3 font-sans text-sm text-slate-200 bg-gradient-to-b from-white/[0.1] to-white/[0.04] border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:from-white/[0.14] hover:to-white/[0.06] hover:border-white/[0.16] hover:text-white transition-all duration-200"
        >
          Start the quiz
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-0.5 transition-all duration-200" />
        </Link>
      </motion.div>
    </div>
  );
}
