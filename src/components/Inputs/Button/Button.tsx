import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mui/material';

export default function Button({ children, className, ...props }: BaseButtonProps) {
	return (
		<BaseButton className={`py-2 px-6 text-xs lg:text-sm font-medium rounded-lg ${className}`} {...props}>
			{children}
		</BaseButton>
	);
}
