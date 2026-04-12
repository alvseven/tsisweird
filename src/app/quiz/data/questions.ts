import IntroCode from "../mdx/intro.mdx";
import QuestionOneCode from "../mdx/question-one.mdx";
import QuestionTwoCode from "../mdx/question-two.mdx";
import QuestionThreeCode from "../mdx/question-three.mdx";
import QuestionFourCode from "../mdx/question-four.mdx";
import QuestionFiveCode from "../mdx/question-five.mdx";
import QuestionSixCode from "../mdx/question-six.mdx";
import QuestionSevenCode from "../mdx/question-seven.mdx";
import QuestionEightCode from "../mdx/question-eight.mdx";
import QuestionNineCode from "../mdx/question-nine.mdx";
import QuestionTenCode from "../mdx/question-ten.mdx";
import QuestionElevenCode from "../mdx/question-eleven.mdx";
import QuestionTwelveCode from "../mdx/question-twelve.mdx";
import QuestionThirteenCode from "../mdx/question-thirteen.mdx";
import QuestionFourteenCode from "../mdx/question-fourteen.mdx";
import QuestionFifteenCode from "../mdx/question-fifteen.mdx";
import QuestionSixteenCode from "../mdx/question-sixteen.mdx";
import QuestionSeventeenCode from "../mdx/question-seventeen.mdx";
import QuestionEighteenCode from "../mdx/question-eighteen.mdx";
import QuestionNineteenCode from "../mdx/question-nineteen.mdx";

