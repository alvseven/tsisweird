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
        "fira-code": ["var(--font-primary)", "monospace"],
        "sans": ["var(--font-sans)", "system-ui", "sans-serif"],
        "roboto-mono": ["var(--font-secondary)", "monospace"],
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
