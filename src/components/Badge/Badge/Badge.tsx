import { Box } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';

export default function Badge({ children, className, ...props }: ComponentPropsWithoutRef<'div'>) {
	return (
		<Box className={`flex flex-1 gap-2 whitespace-nowrap ${className}`} {...props}>
			{children}
		</Box>
	);
}
