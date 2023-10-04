import { Link as LinkData } from '@/data/LandingPageLinks';

import { Box } from '@mui/material';
import Link from 'next/link';

import { ComponentPropsWithoutRef } from 'react';

type NavbarLinkProps = {
	links: LinkData[];
} & ComponentPropsWithoutRef<'div'>;

export default function NavbarLink({ className, links, ...props }: NavbarLinkProps) {
	return (
		<Box className={className} {...props}>
			{links.map((link, index) => (
				<Link key={`navlink-${index}`} className='transition-colors hover:text-green-accent' href={link.href}>
					{link.label}
				</Link>
			))}
		</Box>
	);
}
