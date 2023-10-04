import { Box } from '@mui/material';

type VerticalTimelineOppositeContentProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineOppositeContent(props: VerticalTimelineOppositeContentProps) {
	return <Box className='flex flex-col justify-center max-w-[2.5rem]'>{props.children}</Box>;
}
