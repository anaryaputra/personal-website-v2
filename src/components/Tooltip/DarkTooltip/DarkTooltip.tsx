import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';

const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: 'black',
		color: 'white',
	},
}));

export default DarkTooltip;
