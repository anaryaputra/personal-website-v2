/**
 * Module Imports
 */
/** Styles */
import styles from './section-body.module.css';
/** React */
import React from 'react';

/**
 * Type Declarations
 */
type SectionBodyProps = {
	direction?: 'col' | 'row';
} & React.ComponentPropsWithoutRef<'section'>;

/**
 * Component
 */
const SectionBody = ({ children, className, direction = 'row', ...props }: SectionBodyProps): React.JSX.Element => (
	<section className={`${styles.sectionBody} flex-${direction} ${className}`} {...props}>
		{children}
	</section>
);

export default SectionBody;
