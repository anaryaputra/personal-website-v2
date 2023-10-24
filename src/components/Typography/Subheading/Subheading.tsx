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
const Subheading = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'h3'>): React.JSX.Element => (
	<h3 className={`${styles.subheading} ${className}`} {...props}>
		{children}
	</h3>
);

export default Subheading;
