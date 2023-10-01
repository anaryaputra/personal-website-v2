import { Link as LinkData } from '@data/landingPageLinks';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';

import Link from 'next/link';
import { MouseEvent, useState } from 'react';

type NavbarMenuProps = {
	className?: string;
	links: LinkData[];
};

export function NavbarMenu({ className, links }: NavbarMenuProps) {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box className={className}>
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
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
			>
				{links.map((link, index) => (
					<MenuItem key={index} onClick={handleCloseNavMenu}>
						<Link href={link.href}>{link.label}</Link>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
