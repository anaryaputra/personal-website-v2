import { Heading } from '@components';
import { ComponentPropsWithoutRef } from 'react';

type SectionHeaderProps = {
	align?: 'left' | 'center' | 'right';
	title?: string;
} & ComponentPropsWithoutRef<'header'>;

export function SectionHeader({ align = 'left', children, className, title = '', ...props }: SectionHeaderProps) {
	return (
		<header className={`flex flex-col gap-4 w-full ${className}`} {...props}>
			<Heading className={`text-4xl lg:text-6xl font-bold text-center lg:text-${align}`}>{title}</Heading>
		</header>
	);
}
