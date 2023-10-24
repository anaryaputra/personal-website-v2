/**
 * Module Declarations
 */
/** Styles */
import styles from './section-footer.module.css';
/** React */
import React from 'react';

/**
 * Type Declarations
 */
type SectionFooterProps = {
	direction?: 'row' | 'col';
	gap?: number | string;
} & React.ComponentPropsWithoutRef<'footer'>;

/**
 * Component
 */
const SectionFooter = ({ children, className, direction = 'row', ...props }: SectionFooterProps): React.JSX.Element => (
	<footer className={`${styles.sectionFooter} ${direction === 'col' && 'flex-col'} ${className}`} {...props}>
		{children}
	</footer>
);

export default SectionFooter;
