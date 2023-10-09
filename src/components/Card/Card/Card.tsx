import styles from './card.module.scss';

import { Box } from '@mui/material';

import { ComponentPropsWithoutRef } from 'react';

export default function Card({ children, className, ...props }: ComponentPropsWithoutRef<'div'>) {
	return (
		<Box className={`${styles.card} ${className}`} {...props}>
			{children}
		</Box>
	);
}
