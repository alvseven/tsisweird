import { Question } from "./question";

export function Quiz() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full relative">
      <Question />
    </div>
  );
}
