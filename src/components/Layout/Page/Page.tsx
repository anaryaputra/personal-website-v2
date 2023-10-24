/**
 * Module Imports
 */
/** Styles */
import styles from './page.module.css';
/** React */
import React from 'react';

/**
 * Component
 */
const Page = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'main'>): React.JSX.Element => (
	<main className={`${styles.page} ${className}`} {...props}>
		{children}
	</main>
);

export default Page;
