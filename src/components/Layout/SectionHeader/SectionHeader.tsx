import { Heading } from '@/components';
import { ComponentPropsWithoutRef } from 'react';

type SectionHeaderProps = {
	align?: 'left' | 'center' | 'right';
	subtitle?: string;
	title?: string;
} & ComponentPropsWithoutRef<'header'>;

export default function SectionHeader({
	align = 'left',
	children,
	className,
	subtitle,
	title,
	...props
}: SectionHeaderProps) {
	return (
		<header className={`flex flex-col gap-4 w-full ${className}`} {...props}>
			{!children && title && (
				<Heading className={`text-4xl lg:text-6xl font-bold text-center ${align && `lg:text-${align}`}`}>
					{title}
				</Heading>
			)}
			{!children && subtitle && (
				<Heading className={`lg:text-xl font-medium text-center ${align && `lg:text-${align}`}`}>
					{subtitle}
				</Heading>
			)}
			{children && children}
		</header>
	);
}
