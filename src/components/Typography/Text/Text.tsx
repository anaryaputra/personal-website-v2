/**
 * Module Imports
 */
/** Styles */
import styles from './text.module.css';
/** React */
import React from 'react';

/**
 * Component
 */
const Text = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'p'>): React.JSX.Element => (
	<p className={`${styles.text} ${className}`} {...props}>
		{children}
	</p>
);

export default Text;
