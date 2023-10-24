/**
 * Import Modules
 */
/** Components */
import { AdvancedImage, CloudinaryImageProps, NextImageProps } from '@/components';
/** React */
import React from 'react';

/**
 * Type Declarations
 */
type CardMediaProps = {
	children?: React.ReactNode;
} & CloudinaryImageProps &
	NextImageProps;

/**
 * Component
 */
const CardMedia = ({ children, fallback, src, variant, ...props }: CardMediaProps): React.JSX.Element => {
	return children ? (
		<React.Fragment>{children}</React.Fragment>
	) : (
		<AdvancedImage variant={variant} src={src} fallback={fallback} {...props} />
	);
};

export default CardMedia;
