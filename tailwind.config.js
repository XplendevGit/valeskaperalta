/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    container_mobil: {
      center: true,
      padding: "10px",
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1440px",
    },
    extend: {
      colors: {
        primario: {
          DEFAULT: "#D2B2C9",
          hover: "#f4ecf2",
        },
        secundario: {
          DEFAULT: "#B7A1BC",
          hover: "#f1ecf2",
        },
        terciario: {
          DEFAULT: "#F1CFD4",
          hover: "#d46d7c",
        },
        apoyo1: {
          DEFAULT: "#EFDCE7",
          hover: "#c683aa",
        },
        apoyo2: {
          DEFAULT: "#F0EEE8",
          hover: "#b0a586",
        },
        fondo: {
          DEFAULT: "#293239",
          hover: "#293239",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}