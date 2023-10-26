/**
 * Module Imports
 */
/** Components */
import {
	AdvancedImage,
	Button,
	Carousel,
	Counter,
	ExperienceCard,
	Heading,
	Section,
	SectionBody,
	SectionFooter,
	SectionHeader,
	Separator,
	Subheading,
	Text,
} from '@/components';
/** Contexts */
import { useIsDesktopContext } from '@/contexts';
/** Hooks */
import { useFade, useLoaded } from '@/hooks';
/** Types */
import { Experience, Project } from '@/types';
/** Material UI */
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box } from '@mui/material';
/** Clsx */
import clsx from 'clsx';
/** React */
import React from 'react';
/** React Intersection */
import { InView } from 'react-intersection-observer';

/**
 * Interface Declarations
 */
interface AboutMeProps {
	data: {
		experiences: Experience[];
		project_collaborations: Project[];
	};
}

interface ProjectContributionProps {
	data: Project[];
}

interface ExperiencesProps {
	data: Experience[];
}

/**
 * Components
 */
const AboutMe = ({ data }: AboutMeProps): React.JSX.Element => (
	<Section id='about-me' className='flex-col'>
		<Header />
		<SectionBody id='about-me__body' direction='col'>
			<GetToKnowMe />
			<ProjectContribution data={data.project_collaborations} />
			<Experiences data={data.experiences} />
		</SectionBody>
		<Footer />
	</Section>
);

export default AboutMe;

const Header = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded = useLoaded({ inView });
	const shouldFade = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx(shouldFade && 'fade-in-start')} ref={ref}>
					<SectionHeader id='about-me__header' data-fade='1'>
						<Heading>About Me</Heading>
					</SectionHeader>
				</div>
			)}
		</InView>
	);
};

const GetToKnowMe = (): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx(shouldFade && 'fade-in-start')} ref={ref}>
					<Box className='grid grid-cols-1 gap-16 lg:grid-cols-3'>
						<Box className='order-2 col-span-1 flex flex-col gap-8 lg:order-1 lg:col-span-2'>
							<Text className='font-bold text-green-accent' data-fade={isDesktop ? '1' : '2'}>
								Get To Know Me
							</Text>
							<Box className='flex flex-col gap-4'>
								<Subheading className='text-wrap-balance' data-fade={isDesktop ? '1' : '3'}>
									Building the <span className='text-green-accent'>future</span>,<br />
									one line of <span className='text-green-accent'>code</span> at a time
								</Subheading>
								<Text
									className='text-wrap-balance leading-7 lg:leading-8'
									data-fade={isDesktop ? '1' : '4'}
								>
									Highly dedicated, motivated, creative, and innovative problem solver with a good
									sense of design. Excellent working in a team or independently. Fast learner and
									quick to adapt. Passionate in solving problems through software development.
								</Text>
							</Box>
						</Box>
						<Box className='order-1 col-span-1 flex items-end lg:order-2' data-fade='1'>
							<AdvancedImage
								wrapperClassName='relative min-h-[256px] w-full'
								variant='next'
								src='https://res.cloudinary.com/drahmssud/image/upload/v1697474891/developer_activity_bro_ef610482e5.svg'
								fallback='data:image/webp;base64,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'
								format='svg'
								fill
								alt='Developer Activity'
								skeleton={{
									use: true,
									height: 256,
									width: 256,
								}}
							/>
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
};

