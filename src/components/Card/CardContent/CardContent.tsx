/**
 * Module Imports
 */
/** Styles */
import styles from './card-content.module.css';
/** Material UI */
import { Box } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const CardContent = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'div'>): React.JSX.Element => (
	<Box className={`${styles.cardContent} ${className}`} {...props}>
		{children}
	</Box>
);

export default CardContent;
