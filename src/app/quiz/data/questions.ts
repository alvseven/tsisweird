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
    explanation: "When TypeScript evaluates conditional types, it substitutes the type argument and checks the condition. Here, `IsJavaGood<false>` means `T` is `false`. Since `false extends false` is true, the type resolves to the true branch: `'Definitely not'`.",
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
    explanation: "TypeScript allows this due to function parameter bivariance in method signatures. Even though `greeting` accepts only `string`, it can be assigned to `log` which accepts `string | number`. This is unsafe but allowed for practical reasons. When `user.log(7)` is called, it will fail at runtime since `greeting` expects a string.",
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
    explanation: "The custom `StrictOmit` utility type preserves the exact structure but removes the `birthdate` property. However, it doesn't preserve modifiers like `readonly` or optional markers (`?`). The `name` becomes required `string` (not optional), and `readonly` is not preserved on `age`. This is different from TypeScript's built-in utility types that handle modifiers.",
    playgroundCode: `type User = {\n  name?: string;\n  readonly age: number;\n  birthdate: Date;\n};\n\ntype StrictOmit<T, K extends keyof T> = { [Key in Exclude<keyof T, K>]: T[Key] };\n\ntype UserWithoutBirthdate = StrictOmit<User, 'birthdate'>;`,
  },
  {
    title: "What's the type of `Result`?",
    code: QuestionThreeCode,
    options: ["number", "string", "number | string", "never"],
    correctAnswer: 2,
    explanation: "This demonstrates distributive conditional types. When a union type (`'a' | 'b' | 'c'`) is passed to a conditional type where the checked type is a naked type parameter, TypeScript distributes the union: `Narrow<'a'> | Narrow<'b'> | Narrow<'c'>`. Since only `'a'` extends `'a'` (resulting in `number`), and `'b'` and `'c'` don't (resulting in `string`), the final type is `number | string | string`, which simplifies to `number | string`.",
    playgroundCode: `type Literal = 'a' | 'b' | 'c';\n\ntype Narrow<T> = T extends 'a' ? number : string;\n\ntype Result = Narrow<Literal>;`,
  },
  {
    title: "What does TypeScript infer as the return type of this function?",
    code: QuestionFourCode,
    options: ["string", "number", "any", "never"],
    correctAnswer: 1,
    explanation: "Even though the parameter is typed as `any`, TypeScript still infers the return type based on the operation. The expression `value * 2` where one operand is `any` results in `number` (since multiplication always produces a number in TypeScript's type system). This is a gotcha\u2014`any` doesn't always propagate to the return type.",
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
    explanation: "The `never` type has special behavior in conditional types. When `never` is used as a naked type parameter in a conditional type, it's treated as an empty union, and the conditional type distributes over it, resulting in `never` itself. So `ExcludeNever<never>` is `never`, not `false`. However, `string | never` simplifies to just `string`, so `ExcludeNever<string | never>` becomes `ExcludeNever<string>`, which is `true`.",
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
    explanation: "TypeScript trusts your type predicate completely and doesn't validate it against the implementation. Even though the function checks `typeof value === 'number'`, the predicate says `value is string`. Inside the `if` block, TypeScript narrows `user` to `string`, which will cause a runtime error when calling `toLowerCase()` on a number. Type predicates are dangerous when implemented incorrectly!",
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
    explanation: "This is tricky! The assertion says `asserts value is string`, but the implementation checks `typeof value !== 'number'` and throws if false. Since `user` is `7` (a number), the condition `typeof 7 !== 'number'` is false, so the function would throw. TypeScript sees that the function asserts `string` but the value is `number`, creating an impossible state. After the assertion, `user` is narrowed to `never` (the intersection of `number` and `string`), causing the error on `toLowerCase()`.",
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
    explanation: "TypeScript's built-in `Omit` utility type doesn't validate that the key exists in the original type. The typo 'namee' instead of 'name' goes unnoticed, and `Omit` simply returns the original type unchanged. This is a common gotcha\u2014many developers expect type-level validation of keys, but `Omit<T, K>` accepts any `K extends string | number | symbol`, not just `keyof T`.",
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
    explanation: "When you use intersection types with conflicting property types, TypeScript creates a type where that property must satisfy both constraints simultaneously. Since `age` must be both `number` and `string` at the same time (which is impossible), it becomes `never`. The resulting type is `{ name: string; age: never; }`, not `never` itself\u2014only the conflicting property becomes `never`.",
    playgroundCode: `type User = {\n  name: string;\n  age: number;\n};\n\ntype NewUser = User & { age: string; };`,
  },
  {
    title: "What is the type of `NameType`?",
    code: QuestionTenCode,
    options: ["string", '"Alice"', "{ name: string; age: number; }", "any"],
    correctAnswer: 0,
    explanation: "The `typeof` operator captures the type of a value, not the value itself. When we write `const user = { name: 'Alice', age: 30 }`, TypeScript infers the type as `{ name: string; age: number }` (not `{ name: 'Alice'; age: 30 }`). Therefore, `UserType['name']` is `string`, not the literal type `'Alice'`. If you want to preserve literal types, you'd need to use `as const`.",
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
    explanation: "When using mapped types with unions in the key position, TypeScript creates an object type with all the keys from the union. Here, `Key` is `'value'`, so we get `{ value: T }`. Since `T` is `string | number`, the resulting type is `{ value: string | number }`. This is different from distributive conditional types\u2014mapped types don't distribute over unions in the value position unless you use conditional types within the mapped type.",
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
    explanation: "The `keyof` operator extracts all property keys from an object type as a union of string literal types. Importantly, it includes ALL properties regardless of modifiers: optional properties (marked with `?`) and readonly properties are both included in the result. The modifiers themselves are not part of the key names\u2014`keyof User` returns `'name' | 'age' | 'id'`, not `'age?'` or `'readonly id'`. This is because modifiers affect property behavior, not the key itself.",
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
    explanation: "When TypeScript infers the type of an array literal, it widens the literal types to their base types and creates a union. So `[1, 'hello', true]` becomes `(number | string | boolean)[]`, not a tuple `[number, string, boolean]`. If you want a tuple type, you need to either explicitly type it or use `as const` to get `readonly [1, 'hello', true]`.",
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
    explanation: "The `satisfies` operator is powerful because it validates that a value matches a type constraint WITHOUT widening the inferred type. Here, `colors` must satisfy `Record<string, string | number[]>`, but TypeScript still infers the precise type of each property. So `colors.red` is inferred as `number[]` (not widened to `string | number[]`), and `colors.green` is inferred as `string`. This is different from type annotations, which would widen both to the union type.",
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
    explanation: "The `as const` assertion tells TypeScript to infer the narrowest possible type. For arrays, this means: (1) the array becomes `readonly`, (2) the structure becomes a tuple instead of an array, and (3) each element uses its literal type instead of being widened. So `[1, 2, 3] as const` becomes `readonly [1, 2, 3]`, where each position has its specific literal type.",
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
    explanation: "This demonstrates a subtle behavior called 'excess property checking'. TypeScript only performs this check on object literals directly assigned to a typed variable. When you assign through an intermediate variable (`obj`), the excess property checking is bypassed. The assignment `const user: User = obj` succeeds because `obj` is structurally compatible with `User` (it has a `name: string` property). The extra `age` property is simply ignored.",
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
    explanation: "Template literal types combined with intrinsic string manipulation utilities (like `Capitalize`, `Uppercase`, `Lowercase`, `Uncapitalize`) allow you to transform string literal types at the type level. Here, `Capitalize<'click'>` becomes `'Click'`, and when combined with the template literal `on${...}`, we get `'onClick'`. This distributes over the union, resulting in `'onClick' | 'onFocus'`. These utilities are incredibly useful for creating type-safe APIs.",
    playgroundCode: `type Event = "click" | "focus";\n\ntype Handler = \`on\${Capitalize<Event>}\`;`,
  },
  {
    title: "What is the type of `Result`?",
    code: QuestionEighteenCode,
    options: ["string", "string[]", "string[][]", "never"],
    correctAnswer: 1,
    explanation: "The `infer` keyword is used within conditional types to extract and capture type information. The pattern `T extends (infer U)[] ? U : T` checks if `T` is an array and extracts its element type as `U`. When we pass `string[][]`, TypeScript matches it as `(string[])[]`, so `U` becomes `string[]`. The `infer` only unwraps ONE level of the array\u2014it doesn't recursively unwrap nested arrays. To unwrap all levels, you'd need a recursive conditional type.",
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
    explanation: "This is a tricky aspect of function overloads! When you use `ReturnType<typeof fn>` on an overloaded function, TypeScript uses the type of the LAST overload signature in the list, not the first one or the implementation signature. So even though the first overload declares `string`, `ReturnType<typeof fn>` resolves to `number` because that's what the last overload (before the implementation) declares. This is an important detail when working with overloaded functions!",
    playgroundCode: `function fn(x: string): string;\nfunction fn(x: number): number;\nfunction fn(x: string | number) { return x; }\n\ntype Result = ReturnType<typeof fn>;`,
  },
];
