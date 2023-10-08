import { Heading, Text, TransitionsModal } from '@/components';

import { Experience } from '@/data/Experiences';

import { Box, CardActions } from '@mui/material';

import Image from 'next/image';
import Card from '../Card/Card';
import CardMedia from '../CardMedia/CardMedia';
import CardContent from '../CardContent/CardContent';

export default function ExperienceCard({
	description,
	end_date,
	institution,
	logo,
	long_description,
	role,
	start_date,
}: Experience) {
	return (
		<Card className='h-full w-full items-center bg-[#111111]'>
			<CardMedia>
				<Image
					alt={`${institution} logo`}
					className='h-16 w-16 rounded-full bg-white object-cover p-1'
					height={64}
					width={64}
					src={`/img/${logo}`}
				/>
			</CardMedia>
			<CardContent className='h-full'>
				<Box className='flex flex-col text-center'>
					<Heading className='text-lg/7 font-semibold lg:text-lg/8'>{institution}</Heading>
					<Heading className='text-base/7 font-medium lg:text-base/8'>{role}</Heading>
				</Box>
				<Box className='flex h-full flex-col justify-between gap-4'>
					<Text className='text-center text-sm/7 sm:text-base/7 lg:text-base/8'>{description}</Text>
					<Text className='text-center text-sm/7 lg:text-sm/8'>{`${start_date} - ${end_date}`}</Text>
				</Box>
			</CardContent>
			<CardActions className='w-full'>
				<TransitionsModal buttonText='Find More Details'>
					<Box className='flex w-full flex-col items-center justify-center gap-8 align-middle'>
						<Image
							alt={`${institution} logo`}
							className='h-16 w-16 rounded-full bg-white object-cover p-1'
							height={64}
							width={64}
							src={`/img/${logo}`}
						/>
						<Box className='flex flex-col text-center'>
							<Heading className='text-lg font-semibold'>{institution}</Heading>
							<Heading className='text-base/8 font-medium'>{role}</Heading>
						</Box>
						<Box className='flex flex-col gap-8'>
							<ol>
								{long_description.map((longDesc, index) => (
									<li key={index} className='list-disc text-sm/7 sm:text-base/7 lg:text-base/8'>
										{longDesc}
									</li>
								))}
							</ol>
							<Text className='text-right text-sm/7 lg:text-sm/8'>{`${start_date} - ${end_date}`}</Text>
						</Box>
					</Box>
				</TransitionsModal>
			</CardActions>
		</Card>
	);
}
