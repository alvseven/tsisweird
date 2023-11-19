import Image from "next/image"
import Question1 from "../../../../../public/question1.svg"

export function Question() {
    return <section className="flex flex-col gap-8 drop-shadow-lg shadow-lg shadow-blue-950 pb-12 px-12">
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-inter text-xl text-center">What is the output of <span className="font-roboto-mono text-[#1AD6B5]">UserWithoutName?</span></h2>
            <Image src={Question1} alt="first question" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <button className="rounded-2xl text-slate-100 truncate font-inter border-2 border-dotted border-blue-800 p-4 text-xs hover:border-blue-800 hover:border-solid">
                Error: {"Type 'namee' does not satisfy the constraint 'name'"}
            </button>
            <button className="rounded-2xl text-slate-100 truncate font-inter border-2 border-dotted border-blue-800 p-4 text-xs hover:border-blue-800 hover:border-solid">
                Same as User
            </button>
            <button className="rounded-2xl text-slate-100 truncate font-inter border-2 border-dotted border-blue-800 p-4 text-xs hover:border-blue-800 hover:border-solid">
                {"{}"}
            </button>
            <button className="rounded-2xl text-slate-100 truncate font-inter border-2 border-dotted border-blue-800 p-4 text-xs hover:border-blue-800 hover:border-solid">
                {"{ age: number; }"}
            </button>
        </div>
    </section>
}