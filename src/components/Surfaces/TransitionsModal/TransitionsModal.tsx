import { Button } from '@components';

import { Backdrop, Box, Modal, Fade } from '@mui/material';

import { PropsWithChildren, useState } from 'react';

type ModalProps = PropsWithChildren;

export function TransitionsModal({ children }: ModalProps) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box className='w-full'>
			<Button
				className='w-full font-medium hover:bg-white hover:text-black '
				color='inherit'
				variant='outlined'
				onClick={handleOpen}
			>
				Find More Details
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
					<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl hadow-2xl bg-neutral-800'>
						{children}
					</Box>
				</Fade>
			</Modal>
		</Box>
	);
}
