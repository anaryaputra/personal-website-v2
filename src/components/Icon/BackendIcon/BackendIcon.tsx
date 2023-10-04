import BackendSvg from '@/assets/icon/backend.svg';

import Image from 'next/image';
import { IconProps } from '@/components';

export default function BackendIcon({ className }: IconProps) {
	return <Image className={className} src={BackendSvg} alt='Backend Icon' />;
}
