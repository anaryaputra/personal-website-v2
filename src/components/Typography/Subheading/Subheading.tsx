/**
 * Module Imports
 */
/** Styles */
import styles from './subheading.module.css';
/** React */
import React from 'react';

/**
 * Component
 */
const Subheading = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'h2'>): React.JSX.Element => (
	<h2 className={`${styles.subheading} ${className}`} {...props}>
		{children}
	</h2>
);

export default Subheading;
