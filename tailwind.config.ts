import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	important: '#__next',
	theme: {
		extend: {
			backgroundColor: {
				'green-accent': '#90FF01',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'green-accent': '#90FF01',
			},
			transitionDuration: {
				'400': '400ms',
			},
			fontSize: {
				'main-title': '7.5938rem',
			},
			lineHeight: {
				'115': '115%',
				'125': '125%',
				'175': '175%',
			},
			transitionDelay: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'900': '900ms',
			},
		},
	},
	plugins: [],
};
export default config;
