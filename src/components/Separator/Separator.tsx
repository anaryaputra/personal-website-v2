/**
 * Module Imports
 */
/** Assets */
import SeparatorSvg from '@/assets/separator.svg';
/** Next */
import Image from 'next/image';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface SeparatorProps {
	className?: string | undefined;
}

/**
 * Component
 */
const Separator = ({ className }: SeparatorProps): React.JSX.Element => (
	<Image className={className} src={SeparatorSvg} alt='Separator' />
);

export default Separator;
