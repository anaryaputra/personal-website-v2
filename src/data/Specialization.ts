interface Specializations {
	specializations: Specialization[];
	total_data: number;
}

interface Specialization {
	name: string;
	description: string;
	highlightedName: string;
	iconName: string;
	iconUrl: string;
}

export const specializations: Specializations = {
	specializations: [
		{
			name: 'Frontend Development',
			description:
				'Build a functional, easy to use, and visually stunning website or web application interfaces.',
			highlightedName: 'Frontend',
			iconName: 'frontend',
			iconUrl: '/img/frontend.svg',
		},
		{
			name: 'Backend Development',
			description: 'Build a robust and reliable backend for your website or web application.',
			highlightedName: 'Backend',
			iconName: 'backend',
			iconUrl: '/img/backend.svg',
		},
		{
			name: 'Core Web Vitals Analysis',
			description: 'Improve your Core Web Vitals and boost your website’s user experience and performance.',
			highlightedName: 'Core Web Vitals',
			iconName: 'performance',
			iconUrl: '/img/performance.svg',
		},
		{
			name: 'UI/UX Design',
			description:
				'Design interface and user experience of your website or web application that works and achievable.',
			highlightedName: 'UI/UX',
			iconName: 'ui-ux',
			iconUrl: '/img/ui-ux.svg',
		},
		{
			name: 'Graphic Design',
			description:
				'Design visually stunning component such as logo, icon, or other graphics for your website or web application interface.',
			highlightedName: 'Graphic',
			iconName: 'graphic-design',
			iconUrl: '/img/graphic-design.svg',
		},
	],
	total_data: 5,
};
