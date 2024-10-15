import type { Dispatch, SetStateAction } from "react";

import { StartButton } from "./start-button";

type IntroductionProps = {
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

export function Introduction({ setIsPlaying }: IntroductionProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full relative z-50">
      <h1 className="text-[1.6rem] sm:text-3xl font-inter text-center relative tracking-wider">
        Typescript is weird
      </h1>
      <p className="text-xs sm:text-sm px-4 sm:pr-0 sm:pl-4 sm:w-2/3 lg:w-2/4 xl:w-1/3 font-roboto-mono">
        Navigate through this TypeScript quiz, facing unique challenges with
        unexpected twists, exploring nuances that may surprise even seasoned
        TypeScript developers
      </p>
      <StartButton onClick={() => setIsPlaying((prevState) => !prevState)} />
    </div>
  );
}
