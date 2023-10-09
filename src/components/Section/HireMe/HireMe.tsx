import {
	Button,
	DarkTooltip,
	Heading,
	Illustration,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	Text,
} from '@/components';

import { useFade, useLoaded } from '@/hooks';

import { MailOutline } from '@mui/icons-material';
import { Box, Zoom } from '@mui/material';

import clsx from 'clsx';

import Link from 'next/link';

import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export default function HireMe() {
	return (
		<Section id='hire-me' className='flex-col'>
			<Header />
			<Body />
			<Footer />
		</Section>
	);
}

function Header() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionHeader className='items-center'>
						<Heading
							className='text-center text-base font-bold text-green-accent lg:text-base'
							data-fade='1'
						>
							Hire Me
						</Heading>
						<Heading
							className='text-wrap-balance max-w-7xl text-center text-4xl font-bold lg:text-6xl'
							data-fade='2'
						>
							Let's <span className='text-green-accent'>collaborate</span> to create something amazing
						</Heading>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
}

function Body() {
	const [inView, setInView] = useState(false);
	const [isCopied, setIsCopied] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	function handleLeaveCopyEmail() {
		setTimeout(() => setIsCopied(false), 500);
	}

	function handleCopyEmail() {
		navigator.clipboard.writeText('anaryaindikaputra@gmail.com');
		setIsCopied(true);
	}

	function handleSendEmail() {
		window.location.href = 'mailto:anaryaindikaputra@gmail.com';
	}

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionBody className='items-center justify-center align-middle' direction='col'>
						<Box className='flex justify-center' data-fade='1'>
							<Illustration className='max-h-[256px]' variant='partnership' />
						</Box>
						<Box className='flex flex-col items-center justify-center gap-8 align-middle'>
							<Box data-fade='2'>
								<Button
									className='hover:bg-white hover:text-black'
									color='inherit'
									// data-fade='2'
									onClick={handleSendEmail}
									startIcon={<MailOutline />}
									variant='outlined'
								>
									Send me an email
								</Button>
							</Box>
							<DarkTooltip
								placement='bottom-end'
								title={isCopied ? 'Copied' : 'Click to copy'}
								TransitionComponent={Zoom}
							>
								<div>
									<Text
										className='cursor-copy text-sm text-green-accent'
										data-fade='3'
										onMouseLeave={handleLeaveCopyEmail}
										onClick={handleCopyEmail}
									>
										anaryaindikaputra@gmail.com
									</Text>
								</div>
							</DarkTooltip>
						</Box>
					</SectionBody>
				</div>
			)}
		</InView>
	);
}

function Footer() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionFooter className='gap-4' direction='col'>
						<Box className='flex flex-row justify-center gap-4' data-fade='1'>
							<Link
								className='transition-all duration-500 hover:text-green-accent'
								href='https://www.behance.net/anaryaindika'
								target='_blank'
							>
								Behance
							</Link>
							<Link
								className='transition-all duration-500 hover:text-green-accent'
								href='https://dribbble.com/anaryaputra'
								target='_blank'
							>
								Dribbble
							</Link>
							<Link
								className='transition-all duration-500 hover:text-green-accent'
								href='https://github.com/anaryaputra'
								target='_blank'
							>
								GitHub
							</Link>
							<Link
								className='transition-all duration-500 hover:text-green-accent'
								href='https://www.instagram.com/designbyanarya/'
								target='_blank'
							>
								Instagram
							</Link>
							<Link
								className='transition-all duration-500 hover:text-green-accent'
								href='https://www.linkedin.com/in/anarya-putra/'
								target='_blank'
							>
								LinkedIn
							</Link>
						</Box>
						<Text className='text-center text-xs' data-fade='2'>
							© Anarya Putra 2023. All Rights Reserved.
						</Text>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
}
