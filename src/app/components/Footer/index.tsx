import Link from "next/link";

export function Footer() {
    return <footer className="absolute flex items-center justify-center w-full bottom-0 pb-4">
        <h3 className="text-center font-roboto-mono text-sm opacity-60">Made with 💙 by <Link href="https://twitter.com/typescripting" target="_blank" className="text-blue-700">Alves</Link></h3>
    </footer>
}