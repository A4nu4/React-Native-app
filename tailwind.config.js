/** @type {import('tailwindcss').Config} */
module.exports = {
  // MUST include the src/ path if your app folder is inside src
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
