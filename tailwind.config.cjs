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
        "gradient-paper": `linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))`,
        "gradient-rock": `linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))`,
        "gradient-lizard": `linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))`,
        "gradient-spock": `linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))`,
        pentagon: "url('./assets/bg-pentagon.svg')",
      }),
      boxShadow: {
        "token-inner": "inset 0px 5px rgb(200, 210, 240)",
        "token-rock": "0px 5px hsl(349, 60%, 35%)",
        "token-paper": "0px 5px hsl(230, 65%, 35%)",
        "token-scissors": "0px 5px hsl(40, 75%, 25%)",
        "token-lizard": "0px 5px hsl(261, 62%, 40%)",
        "token-spock": "0px 5px hsl(189, 58%, 30%)",
        winner:
          "0px 0px 0px 10px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 25px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 35px hsl(0, 0%, 40%, 10% )",
      },
      dropShadow: {
        "hover-rock": "0px 3px 7px hsl(349, 90%, 55%)",
        "hover-paper": "0px 3px 7px hsl(230, 85%, 55%)",
        "hover-scissors": "0px 3px 7px hsl(40, 85%, 45%)",
        "hover-spock": "0px 3px 7px hsl(189, 85%, 45%)",
        "hover-lizard": "0px 3px 7px hsl(260, 85%, 55%)",
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
          { lineHeight: "24px", fontWeight: "600", letterSpacing: "0.1rem" },
        ],
        lg: [
          "20px",
          { lineHeight: "22px", fontWeight: "600", letterSpacing: "0.1rem" },
        ],
        xl: [
          "32px",
          { lineHeight: "36px", fontWeight: "600", letterSpacing: "0.2rem" },
        ],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      keyframes: {
        shine: {
          "0%": {
            boxShadow:
              "0px 0px 0px 10px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 30px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 40px hsl(0, 0%, 40%, 10% )",
            opacity: ".1",
          },
          "50%": {
            boxShadow:
              "0px 0px 0px 30px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 60px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 100px hsl(0, 0%, 40%, 10% )",
            opacity: "1",
          },
          "100%": {
            boxShadow:
              "0px 0px 0px 60px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 115px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 160px hsl(0, 0%, 40%, 10% )",
            opacity: "0",
          },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
