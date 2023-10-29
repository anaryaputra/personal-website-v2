/**
 * Module Imports
 */
/** Components */
import { AdvancedImage, Button, Navlink, Navmenu } from '@/components';
/** Contexts */
import { useIsDesktopContext } from '@/contexts';
/** Data */
import { links } from '@/data';
/** Material UI */
import { AppBar, Container, Toolbar } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const Navbar = (): React.JSX.Element => {
	const isDesktop: boolean = useIsDesktopContext();

	const handleNavigate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string): void => {
		e.preventDefault();

		const element = document.getElementById(id);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<AppBar id='navbar' className='py-4' position='sticky' sx={{ background: '#000' }}>
			<Container className='max-w-[1440px] p-0'>
				<Toolbar className='flex flex-row justify-between p-0'>
					<AdvancedImage
						className='block'
						src={`https://res.cloudinary.com/drahmssud/image/upload/w_${
							isDesktop ? 128 : 96
						}/v1697686286/App_Logo_ddfbc58233.png`}
						fallback={`https://placehold.co/${isDesktop ? 64 : 48}?text=Not+Found`}
						alt='Anarya Putra Logo'
						height={isDesktop ? 64 : 48}
						width={isDesktop ? 64 : 48}
						variant='next'
						skeleton='rectangular'
						wrapper={{
							height: isDesktop ? 64 : 48,
							width: isDesktop ? 64 : 48,
						}}
					/>
					<Navmenu className='lg:hidden' links={links} />
					<Navlink className='hidden gap-4 lg:flex' links={links} />
					<Button
						className='hidden hover:bg-white hover:text-black lg:flex'
						color='inherit'
						variant='outlined'
						onClick={(e) => handleNavigate(e, 'hire-me')}
					>
						Get In Touch
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
