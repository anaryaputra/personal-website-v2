import styles from './card-media.module.scss';

import { Box } from '@mui/material';

import { ComponentPropsWithoutRef } from 'react';

type CardMediaProps = {
	height?: number | string;
	src?: string;
	width?: number | string;
} & ComponentPropsWithoutRef<'div'>;

export default function CardMedia({ children, className, height, src, width, ...props }: CardMediaProps) {
	return children ? (
		children
	) : (
		<Box
			className={`${styles.cardMedia} ${className}`}
			height={height}
			style={{
				backgroundImage: `url("${src}")`,
			}}
			width={width}
			{...props}
		/>
	);
}
