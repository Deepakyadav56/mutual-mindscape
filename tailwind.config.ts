import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sf-pro': ['"SF Pro Display"', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				app: {
					white: '#FFFFFF',
					'off-white': '#F9FAFB',
					'light-gray': '#F3F4F6',
					'gray-50': '#F9FAFB',
					'gray-100': '#F3F4F6',
					'gray-200': '#E5E7EB',
					'gray-300': '#D1D5DB',
					'gray-400': '#9CA3AF',
					'gray-500': '#6B7280',
					'gray-600': '#4B5563',
					'gray-700': '#374151',
					'gray-800': '#1F2937',
					'gray-900': '#111827',
					'navy': '#232323',
					'dark-blue': '#1e1e1e',
					'card-hover': '#2d2d2d',
					'light-blue': '#E6F3FF',
					'primary-blue': '#2C5CF6',
					'secondary-blue': '#3B82F6',
					'primary-green': '#22ad78',
					'light-green': '#deebc7',
					'mint': '#e3f3e7',
					'button-green': '#22ad78',
					'black': '#232323',
					'white': '#f2f2f2',
					'light-mint': '#EBF1EE',
					charcoal: '#232323',
					green: '#22ad78'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				finance: {
					primary: '#22ad78',
					secondary: '#232323',
					accent: '#deebc7',
					muted: '#6B7280',
					light: '#e3f3e7',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-up': 'fade-up 0.4s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'pulse-gentle': 'pulse-gentle 2s infinite ease-in-out',
				'scale-in': 'scale-in 0.3s ease-out'
			},
			boxShadow: {
				'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
				'card-hover': '0 8px 20px rgba(0, 0, 0, 0.08)',
				'button': '0 2px 6px rgba(0, 0, 0, 0.1)',
				'nav': '0 -2px 10px rgba(0, 0, 0, 0.05)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
