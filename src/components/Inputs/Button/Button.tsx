import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mui/material';

import { FC } from 'react';

interface ButtonProps extends BaseButtonProps {}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<BaseButton {...props} className={`${props.className} border-2 py-2 px-6 text-xs lg:text-sm font-medium`}>
			{props.children}
		</BaseButton>
	);
};
