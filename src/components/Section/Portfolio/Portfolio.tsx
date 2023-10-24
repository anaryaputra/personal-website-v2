/**
 * Module Imports
 */
/** Components */
import { Heading, ProjectCard, Section, SectionBody, SectionHeader, Subheading, Text } from '@/components';
/** Contexts */
import { useIsDesktopContext } from '@/contexts';
/** Hooks */
import { useFade, useLoaded } from '@/hooks';
/** Types */
import { Project } from '@/types';
/** Material UI */
import { Box } from '@mui/material';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';

/**
 * Interface Declarations
 */
interface PortfolioProps {
	data: Project[];
}

/**
 * Components
 */
const Portfolio = ({ data }: PortfolioProps): React.JSX.Element => (
	<Section id='portfolio' className='flex-col'>
		<Header />
		<SectionBody id='portfolio__body' direction='col'>
			<CollaborativeWorks data={data} />
			<SoloWorks data={data} />
		</SectionBody>
	</Section>
);

export default Portfolio;

const Header = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<SectionHeader id='portfolio__header' className='items-middle'>
						<Heading data-fade='1'>
							<span className='text-green-accent'>Featured</span> Works
						</Heading>
						<Text className='text-wrap-balance text-xl font-medium' data-fade={isDesktop ? '1' : '2'}>
							{'Dive into a collections of '}
							<span className='text-green-accent'>featured</span>
							{" works I've done "}
							<span className='text-green-accent'>collaboratively</span>
							{' and '}
							<span className='text-green-accent'>personally</span>
						</Text>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
};

const CollaborativeWorks = ({ data }: PortfolioProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	const collaborativeProjects: Project[] = data.filter((project) => project.attributes.type === 'collaborative');

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Box className='grid grid-cols-1 gap-12 lg:grid-cols-3' dir='rtl' data-fade='2'>
							<Box className='col-span-1 flex flex-col gap-1 lg:gap-2' dir='ltr'>
								<Subheading data-fade='1'>
									<span className='text-green-accent'>Collaborative</span>
									<br />
									Works
								</Subheading>
								<Text
									className='text-wrap-balance text-base font-medium lg:text-lg'
									data-fade={isDesktop ? '1' : '2'}
								>
									<span className='text-green-accent'>Collaborative</span> projects I was involved in
								</Text>
							</Box>
							<Box
								className='col-span-1 grid grid-cols-1 gap-5 lg:col-span-2 lg:grid-cols-2'
								dir='ltr'
								data-fade={isDesktop ? '1' : '3'}
							>
								{collaborativeProjects.map((project, index) => (
									<ProjectCard key={`collaborative-work-${index}`} data={project} />
								))}
							</Box>
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
};

const SoloWorks = ({ data }: PortfolioProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	const soloProjects: Project[] = data.filter((project) => project.attributes.type === 'solo');

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Box className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
							<Box className='col-span-1 flex flex-col gap-2'>
								<Subheading data-fade='1'>
									<span className='text-green-accent'>Personal</span>
									<br />
									Works
								</Subheading>
								<Text
									className='text-wrap-balance text-base font-semibold lg:text-lg'
									data-fade={isDesktop ? '1' : '2'}
								>
									<span className='text-green-accent'>Personal</span>
									{" projects I've been worked on"}
								</Text>
							</Box>
							<Box
								className='col-span-1 grid grid-cols-1 gap-5 lg:col-span-2 lg:grid-cols-2'
								data-fade={isDesktop ? '1' : '3'}
							>
								{soloProjects.map((project, index) => (
									<ProjectCard key={`solo-work-${index}`} data={project} />
								))}
							</Box>
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
};
