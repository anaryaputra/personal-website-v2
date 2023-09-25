import { Hero, Navbar } from '@/components';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${poppins.className} p-page`}>
			<Hero />
			<Navbar />
		</main>
	);
}
