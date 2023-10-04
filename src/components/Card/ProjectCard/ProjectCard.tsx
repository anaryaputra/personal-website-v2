import { Project } from '@/data/Projects';
import { Card, CardActionArea, CardMedia } from '@mui/material';

type ProjectCardProps = {
	data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
	return (
		<Card className='max-w-full lg:max-w-[380px] bg-transparent' variant='outlined'>
			<CardActionArea>
				<CardMedia component='img' height='237' image={data.imageUrl} alt={data.company} />
			</CardActionArea>
		</Card>
	);
}
