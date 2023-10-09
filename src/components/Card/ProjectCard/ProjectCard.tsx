import { Card, CardContent, CardMedia, DarkTooltip, Heading, Text } from '@/components';

import { Project } from '@/data/Projects';

import { Box, Zoom } from '@mui/material';

import Image from 'next/image';

type ProjectCardProps = {
	data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
	function handleClick() {
		window.open(data.url, '_blank');
	}

	return (
		<Card
			className='group relative w-full min-w-full max-w-[380px] cursor-pointer overflow-hidden p-0 backdrop-blur sm:min-w-min'
			onClick={handleClick}
		>
			<CardMedia height={237} src={data.imageUrl} width={380} />
			<CardContent className='absolute top-full w-full justify-end gap-5 bg-[#000000cc] p-4 transition-all duration-400 group-hover:-translate-y-full'>
				<Box className='flex flex-col gap-1'>
					<Heading className='text-lg/7 font-semibold lg:text-lg/8'>{data.title}</Heading>
					<Text className='text-sm/7 sm:text-base/7 lg:text-base/8'>{data.shortDesc}</Text>
				</Box>
				<Box className='flex items-end justify-between'>
					<Box className='flex flex-col gap-2'>
						<Box className='flex gap-4'>
							{data.stacks?.map((tech, index) => (
								<DarkTooltip
									key={`${data.title}-tech-${index}`}
									title={tech.name}
									placement='bottom'
									TransitionComponent={Zoom}
								>
									<Image src={tech.logoUrl} alt={tech.name} width={24} height={24} />
								</DarkTooltip>
							))}
						</Box>
					</Box>
					<Text
						className="relative inline-block text-right text-sm transition-all duration-400
                        before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-green-accent before:opacity-0 before:transition-all before:duration-700 before:content-['']
                        group-hover:before:w-full group-hover:before:opacity-100 group-hover:before:delay-100"
					>
						See the project →
					</Text>
				</Box>
			</CardContent>
		</Card>
	);
}
