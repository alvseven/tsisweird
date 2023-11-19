import Image from "next/image";

import Logo from "../../../../public/logo.svg"
import Link from "next/link";

export function Header() {
    return <header className="fixed top-0 left-0 right-0 z-50 w-full h-14 flex items-center justify-center p-4 bg-gradient-to-r from-[#04162f] via-[#10132B] to-[#071c3b] shadow-indigo-950 shadow-sm">
        <nav className="w-full">
            <ul className="flex items-center justify-center w-full gap-8">
                <li className="absolute sm:right-8 md:right-12">
                    <Link href="https://twitter.com/typescripting" target="_blank" className="brightness-200 animate-pulse">
                        <Image
                            src={Logo}
                            alt="sevenalv logo"
                            height="20"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}