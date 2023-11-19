import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "var(--font-primary)",
        "roboto-mono": "var(--font-secondary)"
      },
      keyframes: {
        blink: {
          '0%': { opacity: "0" },
          '50%': { opacity: "0.6" },
          '100%': { opacity: "0" },
        },
      },
      animation: {
        blink: 'blink 1.5s infinite', // Ajuste a duração conforme necessário
      },
    },
  },
  plugins: [],
}
export default config
