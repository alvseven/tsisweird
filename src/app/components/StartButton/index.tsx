import { TypescriptIcon } from "../shared/icons/typescript";

export function StartButton() {
    return <button className="flex gap-4 align-center justify-center px-20 py-4 rounded-full border-t-4 border-r-2 scale-90 border-double border-gray-400 bg-gradient-to-br from-blue-950 to-[#111827] text-neutral-100 font-roboto-mono transition delay-200 hover:scale-100 hover:border-2  hover:border-solid hover:border-gray-500 before:content-[''] before:w-0 before:h-full before:rounded-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#04162f] before:via-[#0c233c] before:to-[#071c3b] before:transition-all before:duration-900 before:ease before:scale-100 before:z-[-1] hover:before:w-full">
        Get started
        <TypescriptIcon />
    </button>
}

