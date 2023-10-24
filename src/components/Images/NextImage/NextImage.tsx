import { Skeleton } from '@mui/material';

import Image, { ImageProps } from 'next/image';

import React from 'react';

export type NextImageProps = {
	fallback: string;
	skeleton?: NextImageSkeletonType;
	wrapperClassName?: string;
} & ImageProps;

export type NextImageSkeletonType = {
	use: boolean;
	height: number;
	width: number;
};

const NextImage = ({ fallback, skeleton, src, wrapperClassName, ...props }: NextImageProps): React.JSX.Element => {
	const imageRef = React.useRef<HTMLImageElement>(null);
	const [loading, setLoading] = React.useState<boolean>(skeleton?.use === true ? true : false);
	const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(undefined);

	function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>): void {
		e?.currentTarget?.src !== fallback && setOnErrorSrc(fallback);
	}

	return (
		<figure className={wrapperClassName}>
			{loading && (
				<Skeleton
					className='z-auto bg-neutral-900'
					variant='rectangular'
					height={skeleton?.height}
					width={skeleton?.width}
				/>
			)}
			<Image
				ref={imageRef}
				src={onErrorSrc || src}
				onLoadingComplete={() => setLoading(false)}
				onError={(e) => handleError(e)}
				{...props}
			/>
		</figure>
	);
};

export default NextImage;
