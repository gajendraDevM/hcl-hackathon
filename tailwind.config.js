/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        
        'xl':'0 1px 4px -1px rgb(0 0 0 / 15%)'
    
    }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false

  }
}
