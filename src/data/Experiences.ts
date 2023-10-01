export interface Experiences {
	experiences: Experience[];
	total_experiences: number;
}

export interface Experience {
	institution: string;
	role: string;
	time_interval: boolean;
	start_date: string;
	end_date?: string;
	description: string[];
	long_description: string[];
	logo: string;
}

export const experiences: Experiences = {
	experiences: [
		{
			institution: 'Brawijaya University',
			role: 'Student',
			time_interval: true,
			start_date: 'Sep 2016',
			end_date: 'Jul 2021',
			description: ['Started studying at Brawijaya University majoring in informatics engineering.'],
			long_description: [
				'Started college at Brawijaya University in 2016 with a major of informatics engineering.',
				'Actively participating in students organization such as Eksekutif Mahasiswa Informatika and students community such as Brawijaya Flag Football.',
				'On final year, took a thesis of implementing progressive web application (PWA) and CodeIgniter together to build a system for listing student competitions.',
			],
			logo: 'brawijaya.png',
		},
		{
			institution: 'PT. JICT',
			role: 'Software Engineer (Intern)',
			time_interval: true,
			start_date: 'Jun 2019',
			end_date: 'Sep 2019',
			description: [
				'Led a team of interns to successfully develop the company website and content management system on time.',
			],
			long_description: [
				'Led a team of interns to successfully develop the company website and content management system on time.',
				'The project resulted in improved time needed for content publication around 83.33% (from average of 3 days to 4 hours).',
			],
			logo: 'jict.png',
		},
		{
			institution: 'PT. JICT',
			role: 'Software Engineer (Project)',
			time_interval: true,
			start_date: 'Dec 2019',
			end_date: 'Mar 2020',
			description: ["Improved functionality of the company's website content management system."],
			long_description: [
				"Improved functionality of the company's website content management system, allowing stakeholders to give approval before a content is published.",
				"Added more content to the company's website that can be managed through the content management system, resulting in a 59.8% improvement in company's website manageable content.",
			],
			logo: 'jict.png',
		},
		{
			institution: 'Sirclo (ICUBE)',
			role: 'Associate Software Engineer',
			time_interval: true,
			start_date: 'Apr 2022',
			end_date: 'Jun 2023',
			description: [
				'Responsible development, day-to-day support, and ongoing maintenance of web based applications',
			],
			long_description: [
				'Develop web applications based on Magento 2 (mainly) or Shopware with strong optimization and high functionality, mainly focused on e-commerce projects.',
				'Responsible for the day-to-day support and ongoing maintenance of web solutions.',
				'Provide assistance to colleagues in finding technical solutions and mentor junior colleagues in myteam.',
			],
			logo: 'icube.jpeg',
		},
	],
	total_experiences: 4,
};
