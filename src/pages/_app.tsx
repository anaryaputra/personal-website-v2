import { IsDesktopProvider } from '@/contexts';

import '@/styles/globals.css';

import { theme } from '@/utils/theme';

import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<IsDesktopProvider>
					<Component className={`${poppins.className}`} {...pageProps} />
				</IsDesktopProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}
