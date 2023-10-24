/**
 * Module Imports
 */
/** Components */
import { AdvancedImage, Card, CardContent, CardMedia, DarkTooltip, Heading, Text } from '@/components';
/** Material UI */
import { Box, Zoom } from '@mui/material';
/** Types */
import { Project } from '@/types';
/** React */
import React from 'react';

/**
 * Module Declarations
 */
interface ProjectCardProps {
	data: Project;
}

/**
 * Components
 */
const ProjectCard = ({ data }: ProjectCardProps): React.JSX.Element => {
	const cardRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

	const handleClick: () => void = (): void => {
		window.open(data.attributes.url, '_blank');
	};

	return (
		<Card
			className='group relative aspect-video w-full min-w-full cursor-pointer overflow-hidden p-0 backdrop-blur sm:min-w-min'
			// onClick={handleClick}
			ref={cardRef}
		>
			<CardMedia
				variant='cloudinary'
				src={data.attributes.thumbnail.data.attributes.url}
				fallback='data:image/webp;base64,UklGRhYKAABXRUJQVlA4WAoAAAAgAAAAewEA7AAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKAgAAFA6AJ0BKnwB7QA+KRSJQyGhIRBMBFgYAoS0t3C7sI350viD+S9m38//GDrZO6/rv/N/9xumfkL+oP0/+hfr5+R2uBfiv8I/qv8//YL9yP9F6qvbdAA/HP51/e/6/+yn9h/bf0ZvxV6QD+J/yv/Efkv+//S8+JewB/Lf6l/afzG/rf0sfuf+c/yn7kf6D2lfk/9V/2/+A/Hj7Bf5F/NP8V/bP3Q/xH///8v3O+tn9sPYT/Uz7/wjunm8rZGXTzeVsjLp5vK2Rl083lbIy6ebytkZdPN5WyMunm8rZGXTzeVsjLp5vK2Rl083lbIy6ebytkZdPN5WyMunkNjDm/APB1G/8wdr5XlPAfvPxAxJdZNeUEwdVom2bnSOwX88skJs0TwsKAW5WxunPJB5hBWUBvbSpks+948NDgEu3TbdX3rW4XlVskUnLjO8o5GGt0+0G5Tp7so/3Oi91MhlFHxYuZaAdZfJCyPxnNZ5vK2RkKj/gUdndCaFve1Vk2qJLQ+6gWjDL+4aOhlIyrX6RVQ6XdbAdoYju2b05zzeVsjLp5vK2Rl083lbIy6ebytkZdPN5WyMunm8rZGXTzeVsjLp5vK2Rl083lbIy6ebytkZdPN5WyMunm8rZGXTzWgA/v/4dhAAAAIOYgHU/mgv6mM2JzPQ1Y/PP3ZUKZq+3JbIYR7MtOoOrRCPGjjXHS5vHSFCix214Mgrb6PmVeirb22yA+D89/84usqUgofoSQDq8y88s1mPzaGJe2GFKu327VFr4vppwY83swlLJZpr0TOe/qq3B08V4VbcR0/oyrDj+uAcwmyWFB2Lzx4Zq8S873dGim1QwmCSbhvrnMzQGAMsVFDdTdOuhRNUADUo6fFHdOSe+o6CQcdCwg6nvzrDDdoxTd6k2B5/oO5qC8eiNFLX2kZgtb8eLqOLhM+tvYz+o8TpHV+arm8iQgEKsWcsdBxm5huIYwES691g4c8q+g0OFjFzPuSRFYGqqbE+FIAgX3h69t256+cnuDaabVfn4ovFSAWpNf+fnJXOoLD5Oqd2onSR+/6zOOUj9iPJlM3/56x8cSv33Ftq54Scr/d//JfQ1zep3Z1VHmFk+gwVhYtNtXU+JAIEszmjJhTId/RnAxe+m4qK3nN7+eAhhLzdM5ouwxrUl4z+g7QjTgz7JI8w7M+yRVJrhBMspg+NX6fu78luoje3KjIUQL7SH/8oTxveZjzbPGlRjjq4Tfwus/0d0oifH2glVKWhqdUAikAn7bI3OMGxbrUwncT9FB1y4wyy8esLavBCboTqTZo1K4ctCJ80tGaCsboKNY0kyR7lNP23pU1eBdtIH1gHODqzdW78rEYz6cHsi0Zv7Ditrv6I7Cdv63awbaVsVpAakeo2XkEjeCT/IHgruxT0/whnII+6wMVlsbctBa079/2qI5I8UxwV48fRwxqwH6F/XiAYdB2q0BJOqVlwBpUwpQmp95Q1qeNvy5O+u3fuCHV0qPuRQ/vWTHBtW4thRL0sp97JqZbVZ8BHrUyF9C5siNkL711/gg8Yoq0Fyp6tspFXavos1i1t4PqEEv/1A0XKaCAGF7pJi//IenHFJvzEtTMn0dVenGQVFIvh2inC/a+trwjRkfueS7dAwLHfIVru1XIuhpXsOlU08Ie6l2zS4H1OZQU+ePCCd0CaI8zs3itnGFHZXYurKKgh8Pb9BCgBjMyxKaeFXMH/agMwppTuIHqK5ylwAhENvLDeNFHQUr60ydjWVcHOKXHuq4k6mcvnbvdxNo803N68H/OngA38WjpfSOfJ+/MoEgogbgdupGwernXm08+oxrsmQ5pTfbk3G0IztZwn+e4cPvdTBniU90cDRIPBhy0mHZSvVNd8Y5fNASwLB89plMLxR81tRQaBm8nkPw6eDaD/ZQ1+3Bca+ia721OtH30q6RWaG3HedUej7RjPS/5nRwCR789Ikgf1Qd6FGv80onI9P9OMGl1CC5abEq3XuUn54Wu6TOf8oc6jkDvzY7Fp3lOuB89KadRTDaR93oJNGMEi41VE+Wsc55whEJexBZCcUH4wyr9o2doMnawJaX+SKoE79Vw4Or5QBYFcvx7z21c+CCtlGEorYjzPzJZ1Kni/o0L7o2jAlPqUVwNhJ8oRcSDrd0L/7MWKYsi0ZfSMT0WzNs6MA41funGB1DST+xXnwKrjSzlo7S3xLUnYKsGqyJMNCT7muvxdLKY43PL/fSRpwZ5GtytdnO2YdrdCq/aCdWOn4PeTxhf40C8NPCeZ83QAx0x8a23HWo0xHn9iJRoHH1mQkTscCzDn/cMcuGngziYOklzgFWP8qF8qBAQaN36r25B/uhFHmeSufAUqeu/rI8Fn57k+cOtPZ0LE5bSpJCcIaaJw5BgtUff8y+dkT+sIH4OW7GvDU/TL99lc56KJC18DEvAJFuZj7N8PdGsjhQzMyDV10V7cvdT+QRtLJLxlII07cIFa5Avs4Re+uoUjIEMynIKBZr0Rvh1jfTWJI4jhG3iv2sBl753zt5CXZkljCRf6S2FAJUfDAqF4MHKdr3lz1z/Ybnsd1k1msfZApaYLgDgPsnq0a+qAW3J+/H/ldUemb59SL0lYMHvbkfmiqrravQwYu/RYg9xuM5fvyH2RitPwr7OQgn4n5Xc4Bvdt4+39eLu2A+t1xn84vCQDI8z7b2hksgqisC2WehWqlRSbkd3rhhdxvEbaOIhDlGKXJFboss98nxqCIUZqwtXLjVT4oKqZg4/Q1pGqvbldu+ypx82VS2rRty6iSn8kmAAAAAAAAA=='
				fill
				skeleton={{
					use: true,
					height: cardRef.current ? cardRef.current.offsetHeight : 0,
					width: cardRef.current ? cardRef.current.offsetWidth : 0,
				}}
				alt={data.attributes.thumbnail.data.attributes.alternativeText}
			/>
			<CardContent className='absolute top-full w-full justify-end gap-5 bg-[#000000cc] p-4 transition-all duration-400 group-hover:-translate-y-full'>
				<Box className='flex flex-col gap-1'>
					<Heading className='text-lg font-semibold'>{data.attributes.title}</Heading>
					<Text className='text-sm/6 sm:text-base/7 lg:text-base/7'>{data.attributes.short_desc}</Text>
				</Box>
				<Box className='flex items-end justify-between'>
					<Box className='flex flex-col gap-2'>
						<Box className='flex gap-4'>
							{data?.attributes?.teches?.data?.map((tech, index) => (
								<DarkTooltip
									key={`${data.attributes.title.toLowerCase()}-tech=${index}`}
									title={tech.attributes.name}
									placement='bottom'
									TransitionComponent={Zoom}
								>
									<Box>
										<AdvancedImage
											wrapperClassName='h-full h-[24px]'
											className='h-[24px]'
											variant='next'
											src={tech.attributes.logo?.data.attributes.url}
											fallback='data:image/webp;base64,UklGRsACAABXRUJQVlA4WAoAAAAgAAAAFwAAFwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg0gAAAPAGAJ0BKhgAGAA+KRCGQiGhDAYCAAwBQlpABOAKxm7yvTVeUF85f3f3AP4t/SP9lwAH6Zh2a1iIaTpli0ZkqQAA/v+5bN7wN57LvJt8THvO+dCLR13r/q//0Ow8kWhGimQwqv34lz+TTjYBn49S0cMVW430Jb/MK1/ATYJmpqAGed8vCVv/5bdPc9WGJeU/7UgOmh//g1NPxIyDfwDfq3Gnnal4Go94eO6Va0KJ6ttO92Xxcw18b/hK+U8Ku6/7/c95AHQq7IARtf3lZW0WNPCAAA=='
											width={24}
											height={24}
											skeleton={{
												use: true,
												height: 24,
												width: 24,
											}}
											alt={tech.attributes.logo?.data.attributes.alternativeText}
										/>
									</Box>
								</DarkTooltip>
							))}
						</Box>
					</Box>
					<Text
						className='animate animate-scale-up animate-underline cursor-alias before:bg-green-accent'
						onClick={handleClick}
					>
						See the project →
					</Text>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
