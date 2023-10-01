import { Box } from '@mui/material';

type VerticalTimelineDotProps = {
	children?: React.ReactNode;
	className?: string | '';
};

export default function VerticalTimelineDot(props: VerticalTimelineDotProps) {
	return (
		<Box
			className={`absolute top-[calc(50%-1rem)] h-8 w-8 z-10 border-4 rounded-full border-green-accent bg-black ${props.className}`}
		>
			{props.children}
		</Box>
	);
}
