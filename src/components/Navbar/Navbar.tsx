import { Button, Logo, NavbarLink, NavbarMenu } from '@/components';

import { landingPageLinks } from '@/data/landingPageLinks';

import { AppBar, Container, Toolbar } from '@mui/material';

export default function Navbar() {
	return (
		<AppBar position='sticky' sx={{ background: '#000' }}>
			<Container className='max-w-[1180px] p-0'>
				<Toolbar className='flex flex-row justify-between p-0'>
					<Logo className='max-w-[32px] lg:max-w-none' />
					<NavbarMenu className='lg:hidden' links={landingPageLinks.links} />
					<NavbarLink className='hidden lg:flex gap-4' links={landingPageLinks.links} />
					<Button className='hidden lg:flex' color='inherit' variant='outlined'>
						Get In Touch
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