export const questions = [
  {
    title: "What is the type of `Result`?",
    code: IntroCode,
    options: ["'Definitely not'", "any", "'You must be kidding'", "never"],
    correctAnswer: 0,
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    playgroundCode: `type IsJavaGood<T extends boolean> = T extends false\n    ? "Definitely not"\n    : "You must be kidding";\n\ntype Result = IsJavaGood<false>;`,
  },
  {
    title: "What will TypeScript do if you write the code below?",
    code: QuestionOneCode,
    options: [
      "TypeScript won't raise any errors",
      "TypeScript will raise an error saying that 'number' is not assignable to 'string'",
      "TypeScript will raise an error saying that 'Logger' expects a method, but you are passing a function",
      "TypeScript will raise an error saying that the 'greeting' function is not assignable to 'log' because of its parameters",
    ],
    correctAnswer: 0,
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    playgroundCode: `interface Logger {\n  log(param: string | number): void\n};\n\nfunction greeting(name: string) {\n  console.log(\`Hey, \${name.toLowerCase()}, how are you doing?\`)\n};\n\nconst user: Logger = {\n  log: greeting\n};\n\nuser.log(7);`,
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
    correctAnswer: 3,
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    playgroundCode: `type User = {\n  name?: string;\n  readonly age: number;\n  birthdate: Date;\n};\n\ntype StrictOmit<T, K extends keyof T> = { [Key in Exclude<keyof T, K>]: T[Key] };\n\ntype UserWithoutBirthdate = StrictOmit<User, 'birthdate'>;`,
  },
  {
    title: "What's the type of `Result`?",
    code: QuestionThreeCode,
    options: ["number", "string", "number | string", "never"],
    correctAnswer: 2,
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    playgroundCode: `type Literal = 'a' | 'b' | 'c';\n\ntype Narrow<T> = T extends 'a' ? number : string;\n\ntype Result = Narrow<Literal>;`,
  },
  {
    title: "What does TypeScript infer as the return type of this function?",
    code: QuestionFourCode,
    options: ["string", "number", "any", "never"],
    correctAnswer: 1,
    explanation: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    playgroundCode: `function multiply(value: any) { return value * 2; };`,
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
    correctAnswer: 3,
    explanation: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    playgroundCode: `type ExcludeNever<T> = T extends never ? false : true;\n\ntype First = ExcludeNever<never>;\n\ntype Second = ExcludeNever<string | never>;\n\ntype Result = [First, Second];`,
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
    correctAnswer: 1,
    explanation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    playgroundCode: `function isString(value: unknown): value is string {\n  return typeof value === 'number';\n}\n\nconst user = 7;\n\nif (isString(user)) {\n  console.log(\`Hello, \${user.toLowerCase()}!\`)\n}`,
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
    correctAnswer: 2,
    explanation: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    playgroundCode: `function assertIsString(value: unknown): asserts value is string {\n  if (typeof value !== 'number') {\n    throw new Error('Value is not a string');\n  }\n};\n\nconst user = 7;\n\nassertIsString(user);\n\nconsole.log(\`Hello, \${user.toLowerCase()}!\`);`,
  },
  {
    title: "What will TypeScript infer for the type of `UserWithoutName`?",
    code: QuestionEightCode,
    options: [
      "{ name: string; age: number; }",
      "{ age: number; }",
      "TypeScript will raise an error because 'namee' is not a valid key",
      "{ name?: never; age: number; }",
    ],
    correctAnswer: 0,
    explanation: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    playgroundCode: `type User = { name: string; age: number; };\n\ntype UserWithoutName = Omit<User, 'namee'>;`,
  },
  {
    title: "What is the type of `NewUser`?",
    code: QuestionNineCode,
    options: [
      "{ name: string; age: number | string; }",
      "{ name: string; age: number; }",
      "never",
      "{ name: string; age: never; }",
    ],
    correctAnswer: 3,
    explanation: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    playgroundCode: `type User = {\n  name: string;\n  age: number;\n};\n\ntype NewUser = User & { age: string; };`,
  },
  {
    title: "What is the type of `NameType`?",
    code: QuestionTenCode,
    options: ["string", '"Alice"', "{ name: string; age: number; }", "any"],
    correctAnswer: 0,
    explanation: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    playgroundCode: `const user = { name: "Alice", age: 30 };\n\ntype UserType = typeof user;\n\ntype NameType = UserType["name"];`,
  },
  {
    title: "What is the type of `Result`?",
    code: QuestionElevenCode,
    options: [
      "{ value: string; }",
      "{ value: string | number; }",
      "{ value: number; }",
      "never",
    ],
    correctAnswer: 1,
    explanation: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    playgroundCode: `type MakeObject<T, Key extends string> = { [K in Key]: T };\n\ntype Result = MakeObject<string | number, 'value'>;`,
  },
  {
    title: "What is the type of `Keys`?",
    code: QuestionTwelveCode,
    options: [
      '"name" | "id"',
      '"name" | "age" | "id"',
      '"name" | "age?" | "readonly id"',
      "string",
    ],
    correctAnswer: 1,
    explanation: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    playgroundCode: `type User = {\n  name: string;\n  age?: number;\n  readonly id: string;\n};\n\ntype Keys = keyof User;`,
  },
  {
    title: "What is the type of `arr`?",
    code: QuestionThirteenCode,
    options: [
      "[1, 'hello', true]",
      "(number | string | boolean)[]",
      "[number, string, boolean]",
      "any[]",
    ],
    correctAnswer: 1,
    explanation: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    playgroundCode: `const arr = [1, "hello", true];`,
  },
  {
    title: "What is the type of `RedType`?",
    code: QuestionFourteenCode,
    options: [
      "string | number[]",
      "number[]",
      "[number, number, number]",
      "[255, 0, 0]",
    ],
    correctAnswer: 1,
    explanation: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.",
    playgroundCode: `const colors = {\n  red: [255, 0, 0],\n  green: "#00ff00",\n} satisfies Record<string, string | number[]>;\n\ntype RedType = typeof colors.red;`,
  },
  {
    title: "What is the type of `TupleType`?",
    code: QuestionFifteenCode,
    options: [
      "number[]",
      "[1, 2, 3]",
      "readonly [1, 2, 3]",
      "readonly number[]",
    ],
    correctAnswer: 2,
    explanation: "Nulla facilisi. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
    playgroundCode: `const tuple = [1, 2, 3] as const;\n\ntype TupleType = typeof tuple;`,
  },
  {
    title: "What will TypeScript do with the code below?",
    code: QuestionSixteenCode,
    options: [
      "TypeScript will raise an error: Object literal may only specify known properties",
      "TypeScript won't raise any errors",
      "TypeScript will raise an error: Property 'age' does not exist on type 'User'",
      "TypeScript will raise a warning about excess properties",
    ],
    correctAnswer: 1,
    explanation: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    playgroundCode: `type User = { name: string };\n\nconst obj = { name: "Alice", age: 30 };\n\nconst user: User = obj;`,
  },
  {
    title: "What is the type of `Handler`?",
    code: QuestionSeventeenCode,
    options: [
      '"onClick" | "onFocus"',
      '"onCLICK" | "onFOCUS"',
      "string",
      '"onclickOnfocus"',
    ],
    correctAnswer: 0,
    explanation: "Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.",
    playgroundCode: `type Event = "click" | "focus";\n\ntype Handler = \`on\${Capitalize<Event>}\`;`,
  },
  {
    title: "What is the type of `Result`?",
    code: QuestionEighteenCode,
    options: ["string", "string[]", "string[][]", "never"],
    correctAnswer: 1,
    explanation: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.",
    playgroundCode: `type ExtractArrayItem<T> = T extends (infer U)[] ? U : T;\n\ntype Result = ExtractArrayItem<string[][]>;`,
  },
  {
    title: "What is the type of `Result`?",
    code: QuestionNineteenCode,
    options: [
      "string",
      "number",
      "string | number",
      "string & number",
    ],
    correctAnswer: 1,
    explanation: "Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.",
    playgroundCode: `function fn(x: string): string;\nfunction fn(x: number): number;\nfunction fn(x: string | number) { return x; }\n\ntype Result = ReturnType<typeof fn>;`,
  },
];
