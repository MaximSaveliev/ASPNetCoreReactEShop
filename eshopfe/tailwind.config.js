/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'HelveticaNeueExtended': ['HelveticaNeueExtended', 'extended'],
        'HelveticaNeueRoman': ['HelveticaNeueRoman', 'roman'],
        'HelveticaNeueLight': ['HelveticaNeueLight', 'light'],
        'HelveticaNeueNormal': ['HelveticaNeueNormal', 'normal'],
        'HelveticaNeueMedium': ['HelveticaNeueMedium', 'medium'],
        'HelveticaNeueLarge': ['HelveticaNeueLarge', 'large']
      }
    },
  },
  plugins: [],
}
