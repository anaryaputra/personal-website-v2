/**
 * Module Imports
 */
/** Components */
import { AboutMe, Hero, HireMe, Navbar, Page, Portfolio, Specialization as SpecializationSection } from '@/components';
/** Types */
import { Experience, Project, Specialization, Tech } from '@/types';
/** Utils */
import {
	client,
	GET_PROJECT_COLLABORATIONS,
	GET_FEATURED_PROJECTS,
	GET_SPECIALIZATIONS,
	GET_TECHES,
	GET_EXPERIENCES,
} from '@/utils';
/** Material UI */
import { Box } from '@mui/material';
/** Next */
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
/** React */
import React from 'react';

/**
 * Var Declarations
 */
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

/**
 * Component
 */
const Home = ({
	experiences,
	featuredProjects,
	projectCollaborations,
	specializations,
	teches,
}: InferGetServerSidePropsType<typeof getServerSideProps>): React.JSX.Element => (
	<React.Fragment>
		<Head>
			<title>Anarya Putra</title>
			<Script
				async
				src='https://analytics.anaryaindika.com/script.js'
				data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
				data-domains='anaryaindika.com'
			/>
		</Head>
		<Page id='home' className={poppins.className}>
			<Hero />
			<Navbar />
			<Box className='flex flex-col items-center gap-y-64 pb-32 pt-64'>
				<AboutMe data={{ experiences: experiences, project_collaborations: projectCollaborations }} />
				<SpecializationSection data={{ specializations: specializations, teches: teches }} />
				<Portfolio data={featuredProjects} />
				<HireMe />
			</Box>
		</Page>
	</React.Fragment>
);

export default Home;

/**
 * SSR
 */
export const getServerSideProps = (async () => {
	const experiences: Experience[] = (await client.query({ query: GET_EXPERIENCES })).data.experiences.data;
	const projectCollaborations: Project[] = (await client.query({ query: GET_PROJECT_COLLABORATIONS })).data.projects
		.data;
	const specializations: Specialization[] = (await client.query({ query: GET_SPECIALIZATIONS })).data.specializations
		.data;
	const teches: Tech[] = (await client.query({ query: GET_TECHES })).data.teches.data;
	const featuredProjects: Project[] = (await client.query({ query: GET_FEATURED_PROJECTS })).data.projects.data;

	return {
		props: {
			experiences,
			featuredProjects,
			specializations,
			projectCollaborations,
			teches,
		},
	};
}) satisfies GetServerSideProps<{
	experiences: Experience[];
	featuredProjects: Project[];
	projectCollaborations: Project[];
	specializations: Specialization[];
	teches: Tech[];
}>;
