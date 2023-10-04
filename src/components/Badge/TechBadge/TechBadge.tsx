import { Tech } from '@/data/Tech';

import { Badge, Text } from '@/components';

import Image from 'next/image';

import { ComponentPropsWithoutRef } from 'react';

type TechBadgeProps = {
	data: Tech;
} & ComponentPropsWithoutRef<'div'>;

export default function TechBadge({ className, data: { code, logoUrl, name }, ...props }: TechBadgeProps) {
	return (
		<Badge className={className} {...props}>
			<Image src={logoUrl} alt={`${code} logo`} height={16} width={16} />
			<Text>{name}</Text>
		</Badge>
	);
}
