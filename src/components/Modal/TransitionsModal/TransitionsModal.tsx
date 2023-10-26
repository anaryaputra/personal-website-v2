/**
 * Module Imports
 */
/** Components */
import { Button } from '@/components';
/** Material UI */
import { Backdrop, Box, Fade, Modal } from '@mui/material';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface TransitionsModalProps extends React.PropsWithChildren {
	buttonText: string;
	umami: {
		event: string;
		experience: {
			role: string;
			institution: string;
		};
	};
}

/**
 * Components
 */
const TransitionsModal = ({
	buttonText = 'Button',
	children,
	umami,
	...props
}: TransitionsModalProps): React.JSX.Element => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleOpen = (): void => setOpen(true);
	const handleClose = (): void => setOpen(false);

	return (
		<Box className='w-full' {...props}>
			<Button
				className='w-full hover:bg-white hover:text-black'
				color='inherit'
				variant='outlined'
				onClick={handleOpen}
				data-umami-event={umami.event}
				data-umami-event-experience={umami.experience}
				data-umami-event-type='navigate'
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
};

export default TransitionsModal;
