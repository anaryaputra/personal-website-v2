/**
 * Module Imports
 */
/** Styles */
import styles from './section.module.css';
/** React */
import React from 'react';

/**
 * Component
 */
const Section = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'section'>): React.JSX.Element => (
	<section className={`${styles.section} ${className} scroll-mt-28`} {...props}>
		{children}
	</section>
);

export default Section;
