export interface Links {
	links: Link[];
	total_links: number;
}

export interface Link {
	label: string;
	href: string;
}

export const landingPageLinks: Links = {
	links: [
		{
			label: 'Home',
			href: '#home',
		},
		{
			label: 'About Me',
			href: '#about-me',
		},
		{
			label: 'Specialization',
			href: '#specialization',
		},
		{
			label: 'Hire Me',
			href: '#hire-me',
		},
	],
	total_links: 4,
};
