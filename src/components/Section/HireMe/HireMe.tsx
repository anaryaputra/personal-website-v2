import { Button, DarkTooltip, Heading, Illustration, Section, SectionHeader, Text } from '@/components';
import { MailOutline } from '@mui/icons-material';
import { Box, Zoom } from '@mui/material';
import Link from 'next/link';
import React, { MouseEvent, MouseEventHandler, useRef, useState } from 'react';
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
	return (
		<SectionHeader>
			<Heading className='text-center text-base font-bold text-green-accent lg:text-base'>Hire Me</Heading>
			<Heading className='text-wrap-balance text-center text-4xl font-bold lg:text-6xl'>
				Let's <span className='text-green-accent'>collaborate</span> to create something amazing
			</Heading>
		</SectionHeader>
	);
}

function Body() {
	const [isCopied, setIsCopied] = useState(false);

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
		<Box className='flex flex-col items-center justify-center gap-16 align-middle'>
			<Illustration className='max-h-[256px]' variant='partnership' />
			<Box className='flex flex-col items-center justify-center gap-8 align-middle'>
				<Button
					className='hover:bg-white hover:text-black'
					color='inherit'
					onClick={handleSendEmail}
					startIcon={<MailOutline />}
					variant='outlined'
				>
					Send me an email
				</Button>
				<DarkTooltip
					placement='bottom-end'
					title={isCopied ? 'Copied' : 'Click to copy'}
					TransitionComponent={Zoom}
				>
					<div>
						<Text
							className='cursor-copy text-sm text-green-accent'
							onMouseLeave={handleLeaveCopyEmail}
							onClick={handleCopyEmail}
						>
							anaryaindikaputra@gmail.com
						</Text>
					</div>
				</DarkTooltip>
			</Box>
		</Box>
	);
}

function Footer() {
	return (
		<Box className='flex flex-col gap-4'>
			<Box className='flex flex-row justify-center gap-4'>
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
			<Text className='text-center text-xs'>© Anarya Putra 2023. All Rights Reserved.</Text>
		</Box>
	);
}
