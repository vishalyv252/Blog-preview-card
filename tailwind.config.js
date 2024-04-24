/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "Yellow": "hsl(47, 88%, 63%)",
        "White": "hsl(0, 0%, 100%)",
        "Grey": "hsl(0, 0%, 50%)",
        "Black": "hsl(0, 0%, 7%)"
      },
      fontFamily: {
        "Figtree": ["Figtree", "sans-serif"]
      },
      screens: {
        "Large_Mobile_Device_Size_View": {"max": "426px", "min": "350px"},
        "Medium_Mobile_Device_Size_View": {"max": "350px", "min": "321px"},
        "Small_Mobile_Device_Size_View": {"max": "321px"}
      }
    },
  },
  plugins: [],
}

