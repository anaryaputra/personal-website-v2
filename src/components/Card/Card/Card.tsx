/**
 * Module Imports
 */
/** Styles */
import styles from './card.module.css';
/** Material UI */
import { Box } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const Card = React.forwardRef(
	({ children, className, ...props }: React.ComponentPropsWithRef<'div'>, ref): React.JSX.Element => (
		<Box className={`${styles.card} ${className}`} ref={ref} {...props}>
			{children}
		</Box>
	)
);

export default Card;
