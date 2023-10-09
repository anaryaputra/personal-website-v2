import styles from './section-footer.module.scss';

import { ComponentPropsWithoutRef } from 'react';

type SectionFooterProps = {
	direction?: 'row' | 'col';
	gap?: number | string;
} & ComponentPropsWithoutRef<'footer'>;

export default function SectionFooter({ children, className, direction = 'row', ...props }: SectionFooterProps) {
	return (
		<footer className={`${styles.sectionFooter} ${direction === 'col' && 'flex-col'} ${className}`} {...props}>
			{children}
		</footer>
	);
}
