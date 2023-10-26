/**
 * Module Imports
 */
/** Types */
import { Link as LinkInterface } from '@/types';
/** Material UI */
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
/** Next */
import Link from 'next/link';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface NavmenuProps extends React.ComponentPropsWithoutRef<'div'> {
	links: LinkInterface[];
}

interface handleNavigateProps {
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
	link: LinkInterface;
}

/**
 * Component
 */
const Navmenu = ({ className, links, ...props }: NavmenuProps): React.JSX.Element => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [openMenu, setOpenMenu] = React.useState<boolean>(false);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorElNav(event.currentTarget);
		setOpenMenu(true);
	};

	const handleCloseNavMenu = (): void => {
		setOpenMenu(false);
	};

	const handleNavigate = ({ e, link }: handleNavigateProps): void => {
		e.preventDefault();

		const element = document.getElementById(link.id);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<Box className={className} {...props}>
			<IconButton
				className='px-0'
				aria-label='page navigation'
				aria-controls='menu-navbar'
				aria-haspopup
				onClick={handleOpenNavMenu}
			>
				<MenuIcon className='text-white' />
			</IconButton>
			<Menu
				id='menu-navbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={openMenu}
				onClose={handleCloseNavMenu}
			>
				{links.map((link, index) => (
					<MenuItem key={`link-mobile-${index}`} onClick={handleCloseNavMenu}>
						<Link
							href='#'
							onClick={(e) => handleNavigate({ e, link })}
							data-umami-event={`Navmenu-Link: ${link.label}`}
							data-umami-event-type='link'
						>
							{link.label}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default Navmenu;
