import { Navbar, Page } from '@components';

import { landingPageLinks } from '@data/landingPageLinks';

import { AboutMe, Hero } from '@sections';

import { Box } from '@mui/material';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
	return (
		<Page id='home' className={poppins.className}>
			<Hero />
			<Navbar links={landingPageLinks.links} />
			<Box className='flex flex-col py-32'>
				<AboutMe />
			</Box>
		</Page>
	);
}
