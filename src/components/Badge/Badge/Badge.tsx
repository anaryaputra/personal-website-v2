/**
 * Module Imports
 */
/** Styles */
import styles from './badge.module.css';
/** Components */
import { Text } from '@/components';
/** Material UI */
import { Box } from '@mui/material';
/** React */
import React from 'react';

/**
 * Type Declarations
 */
type BadgeProps = {
	startIcon?: React.JSX.Element;
	endIcon?: React.JSX.Element;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Component
 */
const Badge = ({ children, className, startIcon, endIcon, ...props }: BadgeProps): React.JSX.Element => (
	<Box className={`${styles.badge} ${className}`} {...props}>
		{startIcon}
		<Text>{children}</Text>
		{endIcon}
	</Box>
);

export default Badge;
