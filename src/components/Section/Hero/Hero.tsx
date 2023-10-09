import profileImg from '@/assets/profile.svg';

import { Heading, Section, Text } from '@/components';

import { useIsDesktopContext } from '@/contexts';

import { useLoaded } from '@/hooks';

import { Box } from '@mui/material';

import clsx from 'clsx';

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
				<div
					className={clsx({
						'fade-in-start': isLoaded,
					})}
					ref={ref}
				>
					<Section
						className='mx-auto h-screen flex-col items-center justify-center lg:flex-row-reverse lg:justify-between'
						id='hero'
					>
						<Image
							className='max-w-[256px] md:max-w-sm xl:max-w-none'
							data-fade='1'
							src={profileImg}
							alt='Profile Image Anarya Putra'
							priority
						/>
						<Box className='flex flex-col gap-5 align-middle'>
							<Heading
								data-fade={isDesktop ? '1' : '2'}
								className='text-center text-5xl font-semibold leading-115 sm:text-6xl lg:text-left xl:text-main-title'
							>
								Anarya
								<br />
								Putra
							</Heading>
							<Text
								data-fade={isDesktop ? '1' : '3'}
								className='text-center text-sm/7 sm:text-base/7 lg:text-left lg:text-base/8 '
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
