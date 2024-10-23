import type { ReactNode } from "react";

type QuestionProps = {
  title: string;
  code: ReactNode;
  options: readonly [string, string, string, string];
  current: number;
};

export function Question({ title, code, options, current }: QuestionProps) {
  return (
    <>
      <div className="flex flex-col gap-8 px-2">
        <h2 className="font-inter text-slate-100 md:text-xl text-center">
          Question: {title}
        </h2>
        {code}
      </div>
      <div className="flex flex-col justify-end gap-4">
        {options.map((option) => (
          <button
            key={option}
            className="rounded-2xl text-slate-100 font-inter border-2 border-blue-800 p-4 text-xs hover:border-blue-800 hover:border-solid"
          >
            {option}
          </button>
        ))}
        <div className="flex items-center justify-center mt-8 mb-2 ">
          <h4 className="text-sm font-inter">Question {current} of 15</h4>
        </div>
      </div>
    </>
  );
}
