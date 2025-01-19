"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import Logo from "../../../public/logo.svg";
import AlvesSignature from "../../../public/alves-signature.png";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-16  sticky z-50 flex items-center justify-center p-4 shadow-blue-950 shadow-sm drop-shadow-md"
    >
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full gap-8">
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Link href="/" className="brightness-200 animate-pulse">
              <Image src={Logo} alt="sevenalv logo" height="24" width="36" />
            </Link>
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="sm:left-8 md:left-12"
          >
            <Link href="https://bento.me/alves" target="_blank">
              <Image
                src={AlvesSignature}
                className="max-w-[120px] max-h-[50px]"
                alt="My signature of my name"
              />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}
