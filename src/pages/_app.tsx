import '@/styles/globals.css';

import { theme } from '@/utils/theme';

import { ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component className={`${poppins.className}`} {...pageProps} />
		</ThemeProvider>
	);
}
