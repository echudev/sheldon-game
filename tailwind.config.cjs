/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      Desktop: "1366px",
      Mobile: "375px",
    },
    colors: {
      white: "#FFFFFF",
      scissors: {
        DEFAULT: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
      },
      paper: {
        DEFAULT: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
      },
      rock: {
        DEFAULT: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
      },
      lyzard: {
        DEFAULT: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
      },
      spock: {
        DEFAULT: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
      },
      text: {
        DEFAULT: "#FFFFFF",
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
      },
      bg: {
        DEFAULT: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
      },
    },
    boxShadow: {
      "brand-md": "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
      "brand-lg": "0px 10px 20px rgba(72, 84, 159, 0.25)",
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
    fontFamily: {
      sans: [
        "Barlow Semi Condensed",
        "sans-serif",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [],
};
