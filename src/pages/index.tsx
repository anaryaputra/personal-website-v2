import { Poppins } from 'next/font/google';

import Hero from '@/components/hero';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${poppins.className} p-page`}>
			<Hero />
		</main>
	);
}
