import { Question } from "./(components)/question";
import QuestionOne from "./(components)/mdx/questions.mdx";

export default function Home() {
  return (
    <section className="flex flex-col xl:flex-row gap-8 py-6 px-1 lg:px-12 max-w-full z-50 drop-shadow-lg shadow-lg shadow-blue-950">
      <Question
        title="What will TypeScript do if you write the code above?"
        code={<QuestionOne />}
        options={
          [
            "TypeScript will raise an error saying that 'number' is not assignable to 'string'.",
            "TypeScript will raise an error saying that 'Logger' expects a method, but you are passing a function.",
            "TypeScript won't raise any errors.",
            "TypeScript will raise an error saying that the 'greeting' function is not assignable to 'log' because of its parameters.",
          ] as const
        }
        current={1}
      />
    </section>
  );
}
