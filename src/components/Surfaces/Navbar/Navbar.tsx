import { Link } from '@data/landingPageLinks';

import { Button, Logo, NavbarLink, NavbarMenu } from '@components';

import { AppBar, AppBarProps, Container, Toolbar } from '@mui/material';

type NavbarProps = {
	links?: Link[];
} & AppBarProps;

export function Navbar({ links = [], ...props }: NavbarProps) {
	return (
		<AppBar id='navbar' position='sticky' sx={{ background: '#000' }} {...props}>
			<Container className='max-w-[1440px] p-0'>
				<Toolbar className='flex flex-row justify-between p-0'>
					<Logo className='max-w-[32px] lg:max-w-none' />
					<NavbarMenu className='lg:hidden' links={links} />
					<NavbarLink className='hidden lg:flex gap-4' links={links} />
					<Button
						className='hidden font-medium lg:flex hover:bg-white hover:text-black'
						color='inherit'
						variant='outlined'
					>
						Get In Touch
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
