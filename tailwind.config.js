/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "hsl(209, 23%, 22%)",
        "custom--very-dark-blue-bg": "hsl(207, 26%, 17%)",
        "custom-very-dark-blue-text": "hsl(200, 15%, 8%)",
        "custom-dark-gray": "hsl(0, 0%, 52%)",
        "custom-light-gray": "hsl(0, 0%, 98%)",
        "custom-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        "custom-home": "14px",
        "custom-detail": "16px",
      },
    },
  },
  plugins: [],
};
