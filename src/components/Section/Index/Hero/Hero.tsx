import profileImg from '@/assets/profile.svg';

import { Heading, Section, Text } from '@/components';

import { useIsDesktopContext } from '@/contexts';

import { useLoaded } from '@/hooks';

import { Box } from '@mui/material';

import Image from 'next/image';

import { useState } from 'react';

import { InView } from 'react-intersection-observer';

export default function Hero() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const isDesktop = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div ref={ref}>
					<Section
						id='hero'
						className={`flex-col lg:flex-row-reverse lg:justify-between items-center h-screen w-full ${
							isLoaded && 'fade-in-start'
						}`}
					>
						<Image
							className='max-w-[256px] md:max-w-sm xl:max-w-none'
							src={profileImg}
							alt='profile image anarya putra'
							priority
							data-fade='1'
						/>
						<Box className='flex flex-col align-middle gap-5'>
							<Heading
								className='text-5xl sm:text-6xl xl:text-main-title font-semibold leading-115 text-center lg:text-left'
								data-fade={isDesktop ? '1' : '2'}
							>
								Anarya
								<br />
								Putra
							</Heading>
							<Text
								className='text-sm/7 sm:text-base/7 lg:text-base/8 text-center lg:text-left '
								data-fade={isDesktop ? '1' : '3'}
							>
								Hi, welcome to my personal website.
								<br />
								I'm a <span className='text-green-accent'>software engineer</span> /{' '}
								<span className='text-green-accent'>full stack engineer</span> based in Indonesia.
							</Text>
						</Box>
					</Section>
				</div>
			)}
		</InView>
	);
}
