/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1366px",
      },
      colors: {
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: () => ({
        "gradient-app":
          "radial-gradient(circle at top, hsl(214, 47%, 23%) 20%, hsl(237, 49%, 15%))",
        "gradient-scissors": `linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))`,
        "gradient-papper": `linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))`,
        "gradient-rock": `linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))`,
        "gradient-lizard": `linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))`,
        "gradient-spock": `linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))`,
      }),
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
          { lineHeight: "18px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
        sm: [
          "12px",
          { lineHeight: "15px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
        base: [
          "16px",
          { lineHeight: "24px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
        lg: [
          "20px",
          { lineHeight: "22px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
        xl: [
          "32px",
          { lineHeight: "36px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};
