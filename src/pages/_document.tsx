/**
 * Module Imports
 */
/** Next */
import { Html, Head, Main, NextScript } from 'next/document';
/** React */
import React from 'react';

/**
 * Component
 */
const Document = (): React.JSX.Element => (
	<Html lang='en'>
		<Head>
			<meta charSet='utf-8' />
			<meta name='author' content='Anarya Putra' />
			<link rel='shortcut icon' href='/favicon.ico' />
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<link rel='manifest' href='/site.webmanifest' />
			<script
				async
				src='https://analytics.anaryaindika.com/script.js'
				data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
