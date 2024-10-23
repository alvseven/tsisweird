import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full ">
      <h3 className="text-center font-roboto-mono text-sm opacity-80">
        [WIP] Made with 💙 by&nbsp;
        <Link
          href="https://bento.me/alves"
          target="_blank"
          className="text-blue-700 brightness-150"
        >
          Alves
        </Link>
      </h3>
    </footer>
  );
}
