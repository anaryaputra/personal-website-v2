import DeveloperCollaborationIllustrationSvg from '@/assets/open-source-bro.svg';

import { IllustrationProps } from '@/components';

import Image from 'next/image';

export default function DeveloperCollaborationIllustration({ className }: IllustrationProps) {
	return (
		<Image
			className={className}
			src={DeveloperCollaborationIllustrationSvg}
			alt='Developer Collaboration Illustration'
		/>
	);
}
