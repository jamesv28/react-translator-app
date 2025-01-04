/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        notoSansJP: ["Noto Sans JP", "sans-serif"],
      },
      translate: ["active"],
    },
  },
  plugins: [],
};
