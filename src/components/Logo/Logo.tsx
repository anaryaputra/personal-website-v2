import LogoSrc from '@/assets/logo.svg';

import Image from 'next/image';

type LogoProps = {
	className?: string;
};

export default function Logo({ className }: LogoProps) {
	return <Image className={className} src={LogoSrc} alt='anarya putra logo' />;
}
