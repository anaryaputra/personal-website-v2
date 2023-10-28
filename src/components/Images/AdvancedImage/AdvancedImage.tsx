/**
 * Import Modules
 */
/** Clsx */
import clsx from 'clsx';
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
	skeleton?: 'circular' | 'rectangular' | 'rounded';
	wrapper?: {
		className?: string;
		height?: number;
		width?: number;
	};
	variant: ImageVariant;
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
	skeleton = 'circular',
	src,
	variant,
	wrapper,
	...props
}: CloudinaryImageProps & NextImageProps): React.JSX.Element => {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
	const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(undefined);

	const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
		e?.currentTarget?.src !== fallback && setOnErrorSrc(fallback);
	};

	return (
		<figure
			className={clsx(
				'relative',
				wrapper && wrapper.className,
				wrapper && !wrapper.className && `h-[${wrapper.height}px] w-[${wrapper.width}px]`,
				props.fill && 'h-full w-full'
			)}
		>
			{variant === 'cloudinary' && (
				<CldImage
					className={clsx(
						!isLoaded && props.fill ? 'opacity-0' : 'opacity-100',
						!isLoaded && !props.fill ? 'hidden' : 'block'
					)}
					src={onErrorSrc || src}
					onError={(e) => handleError(e)}
					onLoadingComplete={() => setIsLoaded(true)}
					{...props}
				/>
			)}
			{variant === 'next' && (
				<Image
					className={!isLoaded ? 'hidden' : 'block'}
					src={onErrorSrc || src}
					onError={(e) => handleError(e)}
					onLoadingComplete={() => setIsLoaded(true)}
					{...props}
				/>
			)}
			{!isLoaded && skeleton && (
				<Skeleton className='bg-neutral-900' variant='rectangular' width='100%' height='100%' />
			)}
		</figure>
	);
};

export default AdvancedImage;
