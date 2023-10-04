import { Links } from '@/data/LandingPageLinks';

import { Button, Logo, NavbarLink, NavbarMenu } from '@/components';

import { AppBar, AppBarProps, Container, Toolbar } from '@mui/material';

type NavbarProps = {
	links?: Links;
} & AppBarProps;

export default function Navbar({ links = { links: [], total_links: 0 }, ...props }: NavbarProps) {
	return (
		<AppBar id='navbar' position='sticky' sx={{ background: '#000' }} {...props}>
			<Container className='max-w-[1440px] p-0'>
				<Toolbar className='flex flex-row justify-between p-0'>
					<Logo className='w-[48px] lg:w-[64px]' variant='app' />
					<NavbarMenu className='lg:hidden' links={links.links} />
					<NavbarLink className='hidden lg:flex gap-4' links={links.links} />
					<Button
						className='hidden lg:flex hover:bg-white hover:text-black'
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
