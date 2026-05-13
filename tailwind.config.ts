import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#020C0E",  // near-black deep ocean base
          2: "#051218",        // section alternating bg
          3: "#081C20",        // deepest nested bg
        },
        surface: {
          DEFAULT: "#0D2228",  // card backgrounds
          2: "#122F38",        // nested elements inside cards
        },
        accent: {
          DEFAULT: "#0ECDB0",  // PRIMARY — cyan-teal
          2: "#5EE7D4",        // SECONDARY — lighter teal highlight
          3: "#F59E0B",        // WARM — amber for status/success contrast
        },
        border: {
          DEFAULT: "rgba(14,205,176,0.08)",   // teal-tinted subtle border
          2: "rgba(14,205,176,0.18)",         // hover/active border
        },
        muted: "#5A8A87",      // muted teal-grey for secondary text
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 4s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.1)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "80px 80px",
      },
    },
  },
  plugins: [],
};

export default config;
