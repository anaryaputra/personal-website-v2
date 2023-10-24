/**
 * Module Imports
 */
/** Material UI */
import { Box } from '@mui/material';
/** clsx */
import clsx from 'clsx';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface CarouselDotButtonProps extends React.ComponentPropsWithoutRef<'div'> {
	itemsLength: number;
	selectedIndex: number;
}

/**
 * Component
 */
const CarouselDotButton = ({ className, itemsLength, selectedIndex }: CarouselDotButtonProps): React.JSX.Element => {
	const arr: number[] = new Array(itemsLength).fill(0);

	return (
		<Box className={`flex -translate-y-5 justify-center gap-1 ${className}`}>
			{arr.map((_, index) => {
				const selected = index === selectedIndex;

				return (
					<Box
						className={clsx(
							'h-2 w-2 rounded-full border-2 border-green-accent bg-green-accent transition-all duration-300',
							!selected && 'bg-transparent opacity-50'
						)}
						key={index}
					/>
				);
			})}
		</Box>
	);
};

export default CarouselDotButton;
