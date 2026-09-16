/** @type {import('tailwindcss').Config} */
module.exports = {
  // YOU MUST ADD 'src/' TO THESE PATHS
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
