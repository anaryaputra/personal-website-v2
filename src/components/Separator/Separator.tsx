import SeparatorSvg from '@/assets/separator.svg';

import Image from 'next/image';

type SeparatorProps = {
	className?: string;
};

export default function Separator({ className }: SeparatorProps) {
	return <Image className={className} src={SeparatorSvg} alt='Separator' />;
}
