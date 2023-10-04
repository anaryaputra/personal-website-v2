import { ComponentPropsWithoutRef } from 'react';

type SectionFooterProps = {
	direction: 'row' | 'col';
} & ComponentPropsWithoutRef<'footer'>;

export default function SectionFooter({ children, className, direction = 'row', ...props }: SectionFooterProps) {
	return (
		<footer className={`flex flex-${direction} gap-16 w-full`} {...props}>
			{children}
		</footer>
	);
}
