/**
 * Module Imports
 */
/** Styles */
import styles from './button.module.css';
/** Material UI */
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const Button = ({ children, className, ...props }: BaseButtonProps): React.JSX.Element => (
	<BaseButton className={`${styles.button} ${className}`} {...props}>
		{children}
	</BaseButton>
);

export default Button;
