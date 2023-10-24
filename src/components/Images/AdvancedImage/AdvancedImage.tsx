/**
 * Import Modules
 */
/** Material UI */
import { Skeleton } from '@mui/material';
/** Next */
import { ImageProps as NextJsImageProps } from 'next/image';
import Image from 'next/image';
/** Next Cloudinary */
import { CldImageProps, CldImage } from 'next-cloudinary';
/** React */
import React from 'react';

/**
 * Interface & Type Declarations
 */
export interface CloudinaryImageProps extends AdvancedImageProps, CldImageProps {}
export interface NextImageProps extends AdvancedImageProps, NextJsImageProps {}
export interface AdvancedImageProps {
	fallback: string;
	skeleton?: ImageSkeleton;
	variant: ImageVariant;
	wrapperClassName?: string;
}
export interface ImageSkeleton {
	use: boolean;
	height: number;
	width: number;
}
export type ImageVariant = 'cloudinary' | 'next';

/**
 * Component
 */
const AdvancedImage = ({
	fallback,
	skeleton,
	src,
	variant,
	wrapperClassName,
	...props
}: CloudinaryImageProps & NextImageProps): React.JSX.Element => {
	const [isLoading, setIsLoading] = React.useState<boolean>(skeleton?.use === true ? true : false);
	const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(undefined);

	function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>): void {
		e?.currentTarget?.src !== fallback && setOnErrorSrc(fallback);
	}

	return (
		<figure className={wrapperClassName}>
			{isLoading && (
				<Skeleton
					className='z-0 bg-neutral-900'
					variant='rectangular'
					height={skeleton?.height}
					width={skeleton?.width}
				/>
			)}
			{variant === 'cloudinary' ? (
				<CldImage
					src={onErrorSrc || src}
					onLoadingComplete={() => setIsLoading(false)}
					onError={(e) => handleError(e)}
					{...props}
				/>
			) : (
				<Image
					src={onErrorSrc || src}
					onLoadingComplete={() => setIsLoading(false)}
					onError={(e) => handleError(e)}
					{...props}
				/>
			)}
		</figure>
	);
};

export default AdvancedImage;
