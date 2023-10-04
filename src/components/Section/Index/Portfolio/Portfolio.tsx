import { Heading, ProjectCard, Section, SectionBody, SectionHeader } from '@/components';
import { selectedProjects as selectedProjectsData } from '@/data/Projects';
import { useFade, useLoaded } from '@/hooks';
import { Box } from '@mui/material';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export default function Portfolio() {
	return (
		<Section id='portfolio' className='flex-col'>
			<Header />
			<SectionBody direction='col'>
				<CollaborativeWorks />
				<SoloWorks />
			</SectionBody>
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
					<SectionHeader>
						<Heading className='text-4xl lg:text-6xl text-center lg:text-right font-bold' data-fade='1'>
							Portfolio
						</Heading>
						<Heading className='lg:text-xl font-medium text-center lg:text-right' data-fade='2'>
							A collection of my selected <span className='text-green-accent'>solo</span> and{' '}
							<span className='text-green-accent'>collaborative works</span> as a{' '}
							<span>software engineer</span>
						</Heading>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
}

function CollaborativeWorks() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Heading className='text-base/7 lg:text-base/8 font-bold text-green-accent' data-fade='1'>
							Collaborative Works
						</Heading>
						<Box className='flex flex-row flex-wrap gap-5 w-full' data-fade='2'>
							{selectedProjectsData.collaborative.projects.map((project, index) => (
								<ProjectCard key={`collaborative-work-${index}`} data={project} />
							))}
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
}

function SoloWorks() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Heading
							className='text-base/7 lg:text-base/8 text-right font-bold text-green-accent'
							data-fade='1'
						>
							Solo Works
						</Heading>
						<Box className='flex flex-row-reverse flex-wrap gap-5 w-full' data-fade='2'>
							{selectedProjectsData.solo.projects.map((project, index) => (
								<ProjectCard key={`collaborative-work-${index}`} data={project} />
							))}
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
}
