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
	const isDesktop: boolean = useIsDesktopContext();
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
								className='object-contain'
								variant='cloudinary'
								src='https://res.cloudinary.com/drahmssud/image/upload/v1697034906/partnership_bro_956d02c41b.svg'
								fallback={`https://placehold.co/${isDesktop ? 320 : 256}?text=Not+Found`}
								alt='Partnership'
								format='svg'
								height={isDesktop ? 320 : 256}
								width={isDesktop ? 320 : 256}
								skeleton='rectangular'
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

	const date = new Date();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx({ 'fade-in-start': shouldFade })} ref={ref}>
					<SectionFooter className='gap-4' direction='col'>
						<Box className='flex items-center justify-center gap-4' data-fade='1'>
							<DarkTooltip title='Behance anaryaindika'>
								<Link
									className='lg:animate lg:animate-underline cursor-alias hover:scale-125 lg:hover:scale-100'
									href='https://www.behance.net/anaryaindika'
									target='_blank'
									rel='noopener noreferer'
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
									data-umami-event='Footer Link: LinkedIn'
									data-umami-event-type='link'
								>
									<LinkedIn className='lg:hidden' />
									<span className='hidden lg:block'>LinkedIn</span>
								</Link>
							</DarkTooltip>
						</Box>
						<Box className='flex items-center justify-center text-center' data-fade='2'>
							<Link
								className='animate animate-underline cursor-alias'
								href={process.env.NEXT_PUBLIC_UMAMI_SHARE_ANALYTICS_URL}
								target='_blank'
								rel='noopener noreferer'
								data-umami-event='Footer Link: Analytics'
								data-umami-event-type='link'
							>
								Analytics
							</Link>
						</Box>
						<Text className='text-center' data-fade='3'>
							{`© Anarya Putra ${date.getFullYear()}. All Rights Reserved.`}
						</Text>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
};
