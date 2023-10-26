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
/** Material UI */
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
/** Clsx */
import clsx from 'clsx';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
/** React Type Animation */

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
							variant='next'
							src='https://res.cloudinary.com/drahmssud/image/upload/v1697612282/Profile_4c12793d22.png'
							fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAE95JREFUeF7tnYeu5DYMRb3pvffee8///0F677333pMN7gBeOFzKlj3DzePyCHgIss+jkQ6pK4qS/I499dRTxwcKBCBQksAxBKCk3ek0BHYEEAAcAQKFCSAAhY1P1yGAAOADEChMAAEobHy6DgEEAB+AQGECCEBh49N1CCAA+AAEChNAAAobn65DAAHAByBQmAACUNj4dB0CCAA+AIHCBBCAwsan6xBAAPABCBQmgAAUNj5dhwACgA9AoDABBKCw8ek6BBAAfAAChQkgAIWNT9chgADgAxAoTAABKGx8ug4BBAAfgEBhAghAYePTdQggAPgABAoTQAAKG5+uQwABwAcgUJgAAlDY+HQdAggAPgCBwgQQgMLGp+sQQADwAQgUJoAAFDY+XYcAAoAPQKAwAQSgsPHpOgQQAHwAAoUJIACFjU/XIYAA4AMQKEwAAShsfLoOAQQAH4BAYQIIQGHj03UIIAD4AAQKE0AAChufrkMAAcAHIFCYAAJQ2Ph0HQIIAD4AgcIEEIDCxqfrEEAA8AEIFCaAABQ2Pl2HAAKAD0CgMAEEoLDx6ToEEAB8AAKFCSAAhY1P1yGAAOADEChMAAEobHy6DgEEAB+AQGECCEBh49N1CCAA+AAEChNAAAobn65DAAHAByBQmAACUNj4dB0CCAA+AIHCBBCAwsan6xBAAPABCBQmgAAUNj5dhwACgA9AoDABBKCw8ek6BBAAfAAChQkgAIWNT9chgADgAxAoTAABKGx8ug4BBAAfgEBhAghAYePTdQggAPgABAoTQAAKG5+uQwABwAcgUJgAAlDY+HQdAggAPgCBwgQQgMLGp+sQQADwAQgUJoAAFDY+XYcAAoAPQKAwAQSgsPHpOgQQAHwAAoUJIACFjU/XIYAA4AMQKEwAAShsfLoOAQQAH4BAYQIIQGHj03UIIAD4AAQKE0AAChufrkMAAcAHIFCYAAJQ2Ph0HQIIAD4AgcIEEIDCxqfrEEAA8AEIFCaAABQ2Pl2HAAKAD0CgMAEEoLDx6ToEEAB8AAKFCSAAhY1P1yGAAOADEChMAAEobHy6DgEEAB+AQGECCEBh49N1CCAA+AAEChNAAAobn65DAAHAByBQmAACUNj4dB0CCAA+AIHCBBCAwsan6xBAAPABCBQmgAAUNj5dh0B6AbjsssuGCy+8cDjnnHOGs88+e/jjjz+GX375Zfjpp592/z2K5aKLLtq1+YILLhjOOuusXRN/++234Ztvvhl+/vnno9jkg7XpjDPOGK688srhvPPO29lM///777/v+v3jjz/u7HfUyrFjx4ZLL710Z6/zzz9/0P+rnWqz/Eztz1pSCoCc5o477hguueSSnTHmipzqrbfeGv7555/Z52688cbhuuuu22RHDd6XX3558bOXX375cMstt5wY9K0PfPvtt8M777yzWF+mBzTgZTMNoKXy+eefDx999NHSY8P999+/G5RbyldffTW8//77ix+94YYbdn4x52fyLdnr+++/X6zvqD2QTgA0e9599927maO3yEDvvvvu8N133zU/ojolKFvKn3/+ObzwwguzH73nnnuGiy++uLt6zTCvvvrq8Ndff3V/5qg+eO211w433XTTquap/2+88cbs7Proo48uimnrSxVtySda5cwzzxweeuihVfUv1bkKwCl6OJUAKMR/+OGHF2f9FrvXX399F7J55cEHH9yFpVvKkgBo5tPsv7YoxHzttdfWfuxIPa8l2p133rmpTRLu559/vhm9PfHEE5t9YW6warbX4NcSZW35+OOPh88++2ztx/6351MJQGuQjusxhfsymqIE/dgyN1Afe+yxQaq/pSjXoNnaK9dcc81w8803n/QrDW6FjPpRWHzFFVe4EcicaG1p66n8jKI0cbXh8/Hjx3c5D4nxr7/+uhNerbHPPffck5qnqO3tt98+6d9lK9W9tXzxxRfDhx9+6H7ci9bUZvmXlmeyt6K5q6666qRJQ88999xzi0vOre0+9OfSCICcQ6psi9b33tqrtVT45JNPhk8//fSkep588skT/7Y0o68xgicsWt9qnWvL1VdfvcsRTIsGyCuvvLLmK4/Ms1o7K7cyLZrVX3rppUGMbWmJpfovDtMiwbjrrrtO/NOh8iaen2lQS4i9BK0X3SkCUCSQoaQRgNtuu22XPZ4WreEUyrWK1vRa20+Ll7BT1KClxVg0M8ng+xbPoZdCRJvY0oB59tln923K//J5MZ2G0RpISpbOZc1vvfXW3cw6LV9++eXwwQcf/Offrr/++kEJurEsce0F4M3+WobN7c7Ypcih/Ke3zfs8l0YAHnnkkd0231h6Z0a7bPAGlNbn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'
							height={512}
							width={512}
							alt='Profile Anarya'
							priority
							data-fade='1'
						/>
						<Box className='flex flex-col gap-5 text-center lg:text-left'>
							<Heading className='leading-115 lg:text-main-title' data-fade={isDesktop ? '1' : '2'}>
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
									startIcon={<DescriptionIcon />}
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
									startIcon={<DescriptionIcon />}
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
									startIcon={<GitHubIcon />}
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
									startIcon={<LinkedInIcon />}
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
