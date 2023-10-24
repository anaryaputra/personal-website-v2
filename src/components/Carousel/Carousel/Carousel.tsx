/**
 * Module Imports
 */
/** Components */
import { CarouselDotButton } from '@/components';
/** Material UI */
import { Box } from '@mui/material';
/** Embla */
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface CarouselProps extends React.PropsWithChildren {
	dir?: 'ltr' | 'rtl';
	options?: EmblaOptionsType;
	useDot?: boolean;
}

/**
 * Component
 */
const Carousel = ({ children, dir = 'ltr', options, useDot }: CarouselProps): React.JSX.Element => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);
	const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

	const length: number = React.Children.count(children);

	React.useEffect(() => {
		const selectHandler = (): void => {
			const index: number | undefined = emblaApi?.selectedScrollSnap();

			setSelectedIndex(index || 0);
		};

		emblaApi?.on('select', selectHandler);

		return () => {
			emblaApi?.off('select', selectHandler);
		};
	}, [emblaApi]);

	return (
		<Box dir={dir}>
			<Box className='overflow-hidden' ref={emblaRef}>
				<Box className='flex gap-6'>{children}</Box>
			</Box>
			{useDot && <CarouselDotButton className='mt-12' itemsLength={length} selectedIndex={selectedIndex} />}
		</Box>
	);
};

export default Carousel;
