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
                  
          "accent": "#1FB2A6",
                  
          "neutral": "#333333",
                  
          "base-100": "#F4F5FD",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
}
