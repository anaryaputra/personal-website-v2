import { Box } from '@mui/material';

import { ReactNode } from 'react';

type VerticalTimelineProps = {
	children?: ReactNode;
	className?: string | '';
};

export default function VerticalTimeline(props: VerticalTimelineProps) {
	return <Box className={`relative flex flex-col`}>{props.children}</Box>;
}
