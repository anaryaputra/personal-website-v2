/**
 * Module Imports
 */
/** Components */
import { Heading } from '@/components';
/** Material UI */
import { Box } from '@mui/material';
/** React */
import React from 'react';

/**
 * Type Declarations
 */
type CounterProps = {
	count?: number;
	label?: string;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Component
 */
const Counter = ({ className, count, label, ...props }: CounterProps): React.JSX.Element => (
	<Box className={`flex flex-col ${className}`} {...props}>
		<Heading className='text-2xl lg:text-3xl'>
			{count}
			<sup className='text-green-accent'>+</sup>
		</Heading>
		<Heading className='text-xl font-semibold lg:text-2xl'>{label}</Heading>
	</Box>
);

export default Counter;
