import profileImg from '@assets/profile.svg';

import { Heading, Section, Text } from '@components';

import { Box } from '@mui/material';

import Image from 'next/image';

export function Hero() {
	return (
		<Section id='hero' className='flex-col lg:flex-row-reverse lg:justify-between items-center h-screen w-full'>
			<Image className='lg:max-w-sm xl:max-w-none' src={profileImg} alt='profile image anarya putra' priority />
			<Box className='flex flex-col align-middle gap-5'>
				<Heading className='text-6xl xl:text-main-title font-semibold leading-115 text-center lg:text-left'>
					Anarya
					<br />
					Putra
				</Heading>
				<Text className='text-sm lg:text-base leading-175 text-center lg:text-left '>
					Hi, welcome to my personal website.
					<br />
					I'm a <span className='text-green-accent'>software engineer</span> /{' '}
					<span className='text-green-accent'>full stack engineer</span> based in Indonesia.
				</Text>
			</Box>
		</Section>
	);
}
