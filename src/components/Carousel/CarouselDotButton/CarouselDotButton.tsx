import { Box } from '@mui/material';

import classNames from 'classnames';

type CarouselDotButtonProps = {
	className?: string | '';
	itemsLength: number;
	selectedIndex: number;
};

export default function CarouselDotButton({ className, itemsLength, selectedIndex }: CarouselDotButtonProps) {
	const arr = new Array(itemsLength).fill(0);

	return (
		<Box className={`flex gap-1 justify-center -translate-y-5 ${className}`}>
			{arr.map((_, index) => {
				const selected = index === selectedIndex;

				return (
					<Box
						className={classNames({
							'h-2 w-2 rounded-full border-2 border-green-accent bg-green-accent transition-all duration-300':
								true,
							'opacity-50 bg-transparent': !selected,
						})}
						key={index}
					/>
				);
			})}
		</Box>
	);
}
