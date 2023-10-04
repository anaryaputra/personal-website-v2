// export interface Projects {
// 	projects: Project[];
// 	total_solo_project: number;
// 	total_collaboration_project: number;
// 	total_company: number;
// }

// export interface Project {
// 	title: string;
// 	company?: string;
// 	url: string;
// }

export interface Projects {
	projects: Project[];
	total_data: number;
}

export interface Project {
	title: string;
	company?: string;
	url: string;
	imageUrl: string;
}

export interface ProjectContribution {
	selected_project: Project[];
	total_project: number;
	total_company: number;
}

export interface SelectedProjects {
	solo: Projects;
	collaborative: Projects;
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
	solo: {
		projects: [
			{
				title: 'Personal Website',
				url: 'https://anaryaindika.com',
				imageUrl: '/img/project/personal-website.png',
			},
			{
				title: 'Personal Website V2',
				url: 'https://anaryaindika.com',
				imageUrl: '/img/project/personal-website-v2.png',
			},
		],
		total_data: 2,
	},
	collaborative: {
		projects: [
			{
				title: 'Medbiz',
				company: 'PT. Jakarta International Container Terminal',
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
		total_data: 2,
	},
};
