/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '-3xl': { max: '1600px' },
      '-2xl': { max: '1535px' },
      '-xl': { max: '1200px' },
      '-lg': { max: '1100px' },
      '-2md': { max: '987px' },
      '-md': { max: '767px' },
      '-sm': { max: '640px' },
      'sm': '641px',
      'md': '768px',
      '2md': '988px',
      'lg': '1101px',
      'xl': '1201px',
      '2xl': '1536px',
      '3xl': '1601px',
    },
    extend: {

    },
    fontFamily: {
      trap: ["trap"],
      trapBlack: ["trap-black"],
      trapBold: ["trap-bold"],
      trapReg: ["trap"],
      trapSemibold: ["trap-semibold"],
      trapMedium: ["trap-medium"],
      trapLight: ["trap-light"],
    },
  },
  plugins: [],
});

