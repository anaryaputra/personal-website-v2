import { Link as LinkData } from '@data/landingPageLinks';

import { Box } from '@mui/material';

import Link from 'next/link';

type NavbarLinkProps = {
	className?: string;
	links: LinkData[];
};

export function NavbarLink({ className, links }: NavbarLinkProps) {
	return (
		<Box className={className}>
			{links.map((link, index) => (
				<Link key={`navlink-${index}`} href={link.href}>
					{link.label}
				</Link>
			))}
		</Box>
	);
}
