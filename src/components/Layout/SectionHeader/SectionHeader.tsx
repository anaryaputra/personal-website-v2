/**
 * Module Imports
 */
/** Styles */
import styles from './section-header.module.css';
/** React */
import React from 'react';

/**
 * Component
 */
const SectionHeader = ({
	children,
	className = '',
	...props
}: React.ComponentPropsWithoutRef<'header'>): React.JSX.Element => (
	<header className={`${styles.sectionHeader} ${className}`} {...props}>
		{children}
	</header>
);

export default SectionHeader;
