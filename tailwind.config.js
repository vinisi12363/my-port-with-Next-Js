import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			display: ['Space Grotesk', 'system-ui', 'sans-serif'],
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			/* Blue portfolio theme tokens (light/dark via CSS vars in globals.css) */
  			cbg: 'rgb(var(--c-bg) / <alpha-value>)',
  			'cbg-alt': 'rgb(var(--c-bg-alt) / <alpha-value>)',
  			cborder: 'rgb(var(--c-border) / <alpha-value>)',
  			cborder2: 'rgb(var(--c-border2) / <alpha-value>)',
  			cdim: 'rgb(var(--c-dim) / <alpha-value>)',
  			cmuted: 'rgb(var(--c-muted) / <alpha-value>)',
  			csoft: 'rgb(var(--c-soft) / <alpha-value>)',
  			cheading: 'rgb(var(--c-heading) / <alpha-value>)',
  			cprimary: 'rgb(var(--c-primary) / <alpha-value>)',
  			cprimary2: 'rgb(var(--c-primary2) / <alpha-value>)',
  			cgradfrom: 'rgb(var(--c-grad-from) / <alpha-value>)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  darkMode: ["class", 'class'],
  plugins: [nextui(), require("tailwindcss-animate")],
}
