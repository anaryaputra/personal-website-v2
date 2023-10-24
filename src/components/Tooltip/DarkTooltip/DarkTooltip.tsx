/**
 * Module Imports
 */
/** Material UI */
import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';
/** React */
import React from 'react';

/**
 * Component
 */
const DarkTooltip = styled(
	({ className, ...props }: TooltipProps): React.JSX.Element => <Tooltip {...props} classes={{ popper: className }} />
)(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: 'black',
		color: 'white',
	},
}));

export default DarkTooltip;
