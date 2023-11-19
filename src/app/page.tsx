'use client'

import Beam from '../../public/beam.png'
import Grid from '../../public/grid.png'
import Image from "next/image";
import { Introduction } from "./components/Introduction";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Quiz } from './components/Quiz';

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <Header isPlaying={isPlaying} />
      <main className='flex items-center justify-center w-full relative min-h-screen antialiased overflow-hidden bg-[#10132b]'>
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
  )
}
