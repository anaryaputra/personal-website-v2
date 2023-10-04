import AppLogoSvg from '@/assets/logo/app-logo.svg';

import Image from 'next/image';
import { LogoProps } from '@/components';

export default function AppLogo({ className }: LogoProps) {
	return <Image className={className} src={AppLogoSvg} alt='Anarya Putra Logo' />;
}
