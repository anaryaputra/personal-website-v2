import { Tech } from '@/data/Tech';

export interface Projects {
	projects: Project[];
	total_data: number;
}

export interface Project {
	title: string;
	company?: string;
	url: string;
	imageUrl: string;
	shortDesc?: string;
	stacks?: Tech[];
}

export interface ProjectContribution {
	selected_project: Project[];
	total_project: number;
	total_company: number;
}

export interface SelectedProjects {
	collaborative: Projects;
	solo: Projects;
}

export const projectContribution: ProjectContribution = {
	selected_project: [
		{
			title: 'Medbiz',
			company: 'Sirclo (ICUBE)',
			url: 'https://medbiz.id',
			imageUrl: '/img/project/medbiz.png',
		},
		{
			title: 'JICT Company Website',
			company: 'PT. Jakarta International Container Terminal',
			url: 'https://www.jict.co.id',
			imageUrl: '/img/project/jict.png',
		},
	],
	total_project: 4,
	total_company: 2,
};

export const selectedProjects: SelectedProjects = {
	collaborative: {
		projects: [
			{
				title: 'Medbiz',
				company: 'PT. Jakarta International Container Terminal',
				url: 'https://medbiz.id',
				imageUrl: '/img/project/medbiz.png',
				shortDesc: 'Medbiz is a B2B pharmaceutical marketplace platform.',
				stacks: [
					{
						name: 'Next',
						code: 'next',
						logoUrl: '/img/logo/next.svg',
					},
					{
						name: 'Adobe Magento',
						code: 'magento',
						logoUrl: '/img/logo/magento.svg',
					},
				],
			},
			{
				title: 'JICT Company Website',
				company: 'PT. Jakarta International Container Terminal',
				url: 'https://www.jict.co.id',
				imageUrl: '/img/project/jict.png',
				stacks: [
					{
						name: 'CodeIgniter',
						code: 'codeigniter',
						logoUrl: '/img/logo/codeigniter.svg',
					},
				],
			},
		],
		total_data: 2,
	},
	solo: {
		projects: [
			{
				title: 'Personal Website',
				url: 'https://anaryaindika.com',
				imageUrl: '/img/project/personal-website.png',
				stacks: [
					{
						name: 'React.js',
						code: 'react',
						logoUrl: '/img/logo/react.svg',
					},
					{
						name: 'SASS',
						code: 'sass',
						logoUrl: '/img/logo/sass.svg',
					},
				],
			},
			{
				title: 'Personal Website V2',
				url: 'https://anaryaindika.com',
				imageUrl: '/img/project/personal-website-v2.png',
				stacks: [
					{
						name: 'Next.js',
						code: 'next',
						logoUrl: '/img/logo/next.svg',
					},
					{
						name: 'Typescript',
						code: 'typescript',
						logoUrl: '/img/logo/typescript.svg',
					},
					{
						name: 'Tailwind CSS',
						code: 'tailwind',
						logoUrl: '/img/logo/tailwind-css.svg',
					},
				],
			},
		],
		total_data: 2,
	},
};
