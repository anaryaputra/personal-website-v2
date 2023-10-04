import { Heading } from '@/components';

import { Box } from '@mui/material';

import { ComponentPropsWithoutRef } from 'react';

type CounterProps = {
	count?: number;
	label?: string;
} & ComponentPropsWithoutRef<'div'>;

export default function Counter({ className, count, label, ...props }: CounterProps) {
	return (
		<Box className={`flex flex-col ${className}`} {...props}>
			<Heading className='text-2xl lg:text-3xl font-bold'>
				{count}
				<sup className='text-green-accent'>+</sup>
			</Heading>
			<Heading className='text-xl lg:text-2xl font-semibold'>{label}</Heading>
		</Box>
	);
}
