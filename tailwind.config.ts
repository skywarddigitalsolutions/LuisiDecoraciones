import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marron: "#47382f",
        beige: "#ede2c7",
        crema: "#f1f1f1",
        gris: "#272727",
        marronclaro: "#4f4940"
      }
    },
  },
  plugins: [],
};
export default config;
