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
						variant='next'
						src='https://res.cloudinary.com/drahmssud/image/upload/v1697686286/App_Logo_ddfbc58233.png'
						fallback='data:image/webp;base64,UklGRuQDAABXRUJQVlA4WAoAAAAgAAAAPwAAPwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg9gEAADAPAJ0BKkAAQAA+KRCGQiGhDH3GAAwBQlpABbZKpvIxHo/0n8VdEb/M/yQywL4X/Nvx5/JnYAP51+JeyAfx7+h/jT7i38d5Gvkv/L/jl9AX8S/kH9z/L7+6///wAfqr7B36qm6PRzSosxUTjv3KI69C7wlHR9CebmbweMOENrKR50AA/v6+lI9q/uzf6IE1ksCTSwcfeWbuxRohjP/3Zb/2gHMvy/mzZs+/f0f+NvSxkEmVlDnYYUhr0fp12bpa/waMr3F3/+hamdZwE/7/FvioE4dP1/7bBorf//lMEORiNuZB+LjViX5hVY61b/qOPn+5Jn+CkcI9lt8y/Kx9QDQ6OmlB/Fk/ZdVjo3r493/8Tl//JhXfbuv8igNn8f4V/FU6/Ql0He4n94f//QeJIh65smH9ESFJ7aj8ug7knU60/96qGn//5eybK7fbr/8Npw8oTRgd7yO+QakFbL8gP9xvk6dtWTCAWcKXOYJhCj7CQz8a0p2hGvVKeNVfNOigyxy4KqBWh0BEBuXZT0jvMKu6J/XdCETXuW/+4l3MmDypkStz9GGkYQCnd9ayWanF+bg/ENedUbxCXKt9e8vhV//2vsmLb/5Yd0NZCRM2LQf90yVkg5TQueGc5u1w+Ck/R8wiJTRC0/tn9uhAEMGP/0bOwIiAAAA='
						height={isDesktop ? 64 : 48}
						width={isDesktop ? 64 : 48}
						alt='Anarya Putra Logo'
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
