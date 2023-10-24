/**
 * Module Imports
 */
/** Types */
import { Link as LinkInterface } from '@/types';
/** Material UI */
import { Box } from '@mui/material';
/** Next */
import Link from 'next/link';
/** React */
import React from 'react';

/**
 * Interface & Type Declarations
 */
interface NavlinkProps extends React.ComponentPropsWithoutRef<'div'> {
	links: LinkInterface[];
}

interface handleNavigateProps {
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
	link: LinkInterface;
}

/**
 * Component
 */
const Navlink = ({ className, links, ...props }: NavlinkProps): React.JSX.Element => {
	const handleNavigate = ({ e, link }: handleNavigateProps): void => {
		e.preventDefault();

		const element = document.getElementById(link.id);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<Box className={className} {...props}>
			{links.map((link, index) => (
				<Link
					key={`navlink-${index}`}
					className='transition-colors hover:text-green-accent'
					href='#'
					onClick={(e) => handleNavigate({ e, link })}
				>
					{link.label}
				</Link>
			))}
		</Box>
	);
};

export default Navlink;
