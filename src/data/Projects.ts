export interface Projects {
	projects: Project[];
	total_solo_project: number;
	total_collaboration_project: number;
	total_company: number;
}

export interface Project {
	title: string;
	company?: string;
	url: string;
}

export const projects: Projects = {
	projects: [
		{
			title: 'Personal Website',
			url: 'anaryaindika.com',
		},
		{
			title: 'Personal Website V.2',
			url: 'anaryaindika.com',
		},
		{
			title: 'JICT Company Website',
			company: 'PT. Jakarta International Container Terminal',
			url: 'jict.co.id',
		},
		{
			title: 'JICT Content Management System',
			company: 'PT. Jakarta International Container Terminal',
			url: 'jict.co.id',
		},
		{
			title: 'Medbiz',
			company: 'Sirclo (ICUBE)',
			url: 'medbiz.id',
		},
	],
	total_solo_project: 2,
	total_collaboration_project: 4,
	total_company: 2,
};