const ProjectContribution = ({ data }: ProjectContributionProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });
	const isDesktop: boolean = useIsDesktopContext();

	const companies: string[] = [];
	const projectContributions: Project[] = data.filter((project) => {
		project.attributes.institution &&
			!companies.includes(project.attributes.institution.data.attributes.name) &&
			companies.push(project.attributes.institution.data.attributes.name);

		return project.attributes.type === 'collaborative';
	});

	const handleRedirectToProject = (url: string): void => {
		window.open(url, '_blank');
	};

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx(shouldFade && 'fade-in-start')} ref={ref}>
					<Box className='grid grid-cols-1 gap-16 lg:grid-cols-3'>
						<Box className='col-span-1 flex items-end' data-fade='1'>
							<AdvancedImage
								wrapperClassName='relative min-h-[256px] w-full'
								variant='next'
								src='https://res.cloudinary.com/drahmssud/image/upload/v1697510090/open_source_bro_0743c4a6a2.svg'
								fallback='data:image/webp;base64,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'
								format='svg'
								fill
								alt='Developer Activity'
								skeleton={{
									use: true,
									height: 256,
									width: 256,
								}}
							/>
						</Box>
						<Box className='col-span-1 flex flex-col gap-8 lg:col-span-2'>
							<Text className='font-bold text-green-accent' data-fade={isDesktop ? '1' : '2'}>
								Project Contribution
							</Text>
							<Box className='flex flex-col gap-4'>
								<Box className='flex flex-row gap-6' data-fade={isDesktop ? '1' : '3'}>
									<Counter count={projectContributions.length} label='Projects' />
									<Counter count={companies.length} label='Companies' />
								</Box>
								<Box className='flex flex-col gap-4'>
									<Text className='leading-7 lg:leading-8' data-fade={isDesktop ? '1' : '4'}>
										Contributed in several project across multiple companies such as:
									</Text>
									<Box className='flex flex-row gap-6' data-fade={isDesktop ? '1' : '5'}>
										<Button
											className='animate animate-scale-up cursor-alias bg-white text-black'
											startIcon={<OpenInNewIcon />}
											variant='contained'
											onClick={() => handleRedirectToProject('https://medbiz.id/')}
											data-umami-event='Project Contribution-Link: Medbiz'
											data-umami-event-type='link'
										>
											medbiz.id
										</Button>
										<Button
											className='animate animate-scale-up cursor-alias bg-white text-black'
											startIcon={<OpenInNewIcon />}
											variant='contained'
											onClick={() => handleRedirectToProject('https://www.jict.co.id/')}
											data-umami-event='Project Contribution-Link: JICT'
											data-umami-event-type='link'
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
};

const Experiences = ({ data }: ExperiencesProps): React.JSX.Element => {
	const [inView, setInView] = React.useState<boolean>(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx(shouldFade && 'fade-in-start')} ref={ref}>
					<Box className='flex flex-col gap-12'>
						<Text className='font-bold text-green-accent' data-fade='1'>
							Experiences
						</Text>
						<Box className='flex flex-col items-center justify-between lg:hidden' data-fade='2'>
							<Box className='w-full'>
								<Carousel options={{ align: 'center' }} useDot={true}>
									{data.map((experience, index) => (
										<Box
											key={index}
											className='card-container flex-[0_0_100%] md:flex-[0_0_46.5%] lg:flex-[0_0_48.5%]'
										>
											<ExperienceCard data={experience} />
										</Box>
									))}
								</Carousel>
							</Box>
						</Box>
						<Box className='hidden lg:grid lg:grid-cols-2 lg:gap-8' data-fade='2'>
							{data.map((experience, index) => (
								<ExperienceCard key={index} data={experience} />
							))}
						</Box>
					</Box>
				</div>
			)}
		</InView>
	);
};

const Footer = (): React.JSX.Element => {
	const [inView, setInView] = React.useState(false);

	const isLoaded: boolean = useLoaded({ inView });
	const shouldFade: boolean = useFade({ inView, isLoaded });

	const handleNavigate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string): void => {
		e.preventDefault();

		const element = document.getElementById(id);
		element?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<InView onChange={setInView}>
			{({ ref }) => (
				<div className={clsx(shouldFade && 'fade-in-start')} ref={ref}>
					<SectionFooter
						id='about-me__footer'
						className='justify-between'
						direction='row'
						data-fade='1'
						gap={16}
					>
						<Separator className='hidden lg:flex lg:flex-1' />
						<Button
							className='w-full border-white font-medium text-white hover:bg-white hover:text-black lg:max-w-[13.5rem]'
							variant='outlined'
							onClick={(e) => handleNavigate(e, 'hire-me')}
						>
							Get In Touch
						</Button>
					</SectionFooter>
				</div>
			)}
		</InView>
	);
};
