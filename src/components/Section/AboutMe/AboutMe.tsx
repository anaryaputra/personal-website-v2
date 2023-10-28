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
						<Box className='order-2 col-span-1 flex flex-col justify-end gap-8 lg:order-1 lg:col-span-2'>
							<Text className='font-bold text-green-accent' data-fade={isDesktop ? '1' : '2'}>
								Get To Know Me
							</Text>
							<Box className='flex flex-col gap-4'>
								<Subheading className='text-wrap-balance' data-fade={isDesktop ? '1' : '3'}>
									Building the <span className='text-green-accent'>future</span>,<br />
									one line of <span className='text-green-accent'>code</span> at a time
								</Subheading>
								<Text className='leading-7 lg:leading-8' data-fade={isDesktop ? '1' : '4'}>
									Highly dedicated, motivated, creative, and innovative problem solver with a good
									sense of design. Excellent working in a team or independently. Fast learner and
									quick to adapt. Passionate in solving problems through software development.
								</Text>
							</Box>
						</Box>
						<Box className='order-1 col-span-1 flex items-end lg:order-2' data-fade='1'>
							<AdvancedImage
								className='object-contain'
								variant='cloudinary'
								src='https://res.cloudinary.com/drahmssud/image/upload/v1697474891/developer_activity_bro_ef610482e5.svg'
								fallback={`https://placehold.co/${isDesktop ? 320 : 256}?text=Not+Found`}
								format='svg'
								fill
								sizes='(min-width: 0px) 80vw, (min-width: 640px) 40vw, (min-width: 768px) 33.333vw, (min-width: 1024px) 31.250vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20.833vw'
								alt='Developer Activity'
								skeleton='rectangular'
								wrapper={{ className: 'min-h-[256px] lg:min-h-[320px]' }}
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
								className='object-contain'
								variant='cloudinary'
								src='https://res.cloudinary.com/drahmssud/image/upload/v1697510090/open_source_bro_0743c4a6a2.svg'
								fallback={`https://placehold.co/${isDesktop ? 320 : 256}?text=Not+Found`}
								format='svg'
								fill
								sizes='(min-width: 0px) 80vw, (min-width: 640px) 40vw, (min-width: 768px) 33.333vw, (min-width: 1024px) 31.250vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20.833vw'
								alt='Developer Activity'
								skeleton='rectangular'
								wrapper={{ className: 'min-h-[256px] lg:min-h-[320px]' }}
							/>
						</Box>
						<Box className='col-span-1 flex flex-col justify-end gap-8 lg:col-span-2'>
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
										Throughout my career, I have contributed in several project across multiple
										companies. Of all the contributions I have made, the contributions I can
										highlight are as follows:
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
						<Separator className='hidden lg:flex lg:w-4/5 lg:flex-1' />
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
