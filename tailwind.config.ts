import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "engagement-res": "repeat(auto-fit,minmax(18rem,1fr))",
        "about-mandate-res": "repeat(auto-fit,minmax(30rem,1fr))",
        "about-core-res": "repeat(auto-fit,minmax(28rem,1fr))",
        "home-research-res": "repeat(auto-fit,minmax(18rem,1fr))",
        "home-publication-res": "repeat(auto-fit,minmax(20rem,1fr))",
        "footer-res": "repeat(auto-fit,minmax(8rem,1fr))",
        "mandate-research-res": "repeat(auto-fit,minmax(16rem,1fr))",
        "research-institutes-details-res": "repeat(auto-fit,minmax(14rem,1fr))",
        "mandate-research-technology": "repeat(auto-fit,minmax(16.5rem,1fr))",
        "coordination-report-res": "repeat(auto-fit,minmax(27rem,1fr))",
      },
      backgroundImage: {
        "impact-static-bg": "url('/Images/Homepage/impact-img-static.jpg')",
        "CardPattern": "url('/Images/lands.png')",
        "group":"url('/Images/plantbase.png')",
        "news-cover":"url('/Images/News and Events/NewsAndEventsBanner.png')",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll 30s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      // Removed duplicate backgroundImage property
      },
      screens: {
        'max-1369': {'max': '1369px'},
        'max-md': {'max': '1025px'},
        'max-sm': {'max': '500px'},
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
