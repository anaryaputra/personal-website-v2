import PartnershipIllustrationSvg from '@/assets/partnership-bro.svg';

import { IllustrationProps } from '@/components';

import Image from 'next/image';

export default function PartnershipIllustration({ className }: IllustrationProps) {
	return <Image className={className} src={PartnershipIllustrationSvg} alt='Partnership Illustration' />;
}
