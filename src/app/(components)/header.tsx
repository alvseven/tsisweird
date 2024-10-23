import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";
import AlvesSignature from "../../../public/alves-signature.png";

export function Header() {
  return (
    <header className="w-full h-16  sticky z-50 flex items-center justify-center p-4 shadow-blue-950 shadow-sm drop-shadow-md">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full gap-8">
          <li className="sm:left-8 md:left-12">
            <Link href="https://bento.me/alves" target="_blank">
              <Image
                src={AlvesSignature}
                className="max-w-[120px] max-h-[50px]"
                alt="My signature of my name"
              />
            </Link>
          </li>
          <li>
            <Link href="/" className="brightness-200 animate-pulse">
              <Image src={Logo} alt="sevenalv logo" height="24" width="36" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
