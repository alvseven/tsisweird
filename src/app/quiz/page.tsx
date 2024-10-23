import { Question } from "./(components)/question";
import QuestionOne from "./(components)/mdx/questions.mdx";

import Beam from "../../../public/beam.png";
import Grid from "../../../public/grid.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full min-h-[72vh] sm:min-h-[77vh] xl:min-h-[84vh] bg-[#10132b]">
      <div>
        <Image
          src={Beam}
          alt="beam"
          className="absolute opacity-70 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
        />
        <Image
          src={Grid}
          alt="grid"
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
        />
      </div>
      <section className="flex flex-col xl:flex-row gap-8 pt-6 pb-12 px-1 lg:px-12 max-w-full z-50 drop-shadow-lg shadow-lg shadow-blue-950">
        <Question
          title="What will TypeScript do if you write the code above?"
          code={<QuestionOne />}
          options={
            [
              "TypeScript won't raise any errors.",
              "TypeScript will raise an error saying that 'number' is not assignable to 'string'.",
              "TypeScript will raise an error saying that 'Logger' expects a method, but you are passing a function.",
              "TypeScript will raise an error saying that the 'greeting' function is not assignable to 'log' because of its parameters.",
            ] as const
          }
          current={1}
        />
      </section>
    </main>
  );
}
