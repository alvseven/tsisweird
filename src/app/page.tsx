"use client";

import Image from "next/image";
import { useState } from "react";

import Beam from "../../public/beam.png";
import Grid from "../../public/grid.png";

import { Introduction } from "./components/introduction";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Quiz } from "./components/quiz";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Header />
      <main className="flex items-center justify-center w-full min-h-screen antialiased overflow-hidden bg-[#10132b]">
        <Image
          src={Beam}
          alt=""
          className="absolute opacity-70 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width="1308"
        />
        <Image
          src={Grid}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width="1308"
        />
        {isPlaying ? <Quiz /> : <Introduction setIsPlaying={setIsPlaying} />}
      </main>
      <Footer />
    </>
  );
}
