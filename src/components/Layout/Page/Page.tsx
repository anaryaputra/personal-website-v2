import styles from './page.module.scss';

import { ComponentPropsWithoutRef } from 'react';

export default function Page({ children, className, ...props }: ComponentPropsWithoutRef<'main'>) {
	return (
		<main className={`${styles.page} ${className}`} {...props}>
			{children}
		</main>
	);
}
