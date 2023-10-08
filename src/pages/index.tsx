import { landingPageLinks } from '@/data/LandingPageLinks';

import { AboutMe, Hero, Navbar, Page, Portfolio, Specialization } from '@/components';

import { Box } from '@mui/material';

import { Poppins } from 'next/font/google';
import Head from 'next/head';

import { Fragment } from 'react';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Anarya Putra</title>
			</Head>
			<Page id='home' className={poppins.className}>
				<Hero />
				<Navbar links={landingPageLinks} />
				<Box className='flex flex-col gap-y-64 py-64'>
					<AboutMe />
					<Specialization />
					<Portfolio />
				</Box>
			</Page>
		</Fragment>
	);
}
