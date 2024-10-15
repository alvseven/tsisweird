import type { ComponentProps } from "react";

import { TypescriptIcon } from "./icons/typescript";

export function StartButton({ ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="flex gap-4 align-center justify-center px-20 py-4 rounded-full border border-double border-indigo-900 to-[#111827] text-neutral-100 font-roboto-mono hover:border-gray-400"
    >
      Get started
      <TypescriptIcon />
    </button>
  );
}
