import Link from "next/link";

import { TypescriptIcon } from "./(components)/icons/typescript";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 w-full relative z-50 sm:px-4 px-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-inter text-center relative tracking-wider">
        Typescript is weird
      </h1>
      <p className="text-xs sm:text-sm px-4 sm:pr-0 sm:pl-4 sm:w-2/3 lg:w-2/4 xl:w-1/3 font-roboto-mono">
        Navigate through this TypeScript quiz, facing unique challenges with
        unexpected twists, exploring nuances that may surprise even seasoned
        TypeScript developers.
      </p>
      <Link
        href="/quiz"
        className="flex gap-4 align-center mt-4 justify-center md:text-xl px-12 md:px-16 py-4 rounded-full border border-double border-indigo-900 to-[#111827] text-neutral-100 font-roboto-mono hover:border-gray-400"
      >
        Get started
        <TypescriptIcon />
      </Link>
    </div>
  );
}
