import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const firaCode = Fira_Code({ weight: '600', subsets: ['greek'], variable: '--font-primary' })
const robotoMono = Roboto_Mono({
  weight: '600',
  subsets: ['latin-ext'],
  variable: '--font-secondary'
})

export const metadata: Metadata = {
  title: 'Typescript is weird',
  description: 'A TypeScript quiz where you are going to learn some TypeScript concepts and encounter some weird and perhaps unexpected behaviors',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${robotoMono.variable} bg-[#10132B] text-neutral-50 `}>{children}
        <Analytics />
      </body>
    </html>
  )
}
