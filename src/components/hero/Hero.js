import Image from 'next/image';

import Heading from '@/components/heading';
import Text from '@/components/text';

import profileImg from '@/assets/profile.svg';

export default function Hero() {
	return (
		<div className='flex flex-col lg:flex-row h-screen justify-center items-center gap-16 sm:gap-20 w-full'>
			<Image className='lg:hidden max-w-xs' src={profileImg} alt='profile image anarya putra' priority />
			<div className='flex flex-col align-middle gap-5'>
				<Heading className='text-6xl xl:text-main-title font-semibold leading-115 text-cente lg:text-left'>
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
