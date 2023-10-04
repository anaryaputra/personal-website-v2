import {
	Button,
	Carousel,
	Counter,
	ExperienceCard,
	Heading,
	Illustration,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	Separator,
	Text,
} from '@/components';

import { useIsDesktopContext } from '@/contexts';

import { experiences as experiencesData } from '@/data/Experiences';
import { projects as projectsData } from '@/data/Projects';

import { useFade, useLoaded } from '@/hooks';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box } from '@mui/material';

import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export default function AboutMe() {
	return (
		<Section id='about-me' className='flex-col'>
			<Header />
			<SectionBody id='about-me__body' direction='col'>
				<GetToKnowMe />
				<ProjectContribution />
				<Experiences />
			</SectionBody>
			<Footer />

			{/* DON'T DELETE */}
			{/* <VerticalTimeline>
				{experiencesData.experiences.map((experience, index) => (
					<VerticalTimelineItem key={index}>
						<VerticalTimelineOppositeContent>
							<Heading className='text-sm lg:text-base text-center font-bold'>
								{experience.start_date}
							</Heading>
						</VerticalTimelineOppositeContent>
						<VerticalTimelineSeparator>
							<VerticalTimelineConnector />
							<VerticalTimelineDot />
						</VerticalTimelineSeparator>
						<VerticalTimelineContent>
							<Box className='w-full flex flex-col gap-6'>
								<Box className='flex flex-col gap-4'>
									<Heading className='text-center font-semibold text-xl'>
										{experience.institution}
									</Heading>
									<Box className='flex flex-col gap-2'>
										<Heading className='text-center font-semibold text-sm'>
											{experience.role}
										</Heading>
										<Text className='text-center text-sm'>
											{experience.time_interval
												? `${experience.start_date} - ${experience.end_date}`
												: experience.start_date}
										</Text>
									</Box>
								</Box>
								<Text className='text-center leading-175'>{experience.description}</Text>
							</Box>
						</VerticalTimelineContent>
					</VerticalTimelineItem>
				))}
			</VerticalTimeline> */}
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
					<SectionHeader id='about-me__header' title='About Me' align='left' data-fade='1' />
				</div>
			)}
		</InView>
	);
}

function GetToKnowMe() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });
	const isDesktop = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col lg:flex-row-reverse gap-12 lg:gap-32'>
						<Box className='flex justify-center lg:justify-end w-full' data-fade='1'>
							<Illustration variant='developer' />
						</Box>
						<Box className='flex flex-col lg:justify-end gap-12 lg:pb-5'>
							<Heading
								className='text-base/7 lg:text-base/8 font-bold text-green-accent'
								data-fade={isDesktop ? '1' : '2'}
							>
								Get To Know Me
							</Heading>
							<Box className='flex flex-col gap-6'>
								<Heading
									className='text-2xl lg:text-3xl leading-125 font-medium'
									data-fade={isDesktop ? '1' : '3'}
								>
									Building the <span className='text-green-accent'>future</span>, one line of{' '}
									<span className='text-green-accent'>code</span> at a time
								</Heading>
								<Text
									className='text-sm/7 sm:text-base/7 lg:text-base/8'
									data-fade={isDesktop ? '1' : '4'}
								>
									Highly dedicated, motivated, creative, and innovative problem solver with a good
									sense of design. Excellent working in a team or independently. Fast learner and
									quick to adapt. Passionate in solving problems through software development.
								</Text>
							</Box>
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
}

function ProjectContribution() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });
	const isDesktop = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
						<Box className='flex justify-center lg:justify-start' data-fade='1'>
							<Illustration variant='developer-collaboration' />
						</Box>
						<Box className='flex flex-col lg:justify-end gap-12'>
							<Heading
								className='text-base/7 lg:text-base/8 font-bold text-green-accent'
								data-fade={isDesktop ? '1' : '2'}
							>
								Project Contribution
							</Heading>
							<Box className='flex flex-col gap-6'>
								<Box className='flex flex-row gap-6' data-fade={isDesktop ? '1' : '3'}>
									<Counter count={projectsData.total_collaboration_project} label='Projects' />
									<Counter count={projectsData.total_company} label='Companies' />
								</Box>
								<Box className='flex flex-col gap-4'>
									<Text
										className='text-sm/7 sm:text-base/7 lg:text-base/8'
										data-fade={isDesktop ? '1' : '4'}
									>
										Contributed in several project across multiple companies such as:
									</Text>
									<Box className='flex flex-row gap-6' data-fade={isDesktop ? '1' : '5'}>
										<Button
											className='bg-white text-black'
											startIcon={<OpenInNewIcon />}
											variant='contained'
										>
											medbiz.id
										</Button>
										<Button
											className='bg-white text-black'
											startIcon={<OpenInNewIcon />}
											variant='contained'
										>
											jict.co.id
										</Button>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
}

function Experiences() {
	const [inView, setInView] = useState(false);
	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={`${shouldFade && 'fade-in-start'}`} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Heading className='text-base/7 lg:text-base/8 font-bold text-green-accent' data-fade='1'>
							Experiences
						</Heading>
						<Box className='flex flex-col items-center justify-between lg:hidden' data-fade='2'>
							<Box className='w-full'>
								<Carousel options={{ align: 'center' }} useDot={true}>
									{experiencesData.experiences.map((experience, index) => (
										<Box
											key={index}
											className='card-container flex-[0_0_100%] md:flex-[0_0_46.5%] lg:flex-[0_0_48.5%]'
										>
											<ExperienceCard {...experience} />
										</Box>
									))}
								</Carousel>
							</Box>
						</Box>
						<Box className='hidden lg:flex lg:flex-1 lg:flex-wrap lg:justify-center lg:gap-8' data-fade='2'>
							{experiencesData.experiences.map((experience, index) => (
								<ExperienceCard key={index} {...experience} />
							))}
						</Box>
					</Box>
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
					<SectionFooter id='about-me__footer' className='justify-between' direction='row' data-fade='1'>
						<Separator className='hidden lg:flex lg:flex-1' />
						<Button
							className='w-full lg:max-w-[13.5rem] border-white font-medium text-white hover:bg-white hover:text-black'
							variant='outlined'
						>
							Get In Touch
						</Button>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
}
