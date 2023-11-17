import Beam from '../../public/beam.png'
import Image from "next/image";
import { Introduction } from "./components/shared/Introduction";

export default function Home() {
  return (
    <main className='flex w-full relative min-h-screen antialiased overflow-hidden bg-[#10132b]'>
      <Image
        src={Beam}
        alt=""
        className="absolute opacity-80 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <Introduction />
    </main>
  )
}
