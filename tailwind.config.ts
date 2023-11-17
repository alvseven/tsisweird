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
        "inknut-antiqua": "var(--font-primary)",
        "roboto-mono": "var(--font-secondary)"
      }
    },
  },
  plugins: [],
}
export default config
