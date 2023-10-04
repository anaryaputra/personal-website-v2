import FrontendSvg from '@/assets/icon/frontend.svg';

import Image from 'next/image';
import { IconProps } from '@/components';

export default function FrontendIcon({ className }: IconProps) {
	return <Image className={className} src={FrontendSvg} alt='Frontend Icon' />;
}
