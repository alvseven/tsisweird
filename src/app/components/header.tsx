import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";

export function Header() {
  return (
    <header className="w-full h-14 flex items-center justify-center p-4 bg-gradient-to-r from-[#04162f] via-[#10132B] to-[#071c3b] shadow-blue-950 shadow-sm drop-shadow-lg">
      <nav className="w-full">
        <ul className="flex items-center justify-center w-full gap-8">
          <li className="absolute sm:left-8 md:left-12">
            <Link
              href="https://twitter.com/typescripting"
              target="_blank"
              className="brightness-200 animate-pulse"
            >
              <Image src={Logo} alt="sevenalv logo" height="24" width="36" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
