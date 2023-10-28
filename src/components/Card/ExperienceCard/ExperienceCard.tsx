/**
 * Module Imports
 */
/** Component */
import { AdvancedImage, Card, CardContent, CardMedia, Heading, Text, TransitionsModal } from '@/components';
/** Types */
import { Experience } from '@/types';
/** Material UI */
import { Box, CardActions } from '@mui/material';
/** React */
import React from 'react';
/** React Markdown */
import ReactMarkdown from 'react-markdown';

/**
 * Interface Declarations
 */
interface ExperienceProps {
	data: Experience;
}

/**
 * Component
 */
const ExperienceCard = ({ data }: ExperienceProps): React.JSX.Element => {
	const startDate: string = new Date(data.attributes.start_date).toLocaleDateString('id-ID', {
		month: 'short',
		year: 'numeric',
	});

	const endDate: string | undefined = data.attributes.end_date
		? new Date(data.attributes.end_date).toLocaleDateString('id-ID', {
				month: 'short',
				year: 'numeric',
		  })
		: undefined;

	return (
		<Card className='h-full w-full items-center bg-[#111111]'>
			<CardMedia
				className='max-h-16 max-w-[64px] rounded-full object-contain'
				variant='cloudinary'
				src={data.attributes.institution?.data.attributes.logo?.data.attributes.url ?? ''}
				fallback={`https://placehold.co/64?text=Not+Found`}
				height={128}
				width={128}
				alt={data.attributes.institution?.data.attributes.logo?.data.attributes.alternativeText ?? ''}
				skeleton='rounded'
				wrapper={{
					height: 64,
					width: 64,
				}}
			/>
			<CardContent className='h-full'>
				<Box className='flex flex-col text-center'>
					<Heading className='text-lg/7 font-semibold lg:text-lg/8'>
						{data.attributes.institution?.data.attributes.name}
					</Heading>
					<Heading className='text-base/7 font-medium lg:text-base/8'>{data.attributes.role}</Heading>
				</Box>
				<Box className='flex h-full flex-col justify-between gap-4'>
					<Text className='text-center leading-7 lg:leading-8'>{data.attributes.short_desc}</Text>
					<Text className='text-center'>{`${startDate} - ${endDate ? endDate : 'Until Now'}`}</Text>
				</Box>
			</CardContent>
			<CardActions className='w-full'>
				<TransitionsModal
					buttonText='Find More Details'
					umami={{
						event: 'Experience: Find more details',
						experience: {
							role: data.attributes.role,
							institution: data.attributes.institution?.data.attributes.name ?? '',
						},
					}}
				>
					<Box className='flex w-full flex-col items-center justify-center gap-8 align-middle'>
						<AdvancedImage
							className='max-h-16 max-w-[64px] rounded-full object-contain'
							src={data.attributes.institution?.data.attributes.logo?.data.attributes.url ?? ''}
							fallback={`https://placehold.co/64?text=Not+Found`}
							variant='cloudinary'
							height={128}
							width={128}
							alt={
								data.attributes.institution?.data.attributes.logo?.data.attributes.alternativeText ?? ''
							}
							skeleton='rounded'
						/>
						<Box className='flex flex-col text-center'>
							<Heading className='text-lg font-semibold'>
								{data.attributes.institution?.data.attributes.name}
							</Heading>
							<Heading className='text-base/8 font-medium'>{data.attributes.role}</Heading>
						</Box>
						<Box className='flex flex-col gap-8'>
							<ReactMarkdown
								components={{
									li: (props) =>
										React.createElement(
											'li',
											{ className: 'list-disc leading-7 lg:leading-8' },
											props.children
										),
								}}
							>
								{`${data.attributes.desc}`}
							</ReactMarkdown>
							<Text className='text-right'>{`${startDate} - ${endDate}`}</Text>
						</Box>
					</Box>
				</TransitionsModal>
			</CardActions>
		</Card>
	);
};

export default ExperienceCard;
