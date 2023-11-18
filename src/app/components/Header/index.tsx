import Image from "next/image";

import Logo from "../../../../public/logo.svg"
import Link from "next/link";

export function Header() {
    return <header className="w-full h-12 flex items-center justify-center p-4 bg-gradient-to-r from-[#04162f] via-[#10132B] to-[#071c3b] shadow-slate-100 shadow-lg drop-shadow-lg">
        <nav className="w-full">
            <ul className="flex items-center justify-center w-full gap-8">
                <li>
                    <h4 className='font-roboto-mono text-sm'>About this project</h4>
                </li>
                <li>
                    <h4 className='font-roboto-mono text-sm'>Who am i</h4>
                </li>
                <li className="absolute right-12">
                    <Link href="https://twitter.com/typescripting" target="_blank">
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