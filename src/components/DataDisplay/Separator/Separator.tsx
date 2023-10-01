import SeparatorSvg from '@/assets/separator.svg';

import Image from 'next/image';

export type SeparatorType = {
	className?: string;
};

export const Separator = ({ className }: SeparatorType) => (
	<Image className={className} src={SeparatorSvg} alt='Separator' />
);
