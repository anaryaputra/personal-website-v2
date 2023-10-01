import { ComponentPropsWithoutRef } from 'react';

export function Section({ children, className, ...props }: ComponentPropsWithoutRef<'section'>) {
	return (
		<section className={`flex gap-24 justify-center w-full lg:max-w-[1440px] lg:mx-auto ${className}`} {...props}>
			{children}
		</section>
	);
}
