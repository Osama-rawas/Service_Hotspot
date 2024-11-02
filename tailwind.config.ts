import type { Config } from "tailwindcss";
import { content } from "flowbite-react/tailwind";
import { plugin } from "flowbite-react/tailwind";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", content()],
  theme: {
    extend: {
      colors: {
        text_black: "#0D141C",
        bg_btn: "#E8EDF5",
        bg_btn_blue: "#2194F2",
        text_nav: "#4A789C",
        text_white: "#F7FAFC",
        text_gray: "#4F7396",
        border_gray: "#CFDEE8",
      },
    },
  },
  plugins: [plugin()],
};
export default config;
