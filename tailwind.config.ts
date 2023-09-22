import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'green-accent': '#90FF01',
			},
			fontSize: {
				'main-title': '7.5938rem',
			},
			lineHeight: {
				'115': '115%',
				'175': '175%',
			},
			padding: {
				page: '0 9.027%',
			},
		},
	},
	plugins: [],
};
export default config;
