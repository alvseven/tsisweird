import QuestionOneCode from "../mdx/question-one.mdx";
import QuestionTwoCode from "../mdx/question-two.mdx";
import QuestionThreeCode from "../mdx/question-three.mdx";
import QuestionFourCode from "../mdx/question-four.mdx";
import QuestionFiveCode from "../mdx/question-five.mdx";
import QuestionSixCode from "../mdx/question-six.mdx";
import QuestionSevenCode from "../mdx/question-seven.mdx";
import QuestionEightCode from "../mdx/question-eight.mdx";

export const questions = [
  {
    title: "What will TypeScript do if you write the code below?",
    code: QuestionOneCode,
    options: [
      "TypeScript won't raise any errors",
      "TypeScript will raise an error saying that 'number' is not assignable to 'string'",
      "TypeScript will raise an error saying that 'Logger' expects a method, but you are passing a function",
      "TypeScript will raise an error saying that the 'greeting' function is not assignable to 'log' because of its parameters",
    ],
    correct: 0,
  },
  {
    title:
      "What is the output of `UserWithoutBirthdate`? (assume that 'exactOptionalPropertyTypes' option in tsconfig is set to true)",
    code: QuestionTwoCode,
    options: [
      "{ name: string | undefined; age: number; }",
      "{ name?: string | undefined; readonly age: number; }",
      "{ name?: string; readonly age: number; }",
      "{ name: string; age: number; }",
    ],
    correct: 3,
  },
  {
    title: "What will TypeScript infer for the type of `Result`?",
    code: QuestionThreeCode,
    options: ["number", "string", "number | string", "never"],
    correct: 2,
  },
  {
    title: "What does TypeScript infer as the return type of this function?",
    code: QuestionFourCode,
    options: ["string", "number", "any", "unknown"],
    correct: 1,
  },
  {
    title:
      "What is the type of `Result` in the code below involving `never` type?",
    code: QuestionFiveCode,
    options: [
      "[false, true]",
      "[false, false]",
      "[true, true]",
      "[never, true]",
    ],
    correct: 3,
  },
  {
    title:
      "What will TypeScript do in the following scenario with a faulty type guard?",
    code: QuestionSixCode,
    options: [
      "TypeScript will raise an error because `typeof value === 'number'` contradicts the predicate `value is string`",
      "TypeScript will compile without errors and the inferred type of user inside the if statement will be `string`",
      "TypeScript will compile without errors and the inferred type of user inside the if statement will be `number`",
      "TypeScript will raise an error because the predicate `value is string` contradicts `typeof value === 'number'`",
    ],
    correct: 1,
  },
  {
    title:
      "What will TypeScript do in the following scenario with a faulty assertion function?",
    code: QuestionSevenCode,
    options: [
      "TypeScript will raise an error because `typeof value !== 'number''` contradicts the assertion 'asserts value is string'",
      "TypeScript will compile without errors and the inferred type of `user` after the function call will be string",
      "TypeScript will raise an error because after the function call `user` type is `never`, so it's not possible to use `toLowerCase()`",
      "TypeScript will raise an error because `asserts value is string` contradicts `typeof value !== 'number'`",
    ],
    correct: 2,
  },
  {
    title: "What will TypeScript infer for the type of `UserWithoutName`?",
    code: QuestionEightCode,
    options: [
      "TypeScript won't raise any errors.",
      "TypeScript will raise an error saying that 'number' is not assignable to 'string'.",
      "TypeScript will raise an error saying that 'Logger' expects a method, but you are passing a function.",
      "TypeScript will raise an error saying that the 'greeting' function is not assignable to 'log' because of its parameters.",
    ],
    correct: 0,
  },
] as const;
