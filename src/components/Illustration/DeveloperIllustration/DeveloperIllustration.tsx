import DeveloperIllustrationSvg from '@/assets/developer-activity-bro.svg';

import { IllustrationProps } from '@/components';

import Image from 'next/image';

export default function DeveloperIllustration({ className }: IllustrationProps) {
	return <Image className={className} src={DeveloperIllustrationSvg} alt='Developer Illustration' />;
}
