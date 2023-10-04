import UiUxSvg from '@/assets/icon/ui-ux.svg';

import Image from 'next/image';
import { IconProps } from '@/components';

export default function UiUxIcon({ className }: IconProps) {
	return <Image className={className} src={UiUxSvg} alt='UI/UX Icon' />;
}
