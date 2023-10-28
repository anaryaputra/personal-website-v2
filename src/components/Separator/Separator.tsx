/**
 * Module Imports
 */
/** Assets */
import { Box, BoxProps } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const Separator = (props: BoxProps): React.JSX.Element => (
	<Box
		style={{
			backgroundImage: `url("https://res.cloudinary.com/drahmssud/image/upload/v1698479595/separator_2372172372.svg")`,
		}}
		{...props}
	/>
);

export default Separator;
