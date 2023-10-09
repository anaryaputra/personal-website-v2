import styles from './card-content.module.scss';

import { Box } from '@mui/material';

import { ComponentPropsWithoutRef } from 'react';

export default function CardContent({ children, className, ...props }: ComponentPropsWithoutRef<'div'>) {
	return (
		<Box className={`${styles.cardContent} ${className}`} {...props}>
			{children}
		</Box>
	);
}
