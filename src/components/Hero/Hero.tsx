import Image from 'next/image';

import { Heading, Text } from '@/components';

import profileImg from '@/assets/profile.svg';

export default function Hero() {
	return (
		<div
			id='home'
			className='flex flex-col lg:flex-row h-screen justify-center items-center gap-16 sm:gap-20 w-full'
		>
			<Image className='lg:hidden lg:max-w-xs' src={profileImg} alt='profile image anarya putra' priority />
			<div className='flex flex-col align-middle gap-5'>
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
			</div>
			<Image
				className='hidden lg:block lg:max-w-sm xl:max-w-none'
				src={profileImg}
				alt='profile image anarya putra'
				priority
			/>
		</div>
	);
}
