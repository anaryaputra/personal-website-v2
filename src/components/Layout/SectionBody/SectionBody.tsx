import { ComponentPropsWithoutRef } from 'react';

type SectionBodyProps = {
	direction?: 'col' | 'row';
} & ComponentPropsWithoutRef<'section'>;

export function SectionBody({ children, className, direction = 'row', ...props }: SectionBodyProps) {
	return (
		<section className={`flex flex-${direction} gap-16 w-full`} {...props}>
			{children}
		</section>
	);
}
