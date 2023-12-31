/**
 * Module Imports
 */
/** Components */
import {
	AdvancedImage,
	Badge,
	Carousel,
	Heading,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	Text,
} from '@/components';
/** Hooks */
import { useFade, useLoaded } from '@/hooks';
/** Types */
import { Specialization, Tech } from '@/types';
/** Material UI */
import { Box, Card, CardContent } from '@mui/material';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';

/**
 * Interface Declarations
 */
interface SpecializationProps {
	data: {
		specializations: Specialization[];
		teches: Tech[];
	};
}

/**
 * Components
 */
const Specialization = ({ data }: SpecializationProps): React.JSX.Element => (
	<Section id='specialization' className='flex-col'>
		<Header />
		<Body data={data} />
		<Footer data={data} />
	</Section>
);

export default Specialization;

const Header = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionHeader id='specialization__header'>
						<Heading className='text-center' data-fade='1'>
							Specialization
						</Heading>
						<Text className='text-wrap-balance text-center text-xl font-medium' data-fade='2'>
							I am a <span className='text-green-accent'>software engineer</span> with a specialization in{' '}
							<span className='text-green-accent'>web dev</span>
						</Text>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
};

const Body = ({ data }: SpecializationProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	const { specializations } = data;

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionBody id='specialization__body' direction='col' data-fade='1'>
						<Box className='flex w-full flex-wrap justify-center gap-x-8 gap-y-16'>
							{specializations.map((specialization, index) => (
								<Card
									key={`specialization-${index}`}
									className='flex min-w-full max-w-[23.25rem] flex-1 bg-transparent text-center text-white md:min-w-[23.25rem]'
								>
									<CardContent className='flex flex-col gap-8'>
										<Box className='flex justify-center'>
											<AdvancedImage
												className='object-contain'
												src={specialization.attributes.icon.data.attributes.url}
												fallback={`https://placehold.co/48?text=Not+Found`}
												alt={specialization.attributes.icon.data.attributes.alternativeText}
												format='svg'
												height={48}
												width={48}
												variant='cloudinary'
												skeleton='rectangular'
												wrapper={{
													height: 48,
													width: 48,
												}}
											/>
										</Box>
										<Box className='flex flex-col gap-2'>
											<Heading className='text-lg font-bold'>
												{specialization.attributes.highlighted_name &&
													specialization.attributes.name.search(
														specialization.attributes.highlighted_name
													) !== -1 && (
														<span className='text-green-accent'>
															{specialization.attributes.highlighted_name}
														</span>
													)}
												{specialization.attributes.highlighted_name &&
													specialization.attributes.highlighted_name.length &&
													` ${specialization.attributes.name.replace(
														specialization.attributes.highlighted_name,
														''
													)}`}
											</Heading>
											<Text className='leading-7 lg:leading-8'>
												{specialization.attributes.description}
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
};

const Footer = ({ data }: SpecializationProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	const { teches } = data;

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionFooter id='specialization__footer' direction='col' data-fade='1'>
						<Box className='flex w-full flex-col gap-4'>
							<Carousel options={{ dragFree: true }}>
								{teches.map((tech, index) => (
									<Badge
										key={`tech-${index}`}
										startIcon={
											<AdvancedImage
												className='h-4 max-h-4'
												src={tech.attributes.logo.data.attributes.url}
												fallback={`https://placehold.co/16?text=Not+Found`}
												alt={tech.attributes.logo.data.attributes.alternativeText}
												variant='next'
												height={16}
												width={16}
												skeleton='rectangular'
												wrapper={{
													height: 16,
													width: 16,
												}}
											/>
										}
									>
										{tech.attributes.name}
									</Badge>
								))}
							</Carousel>
						</Box>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
};
