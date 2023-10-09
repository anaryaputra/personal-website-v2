import styles from './section.module.scss';

import { ComponentPropsWithRef } from 'react';

export default function Section({ children, className, ...props }: ComponentPropsWithRef<'section'>) {
	return (
		<section className={`${styles.section} ${className}`} {...props}>
			{children}
		</section>
	);
}
