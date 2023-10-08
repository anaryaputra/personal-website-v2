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
						<Heading className='text-center text-4xl font-bold lg:text-right lg:text-6xl' data-fade='1'>
							Portfolio
						</Heading>
						<Heading className='text-center font-medium lg:text-right lg:text-xl' data-fade='2'>
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
						<Box className='flex flex-col'>
							<Heading className='text-base/7 font-bold text-green-accent lg:text-base/8' data-fade='1'>
								Collaborative Works
							</Heading>
							<Heading className='text-base/7 lg:text-base/8' data-fade='1'>
								Collaborative projects I was involved in
							</Heading>
						</Box>
						<Box className='flex w-full flex-row flex-wrap gap-5' data-fade='2'>
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
						<Box className='flex flex-col'>
							<Heading
								className='text-right text-base/7 font-bold text-green-accent lg:text-base/8'
								data-fade='1'
							>
								Solo Works
							</Heading>
							<Heading className='text-right text-base/7 lg:text-base/8' data-fade='1'>
								Personal projects I've been worked on
							</Heading>
						</Box>
						<Box className='flex w-full flex-row-reverse flex-wrap gap-5' data-fade='2'>
							{selectedProjectsData.solo.projects.map((project, index) => (
								<ProjectCard key={`solo-work-${index}`} data={project} />
							))}
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
}
