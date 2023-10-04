import PerformanceSvg from '@/assets/icon/performance.svg';

import Image from 'next/image';
import { IconProps } from '@/components';

export default function PerformanceIcon({ className }: IconProps) {
	return <Image className={className} src={PerformanceSvg} alt='Performance Icon' />;
}
