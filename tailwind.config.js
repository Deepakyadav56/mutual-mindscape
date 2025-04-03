
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'Inter', 'sans-serif'],
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
        // Groww app colors
        "app-white": "#FFFFFF",
        "app-off-white": "#F9FAFB",
        "app-light-gray": "#F3F4F6",
        "app-navy": "#121212",
        "app-dark-blue": "#1e1e1e",
        "app-card-hover": "#2d2d2d",
        "app-green": "#00d09c",
        "app-light-green": "#e5f8f4",
        "app-gray-900": "#44475b",
        "app-light-blue": "#EDF8FF",
        "app-primary-blue": "#5367FF",
        "app-charcoal": "#44475b",
        "app-mint": "#e3f3e7",
        "app-light-mint": "#e9f9f7",
        "app-gray-50": "#F9FAFB",
        "app-gray-100": "#F3F4F6",
        "app-gray-200": "#E5E7EB",
        "app-gray-300": "#D1D5DB",
        "app-gray-400": "#9CA3AF",
        "app-gray-500": "#6B7280",
        "app-gray-600": "#4B5563",
        "app-gray-700": "#374151",
        "app-gray-800": "#1F2937",
        "app-primary-green": "#00D09C",
        "app-secondary-green": "#10B981",
        "app-primary-purple": "#8250DF",
        "app-light-purple": "#F2EBFF",
        "app-amber": "#F59E0B",
        "app-light-amber": "#FEF3C7",
        "app-red": "#EF4444",
        "app-light-red": "#FEE2E2",
        "app-button-green": "#22ad78",
        "app-black": "#232323",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-up": "fade-up 0.4s ease-out",
      },
      boxShadow: {
        "nav": "0 -1px 10px rgba(0, 0, 0, 0.2)",
        "card": "0 4px 12px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 20px rgba(0, 0, 0, 0.08)",
        "button": "0 2px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
