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
				variant='next'
				src={data.attributes.institution?.data.attributes.logo?.data.attributes.url ?? ''}
				fallback='data:image/webp;base64,UklGRuQDAABXRUJQVlA4WAoAAAAgAAAAPwAAPwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg9gEAADAPAJ0BKkAAQAA+KRCGQiGhDH3GAAwBQlpABbZKpvIxHo/0n8VdEb/M/yQywL4X/Nvx5/JnYAP51+JeyAfx7+h/jT7i38d5Gvkv/L/jl9AX8S/kH9z/L7+6///wAfqr7B36qm6PRzSosxUTjv3KI69C7wlHR9CebmbweMOENrKR50AA/v6+lI9q/uzf6IE1ksCTSwcfeWbuxRohjP/3Zb/2gHMvy/mzZs+/f0f+NvSxkEmVlDnYYUhr0fp12bpa/waMr3F3/+hamdZwE/7/FvioE4dP1/7bBorf//lMEORiNuZB+LjViX5hVY61b/qOPn+5Jn+CkcI9lt8y/Kx9QDQ6OmlB/Fk/ZdVjo3r493/8Tl//JhXfbuv8igNn8f4V/FU6/Ql0He4n94f//QeJIh65smH9ESFJ7aj8ug7knU60/96qGn//5eybK7fbr/8Npw8oTRgd7yO+QakFbL8gP9xvk6dtWTCAWcKXOYJhCj7CQz8a0p2hGvVKeNVfNOigyxy4KqBWh0BEBuXZT0jvMKu6J/XdCETXuW/+4l3MmDypkStz9GGkYQCnd9ayWanF+bg/ENedUbxCXKt9e8vhV//2vsmLb/5Yd0NZCRM2LQf90yVkg5TQueGc5u1w+Ck/R8wiJTRC0/tn9uhAEMGP/0bOwIiAAAA='
				height={64}
				width={64}
				skeleton={{
					use: true,
					height: 64,
					width: 64,
				}}
				alt={data.attributes.institution?.data.attributes.logo?.data.attributes.alternativeText ?? ''}
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
				<TransitionsModal buttonText='Find More Details'>
					<Box className='flex w-full flex-col items-center justify-center gap-8 align-middle'>
						<AdvancedImage
							variant='next'
							src={data.attributes.institution?.data.attributes.logo?.data.attributes.url ?? ''}
							fallback='data:image/webp;base64,UklGRuQDAABXRUJQVlA4WAoAAAAgAAAAPwAAPwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg9gEAADAPAJ0BKkAAQAA+KRCGQiGhDH3GAAwBQlpABbZKpvIxHo/0n8VdEb/M/yQywL4X/Nvx5/JnYAP51+JeyAfx7+h/jT7i38d5Gvkv/L/jl9AX8S/kH9z/L7+6///wAfqr7B36qm6PRzSosxUTjv3KI69C7wlHR9CebmbweMOENrKR50AA/v6+lI9q/uzf6IE1ksCTSwcfeWbuxRohjP/3Zb/2gHMvy/mzZs+/f0f+NvSxkEmVlDnYYUhr0fp12bpa/waMr3F3/+hamdZwE/7/FvioE4dP1/7bBorf//lMEORiNuZB+LjViX5hVY61b/qOPn+5Jn+CkcI9lt8y/Kx9QDQ6OmlB/Fk/ZdVjo3r493/8Tl//JhXfbuv8igNn8f4V/FU6/Ql0He4n94f//QeJIh65smH9ESFJ7aj8ug7knU60/96qGn//5eybK7fbr/8Npw8oTRgd7yO+QakFbL8gP9xvk6dtWTCAWcKXOYJhCj7CQz8a0p2hGvVKeNVfNOigyxy4KqBWh0BEBuXZT0jvMKu6J/XdCETXuW/+4l3MmDypkStz9GGkYQCnd9ayWanF+bg/ENedUbxCXKt9e8vhV//2vsmLb/5Yd0NZCRM2LQf90yVkg5TQueGc5u1w+Ck/R8wiJTRC0/tn9uhAEMGP/0bOwIiAAAA='
							height={64}
							width={64}
							skeleton={{
								use: true,
								height: 64,
								width: 64,
							}}
							alt={
								data.attributes.institution?.data.attributes.logo?.data.attributes.alternativeText ?? ''
							}
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
