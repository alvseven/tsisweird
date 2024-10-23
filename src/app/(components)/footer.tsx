import Link from "next/link";

export function Footer() {
  return (
    <footer className="items-center justify-center w-full flex flex-col gap-1 pb-6 mt-4 2xl:mt-0 px-px">
      <p className="text-center font-roboto-mono text-sm opacity-80">
        [WIP] Made with 💙 by&nbsp;
        <Link
          href="https://bento.me/alves"
          target="_blank"
          className="text-blue-700 brightness-150"
        >
          Alves
        </Link>
      </p>
      <p className="text-center font-roboto-mono text-sm opacity-80">
        This site was inspired in&nbsp;
        <Link
          href="https://jsisweird.com"
          target="_blank"
          className="text-orange-600 brightness-150"
        >
          jsisweird
        </Link>
        &nbsp;{":)"}
      </p>
    </footer>
  );
}
