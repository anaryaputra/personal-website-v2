/**
 * Module Imports
 */
/** Contexts */
import { IsDesktopProvider } from '@/contexts';
/** Styles */
import '@/styles/globals.css';
/** Utils */
import { client, theme } from '@/utils';
/** Apollo */
import { ApolloProvider } from '@apollo/client';
/** Material UI */
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
/** Next */
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

/**
 * Interface, Type, and Var declaration
 */
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

/**
 * Component
 */
const App = ({ Component, pageProps }: AppProps): React.JSX.Element => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<IsDesktopProvider>
				<ApolloProvider client={client}>
					<Component className={`${poppins.className}`} {...pageProps} />
				</ApolloProvider>
			</IsDesktopProvider>
		</ThemeProvider>
	</StyledEngineProvider>
);

export default App;
