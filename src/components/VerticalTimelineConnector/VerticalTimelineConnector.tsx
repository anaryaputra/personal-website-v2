import { Box } from '@mui/material';

type VerticalTimelineConnectorProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineConnector(props: VerticalTimelineConnectorProps) {
	return <Box className={`h-full w-1 z-0 bg-green-accent ${props.className}`}>{props.children}</Box>;
}
