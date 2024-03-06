/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: '#403F3F',
        secondary: '#4B5563',
        accentDanger: '#D72050',
        accentDark: '#403F3F',
        textColor: '#706F6F',
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1140px",
      },
    }
  },
  plugins: [require("daisyui")],
}