import { Button } from '@/components';

import { Backdrop, Box, Fade, Modal } from '@mui/material';

import { PropsWithChildren, useState } from 'react';

type TransitionsModalProps = {
	buttonText: string;
} & PropsWithChildren;

export default function TransitionsModal({ buttonText = 'Button', children, ...props }: TransitionsModalProps) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box className='w-full' {...props}>
			<Button
				className='w-full hover:bg-white hover:text-black '
				color='inherit'
				variant='outlined'
				onClick={handleOpen}
			>
				{buttonText}
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box className='absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-neutral-800 p-8 opacity-100 shadow-2xl lg:max-w-[1440px] lg:px-16'>
						{children}
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}
