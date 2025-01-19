"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { TypescriptIcon } from "./(components)/icons/typescript";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 w-full relative z-50 sm:px-4 px-2">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl font-inter text-center relative tracking-wider"
      >
        Typescript is weird
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs sm:text-sm px-4 sm:pr-0 sm:pl-4 sm:w-2/3 lg:w-2/4 xl:w-1/3 font-roboto-mono text-center"
      >
        Navigate through this TypeScript quiz, facing unique challenges with
        unexpected twists, exploring nuances that may surprise even seasoned
        TypeScript developers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link
            href="/quiz"
            className="duration-300 transition-all flex gap-4 align-center mt-4 justify-center md:text-xl px-12 md:px-16 py-4 rounded-full border border-double border-indigo-900 to-[#111827] text-neutral-100 font-roboto-mono hover:border-gray-400"
          >
            Get started
            <TypescriptIcon />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
