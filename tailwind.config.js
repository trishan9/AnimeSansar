/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#edf1f5",
        "text-primary": "#516170",
        "text-secondary": "#adc0d2",
        "brand-white": "#fbfbfb",
        "brand-black": "#11161D",
        "state-blue": "#3480ea",
        "state-red": "#ec294b",
        "cool": "#BEE3F9"
      }
    },
  },
  plugins: [],
}
