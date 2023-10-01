import { ComponentPropsWithoutRef } from 'react';

export function Page({ children, className, ...props }: ComponentPropsWithoutRef<'main'>) {
	return (
		<main className={`p-page ${className}`} {...props}>
			{children}
		</main>
	);
}
