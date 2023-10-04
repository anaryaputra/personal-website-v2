import { Box } from '@mui/material';

type VerticalTimelineSeparatorProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineSeparator(props: VerticalTimelineSeparatorProps) {
	return <Box className='relative flex justify-center mx-8'>{props.children}</Box>;
}
