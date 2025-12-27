import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vet-teal': '#004d40',
        'vet-green': '#4caf50',
      },
    },
  },
  plugins: [],
};
export default config;