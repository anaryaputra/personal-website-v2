import { CarouselDotButton } from '@/components';

import { Box } from '@mui/material';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { Children, PropsWithChildren, useEffect, useState } from 'react';

type CarouselProps = { dir?: 'ltr' | 'rtl'; options?: EmblaOptionsType; useDot?: boolean } & PropsWithChildren;

export default function Carousel({ children, dir = 'ltr', options, useDot }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const length = Children.count(children);

	useEffect(() => {
		function selectHandler() {
			const index = emblaApi?.selectedScrollSnap();
			setSelectedIndex(index || 0);
		}

		emblaApi?.on('select', selectHandler);

		return () => {
			emblaApi?.off('select', selectHandler);
		};
	}, [emblaApi]);

	return (
		<Box dir={dir}>
			<Box className='overflow-hidden' ref={emblaRef}>
				<Box className='flex gap-10'>{children}</Box>
			</Box>
			{useDot && <CarouselDotButton className='mt-12' itemsLength={length} selectedIndex={selectedIndex} />}
		</Box>
	);
}
