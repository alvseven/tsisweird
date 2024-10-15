import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-8 pb-4">
      <h3 className="text-center font-roboto-mono text-sm opacity-80">
        [WIP] Made with 💙 by{" "}
        <Link
          href="https://twitter.com/typescripting"
          target="_blank"
          className="text-blue-700 brightness-150"
        >
          Alves
        </Link>
      </h3>
    </footer>
  );
}
