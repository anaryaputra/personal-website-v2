import { Link as LinkData } from '@/data/LandingPageLinks';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

import { ComponentPropsWithoutRef, MouseEvent, useState } from 'react';

type NavbarMenuProps = {
	links: LinkData[];
} & ComponentPropsWithoutRef<'div'>;

export default function NavbarMenu({ className, links, ...props }: NavbarMenuProps) {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
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
