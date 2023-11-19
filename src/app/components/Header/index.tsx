import Image from "next/image";

import Logo from "../../../../public/logo.svg"
import Link from "next/link";
import { SevendevBlueIcon } from "../shared/icons/sevendevBlue";
import { SevendevGreenIcon } from "../shared/icons/sevendevGreen";

export interface HeaderProps {
    isPlaying: boolean
}

export function Header({ isPlaying }: HeaderProps) {
    return <header className="fixed top-0 left-0 right-0 z-50 w-full h-14 flex items-center justify-center p-4 bg-gradient-to-r from-[#04162f] via-[#10132B] to-[#071c3b] shadow-blue-950 shadow-sm drop-shadow-lg">
        <nav className="w-full">
            <ul className="flex items-center justify-center w-full gap-8">
                <li className="absolute sm:right-8 md:right-12">
                    <Link href="https://twitter.com/typescripting" target="_blank" className="brightness-200 animate-blink">
                        <Image
                            src={Logo}
                            alt="sevenalv logo"
                            height="24"
                            width="36"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}