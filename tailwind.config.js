/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
    theme: {
    extend: {},
    container:{
      padding: "10rem",
    }
  },
  plugins: [],
}

