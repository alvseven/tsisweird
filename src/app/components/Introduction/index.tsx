import { StartButton } from "../StartButton";

export function Introduction() {
    return <div className="flex flex-col items-center justify-center gap-12 w-full">
        <h1 className="text-3xl font-inknut-antiqua text-center relative tracking-wider">Typescript is weird</h1>

        <p className="text-sm px-4 sm:pr-0 sm:pl-4 sm:w-2/3 lg:w-2/4 xl:w-1/3 font-roboto-mono">
            Navigate through this TypeScript quiz, facing unique challenges with unexpected twists, exploring nuances that may surprise even seasoned TypeScript developers
        </p>
        <StartButton />
    </div>
}