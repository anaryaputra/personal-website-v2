/**
 * Module Imports
 */
/** Components */
import {
	AdvancedImage,
	Behance,
	Button,
	DarkTooltip,
	Dribbble,
	Heading,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	Subheading,
	Text,
} from '@/components';
/** Contexts */
import { useIsDesktopContext } from '@/contexts';
/** Hooks */
import { useFade, useLoaded } from '@/hooks';
/** Material UI */
import { GitHub, Instagram, LinkedIn, MailOutline } from '@mui/icons-material';
import { Box, Zoom } from '@mui/material';
/** clsx */
import clsx from 'clsx';
/** Next */
import Link from 'next/link';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';
/**
 * Components
 */
const HireMe = (): React.JSX.Element => (
	<Section id='hire-me' className='flex-col'>
		<Header />
		<Body />
		<Footer />
	</Section>
);

export default HireMe;

const Header = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionHeader className='items-center'>
						<Subheading className='text-center' data-fade='1'>
							<span className='text-green-accent'>Hire</span> Me
						</Subheading>
						<Heading className='text-wrap-balance max-w-7xl text-center' data-fade='2'>
							{"Let's "}
							<span className='text-green-accent'>collaborate</span>
							{' to create something amazing'}
						</Heading>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
};

const Body = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);
	const [isCopied, setIsCopied] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	function handleLeaveCopyEmail(): void {
		setTimeout(() => setIsCopied(false), 500);
	}

	function handleCopyEmail(): void {
		navigator.clipboard.writeText('anaryaindikaputra@gmail.com');
		setIsCopied(true);
	}

	function handleSendEmail(): void {
		window.location.href = 'mailto:anaryaindikaputra@gmail.com';
	}

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionBody className='items-center justify-center align-middle' direction='col'>
						<Box className='flex justify-center' data-fade='1'>
							<AdvancedImage
								variant='cloudinary'
								src='partnership_bro_956d02c41b'
								fallback='data:image/webp;base64,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'
								format='svg'
								width={256}
								height={256}
								skeleton={{
									use: true,
									height: 256,
									width: 256,
								}}
								alt='Partnership Illustration'
							/>
						</Box>
						<Box className='flex flex-col items-center justify-center gap-8 align-middle'>
							<Box data-fade='2'>
								<Button
									className='hover:bg-white hover:text-black'
									color='inherit'
									onClick={handleSendEmail}
									startIcon={<MailOutline />}
									variant='outlined'
									data-umami-event='Hire Me: Send email'
									data-umami-event-type='action'
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
										className='cursor-copy text-green-accent'
										data-fade='3'
										onMouseLeave={handleLeaveCopyEmail}
										onClick={handleCopyEmail}
										data-umami-event='Hire Me: Copy email'
										data-umami-event-type='action'
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
};

const Footer = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionFooter className='gap-4' direction='col'>
						<Box className='flex items-center justify-center gap-4'>
							<DarkTooltip title='Behance anaryaindika'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://www.behance.net/anaryaindika'
									target='_blank'
									rel='noopener noreferer'
									data-fade='1'
									data-umami-event='Footer Link: Behance'
									data-umami-event-type='link'
								>
									<Behance className='lg:hidden' />
									<span className='hidden lg:block'>Behance</span>
								</Link>
							</DarkTooltip>
							<DarkTooltip title='Dribbble anaryaputra'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://dribbble.com/anaryaputra'
									target='_blank'
									rel='noopener noreferer'
									data-fade={isDesktop ? '1' : '2'}
									data-umami-event='Footer Link: Dribbble'
									data-umami-event-type='link'
								>
									<Dribbble className='lg:hidden' />
									<span className='hidden lg:block'>Dribbble</span>
								</Link>
							</DarkTooltip>
							<DarkTooltip title='GitHub anaryaputra'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://github.com/anaryaputra'
									target='_blank'
									rel='noopener noreferer'
									data-fade={isDesktop ? '1' : '3'}
									data-umami-event='Footer Link: GitHub'
									data-umami-event-type='link'
								>
									<GitHub className='lg:hidden' />
									<span className='hidden lg:block'>GitHub</span>
								</Link>
							</DarkTooltip>
							<DarkTooltip title='Instagram designbyanarya'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://www.instagram.com/designbyanarya/'
									target='_blank'
									rel='noopener noreferer'
									data-fade={isDesktop ? '1' : '4'}
									data-umami-event='Footer Link: Instagram'
									data-umami-event-type='link'
								>
									<Instagram className='lg:hidden' />
									<span className='hidden lg:block'>Instagram</span>
								</Link>
							</DarkTooltip>
							<DarkTooltip title='LinkedIn Anarya Putra'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://www.linkedin.com/in/anarya-putra/'
									target='_blank'
									rel='noopener noreferer'
									data-fade={isDesktop ? '1' : '5'}
									data-umami-event='Footer Link: LinkedIn'
									data-umami-event-type='link'
								>
									<LinkedIn className='lg:hidden' />
									<span className='hidden lg:block'>LinkedIn</span>
								</Link>
							</DarkTooltip>
						</Box>
						<Box className='flex items-center justify-center text-center'>
							<Link
								className='cursor-alias transition-all duration-400 hover:text-green-accent'
								href='https://analytics.anaryaindika.com/share/rLENnYXcQFIccHeZ/Personal%20Website'
								target='_blank'
								rel='noopener noreferer'
								data-fade={isDesktop ? '2' : '6'}
								data-umami-event='Footer Link: Analytics'
								data-umami-event-type='link'
							>
								Analytics
							</Link>
						</Box>
						<Text className='text-center' data-fade={isDesktop ? '3' : '7'}>
							© Anarya Putra 2023. All Rights Reserved.
						</Text>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
};
