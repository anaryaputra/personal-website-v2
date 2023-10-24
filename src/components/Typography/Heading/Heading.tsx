/**
 * Module Imports
 */
/** Styles */
import styles from './heading.module.css';
/** Ract */
import React from 'react';

/** Component */
const Heading = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'h1'>): React.JSX.Element => {
	return (
		<h1 className={`${styles.heading} ${className}`} {...props}>
			{children}
		</h1>
	);
};

export default Heading;
