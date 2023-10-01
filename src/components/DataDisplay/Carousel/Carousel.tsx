import { CarouselDotButton } from '@components';

import { Box } from '@mui/material';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { Children, PropsWithChildren, useEffect, useState } from 'react';

type CarouselProps = { options?: EmblaOptionsType } & PropsWithChildren;

export function Carousel({ children, options }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		...options,
	});
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
		<Box>
			<Box className='overflow-hidden' ref={emblaRef}>
				<Box className='flex gap-10'>{children}</Box>
			</Box>
			<CarouselDotButton className='mt-12' itemsLength={length} selectedIndex={selectedIndex} />
		</Box>
	);
}
