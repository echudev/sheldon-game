/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
      },
      screens: {
        Desktop: "1366px",
        Mobile: "375px",
      },
      boxShadow: {
        "brand-md": "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
        "brand-lg": "0px 10px 20px rgba(72, 84, 159, 0.25)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        poppins: ["Poppins", "ui-monospace"],
      },
      fontSize: {
        xs: [
          "11px",
          { lineHeight: "18px", fontWeight: "600", letterSpacing: "-0.23px" },
        ],
        sm: [
          "12px",
          { lineHeight: "15px", fontWeight: "600", letterSpacing: "-0.25px" },
        ],
        base: [
          "16px",
          { lineHeight: "24px", fontWeight: "600", letterSpacing: "-0.8px" },
        ],
        lg: [
          "20px",
          { lineHeight: "22px", fontWeight: "600", letterSpacing: "-0.63px" },
        ],
        xl: [
          "32px",
          { lineHeight: "36px", fontWeight: "600", letterSpacing: "-1px" },
        ],
      },
    },
  },
  plugins: [],
};
