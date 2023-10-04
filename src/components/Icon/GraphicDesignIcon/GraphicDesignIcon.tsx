import GraphicDesignSvg from '@/assets/icon/graphic-design.svg';

import Image from 'next/image';
import { IconProps } from '@/components';

export default function GraphicDesignIcon({ className }: IconProps) {
	return <Image className={className} src={GraphicDesignSvg} alt='Graphic Design Icon' />;
}
