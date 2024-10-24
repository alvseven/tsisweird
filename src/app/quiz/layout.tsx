import type { Metadata } from "next";
import Image from "next/image";

import { GameProvider } from "./contexts/game";

import Beam from "../../../public/beam.png";
import Grid from "../../../public/grid.png";

export const metadata: Metadata = {
  title: "TypeScript is weird",
  description:
    "A TypeScript quiz where you are going to learn some TypeScript concepts and encounter some weird and perhaps unexpected behaviors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameProvider>
      <main className="flex items-center justify-center w-full min-h-[72vh] sm:min-h-[77vh] xl:min-h-[84vh] bg-[#10132b]">
        <div>
          <Image
            src={Beam}
            alt="beam"
            className="absolute opacity-70 top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
          />
          <Image
            src={Grid}
            alt="grid"
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
          />
        </div>
        {children}
      </main>
    </GameProvider>
  );
}
