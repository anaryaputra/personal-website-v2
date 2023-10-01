import { Box } from '@mui/material';

type VerticalTimelineContentProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineContent(props: VerticalTimelineContentProps) {
	return (
		<Box className={`relative w-full my-4 flex flex-1 bg-neutral-900 rounded-xl p-8 ${props.className}`}>
			{props.children}
		</Box>
	);
}
