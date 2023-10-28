/**
 * Module Imports
 */
/** Components */
import { AdvancedImage, Button, Heading, Section, Text } from '@/components';
/** Contexts */
import { useIsDesktopContext } from '@/contexts';
/** Hooks */
import { useLoaded } from '@/hooks';
/** Utils */
import { openInNewTab } from '@/utils';
/** Clsx */
import clsx from 'clsx';
/** Material UI */
import { Description, GitHub, LinkedIn } from '@mui/icons-material';
import { Box } from '@mui/material';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';
/** React Type Animation */
import { TypeAnimation } from 'react-type-animation';

/**
 * Component
 */
const Hero = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);
	const isLoaded: boolean = useLoaded({ inView });
	const isDesktop: boolean = useIsDesktopContext();

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
						<AdvancedImage
							src='https://res.cloudinary.com/drahmssud/image/upload/v1697612282/Profile_4c12793d22.png'
							fallback={`https://placehold.co/${isDesktop ? 512 : 256}?text=Not+Found`}
							alt='Profile Anarya'
							variant='cloudinary'
							height={1028}
							width={1028}
							wrapper={{ height: isDesktop ? 512 : 256, width: isDesktop ? 512 : 256 }}
							skeleton='rectangular'
							priority
							data-fade='1'
						/>
						<Box className='flex flex-col gap-5 text-center lg:text-left'>
							<Heading className='leading-115 xl:text-main-title' data-fade={isDesktop ? '1' : '2'}>
								Anarya
								<br />
								Putra
							</Heading>
							<Text className='leading-7 lg:leading-8' data-fade={isDesktop ? '1' : '3'}>
								{'Hi, welcome to my personal website.'}
								<br />
								{"I'm a "}
								<TypeAnimation
									className='text-green-accent'
									preRenderFirstString={true}
									sequence={['software engineer', 2000, 'fullstack engineer', 2000]}
									wrapper='span'
									cursor={true}
									repeat={Infinity}
								/>
								{' based in Indonesia.'}
							</Text>

							<Box
								className='flex flex-wrap justify-center gap-x-4 lg:justify-start'
								data-fade={isDesktop ? '1' : '4'}
							>
								<Button
									className='animate animate-scale-up animate-underline min-w-0 cursor-alias whitespace-nowrap px-0 normal-case'
									href='https://docs.google.com/document/d/1Z8lQna6Jn9Xi6-cM7b4vmu5Q0tymOX-nx7zFZRfTVxQ/edit?usp=share_link'
									rel='noopener noreferer'
									variant='text'
									startIcon={<Description />}
									color='inherit'
									onClick={(e) =>
										openInNewTab(
											e,
											'https://docs.google.com/document/d/1Z8lQna6Jn9Xi6-cM7b4vmu5Q0tymOX-nx7zFZRfTVxQ/edit?usp=share_link'
										)
									}
									data-umami-event='Hero-Link: CV'
									data-umami-event-type='link'
								>
									CV
								</Button>
								<Button
									className='animate animate-scale-up animate-underline min-w-0 cursor-alias whitespace-nowrap px-0 normal-case'
									href='https://docs.google.com/document/d/1-MYFQw9ARH5ut542QAUXbW8RoNl6xYl0tl9q16cGvjM/edit?usp=share_link'
									rel='noopener noreferer'
									variant='text'
									startIcon={<Description />}
									color='inherit'
									onClick={(e) =>
										openInNewTab(
											e,
											'https://docs.google.com/document/d/1-MYFQw9ARH5ut542QAUXbW8RoNl6xYl0tl9q16cGvjM/edit?usp=share_link'
										)
									}
									data-umami-event='Hero-Link: Resume'
									data-umami-event-type='link'
								>
									Resume
								</Button>
								<Button
									className='animate animate-scale-up animate-underline min-w-0 cursor-alias whitespace-nowrap px-0 normal-case'
									href='https://github.com/anaryaputra'
									rel='noopener noreferer'
									variant='text'
									startIcon={<GitHub />}
									color='inherit'
									onClick={(e) => openInNewTab(e, 'https://github.com/anaryaputra')}
									data-umami-event='Hero-Link: GitHub'
									data-umami-event-type='link'
								>
									anaryaputra
								</Button>
								<Button
									className='animate animate-scale-up animate-underline min-w-0 cursor-alias whitespace-nowrap px-0 normal-case'
									href='https://www.linkedin.com/in/anarya-putra/'
									rel='noopener noreferer'
									variant='text'
									startIcon={<LinkedIn />}
									color='inherit'
									onClick={(e) => openInNewTab(e, 'https://www.linkedin.com/in/anarya-putra/')}
									data-umami-event='Hero-Link: LinkedIn'
									data-umami-event-type='link'
								>
									Anarya Putra
								</Button>
							</Box>
						</Box>
					</Section>
				</div>
			)}
		</InView>
	);
};

export default Hero;
