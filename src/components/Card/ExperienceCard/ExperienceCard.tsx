import { Heading, Text, TransitionsModal } from '@/components';

import { Experience } from '@/data/Experiences';

import { Box, Card, CardActions, CardContent } from '@mui/material';

import Image from 'next/image';

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
		<Card className='flex flex-col flex-1 basis-full justify-between items-center p-8 min-h-full bg-[#111111] shadow-lg rounded-lg text-white lg:max-w-[48%]'>
			<CardContent className='flex flex-col flex-1 justify-between items-center gap-8'>
				<Image
					alt={`${institution} logo`}
					className='w-16 h-16 object-cover rounded-full bg-white p-1'
					height={64}
					width={64}
					src={`/img/${logo}`}
				/>
				<Box className='flex flex-col text-center'>
					<Heading className='text-lg/7 lg:text-lg/8 font-semibold'>{institution}</Heading>
					<Heading className='text-base/7 lg:text-base/8 font-medium'>{role}</Heading>
				</Box>
				<Box className='flex flex-col gap-4'>
					<Text className='text-base/7 lg:text-base/8 text-center'>{description}</Text>
				</Box>
				<Text className='text-sm/7 lg:text-sm/8 text-center'>{`${start_date} - ${end_date}`}</Text>
			</CardContent>
			<CardActions className='w-full'>
				<TransitionsModal buttonText='Find More Details'>
					<Box className='flex flex-col justify-center align-middle items-center gap-8 w-full'>
						<Image
							alt={`${institution} logo`}
							className='w-16 h-16 object-cover rounded-full bg-white p-1'
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
									<li key={index} className='list-disc text-base/7 lg:text-base/8'>
										{longDesc}
									</li>
								))}
							</ol>
							<Text className='text-sm/7 text-right lg:text-sm/8'>{`${start_date} - ${end_date}`}</Text>
						</Box>
					</Box>
				</TransitionsModal>
			</CardActions>
		</Card>
	);
}