/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: "#E9EEF5",
        violetish: "#5D41E6",
        ecomgray: "#5C6389",
        cardgray: "#F7FAFF",
        grey: "#9F9F9F"
      }
    },
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
  daisyui: {
    themes: [
    {
      mytheme: {         
          "primary": "#4560E9",
                  
          "secondary": "#626A92",
                  
          "accent": "#E61F88",
                  
          "neutral": "#333333",
                  
          "base-100": "#F4F5FD",
                  
          "info": "#E51E87",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
}
