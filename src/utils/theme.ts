import { createTheme } from '@mui/material';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	palette: {
		secondary: {
			main: '#90FF01',
		},
	},
	typography: {
		fontFamily: poppins.style.fontFamily,
	},
});
