"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GithubIcon } from "./icons/github";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="items-center justify-center w-full flex flex-col gap-1 pb-6 mt-4 2xl:mt-0 px-px"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex items-center gap-2"
      >
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
        <Link
          href="https://github.com/alvseven/tsisweird"
          target="_blank"
          className="z-50"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <GithubIcon />
          </motion.div>
        </Link>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="text-center font-roboto-mono text-sm"
      >
        This site was inspired in&nbsp;
        <Link
          href="https://jsisweird.com"
          target="_blank"
          className="text-orange-600 brightness-150"
        >
          jsisweird
        </Link>
        &nbsp;{":)"}
      </motion.p>
    </motion.footer>
  );
}
