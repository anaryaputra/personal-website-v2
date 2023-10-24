import React from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { Skeleton } from '@mui/material';

export type CloudinaryImageProps = {
	fallback: string;
	skeleton?: CloudinaryImageSkeletonType;
} & CldImageProps;

export type CloudinaryImageSkeletonType = {
	use: boolean;
	height: number;
	width: number;
};

const CloudinaryImage = ({ fallback, skeleton, src, ...props }: CloudinaryImageProps): React.JSX.Element => {
	const [isLoading, setIsLoading] = React.useState<boolean>(skeleton?.use === true ? true : false);

	const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(undefined);

	function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>): void {
		e?.currentTarget?.src !== fallback && setOnErrorSrc(fallback);
	}

	return isLoading ? (
		<Skeleton
			className='z-auto bg-neutral-900'
			variant='rectangular'
			height={skeleton?.height}
			width={skeleton?.width}
		/>
	) : (
		<CldImage
			src={onErrorSrc || src}
			onLoadingComplete={() => setIsLoading(false)}
			onError={(e) => handleError(e)}
			{...props}
		/>
	);
};

export default CloudinaryImage;
