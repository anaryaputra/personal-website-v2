import {
	Carousel,
	Heading,
	Icon,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	TechBadge,
	Text,
} from '@/components';

import { specializations as specializationsData } from '@/data/Specialization';
import { techs as techsData } from '@/data/Tech';

import { useFade, useLoaded } from '@/hooks';

import { Box, Card, CardContent } from '@mui/material';

import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export default function Specialization() {
	return (
		<Section id='specialization' className='flex-col'>
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
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionHeader id='specialization__header'>
						<Heading className={`text-4xl lg:text-6xl font-bold text-center lg:text-center`} data-fade='1'>
							Specialization
						</Heading>
						<Heading className={`lg:text-xl font-medium text-center lg:text-center`} data-fade='2'>
							I am a <span className='text-green-accent'>software engineer</span> with a specialization in{' '}
							<span className='text-green-accent'>web development</span>
						</Heading>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
}

function Body() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionBody id='specialization__body' direction='col' data-fade='1'>
						<Box className='flex flex-wrap justify-center gap-x-8 gap-y-16 w-full'>
							{specializationsData.specializations.map((specialization, index) => (
								<Card
									key={`specialization-${index}`}
									className='flex flex-1 max-w-[23.25rem] min-w-full md:min-w-[23.25rem] bg-transparent text-center text-white'
								>
									<CardContent className='flex flex-col gap-8'>
										<Box className='flex justify-center'>
											<Icon className='h-12 w-12' variant={specialization.iconName} />
										</Box>
										<Box className='flex flex-col gap-2'>
											<Heading className='text-lg font-bold'>
												{specialization.name.search(specialization.highlightedName) !== -1 && (
													<span className='text-green-accent'>
														{specialization.highlightedName}
													</span>
												)}
												{specialization.name.length > specialization.highlightedName.length &&
													` ${specialization.name.replace(
														specialization.highlightedName,
														''
													)}`}
											</Heading>
											<Text className='text-base/7 lg:text-base/8'>
												{specialization.description}
											</Text>
										</Box>
									</CardContent>
								</Card>
							))}
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
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionFooter id='specialization__footer' direction='col' data-fade='1'>
						<Box className='flex flex-col gap-4 w-full'>
							<Carousel options={{ dragFree: true }}>
								{techsData.techs.map((tech, index) => (
									<Box key={`tech-${index}`} className='flex items-center'>
										<TechBadge data={tech} />
									</Box>
								))}
							</Carousel>
						</Box>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
}
