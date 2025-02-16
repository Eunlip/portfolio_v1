import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				gray: 'var(--color-text-gray)',
				secondary: 'var(--color-text-secondary)',
				emerald: {
					100: '#97F8C2',
					200: '#53CB9D',
					300: '#67C592',
				},
				point: '#00FF9D',
				stroke: '#54A578',
				line: '#292929',
			},
			backgroundColor: {
				'accent': '#399261',
				'dark-gray': '#292929',
				'card': 'var(--background-card)',
			},
			fontFamily: {
				body: ['Lato', 'sans-serif'],
				mochiy: 'var(--font-mochiy)',
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
} satisfies Config;
