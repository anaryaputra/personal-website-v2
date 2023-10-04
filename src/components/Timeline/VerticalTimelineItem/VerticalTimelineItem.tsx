import { Box } from '@mui/material';

type VerticalTimelineProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineItem(props: VerticalTimelineProps) {
	return <Box className={`relative w-full flex flex-row ${props.className}`}>{props.children}</Box>;
}
