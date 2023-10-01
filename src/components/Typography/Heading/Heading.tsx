import { ComponentPropsWithoutRef } from 'react';

export function Heading({ children, className, ...props }: ComponentPropsWithoutRef<'h1'>) {
	return (
		<h1 className={className} {...props}>
			{children}
		</h1>
	);
}
