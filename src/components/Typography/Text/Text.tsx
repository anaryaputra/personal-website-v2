import { ComponentPropsWithoutRef } from 'react';

export function Text({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
	return (
		<p className={className} {...props}>
			{children}
		</p>
	);
}
