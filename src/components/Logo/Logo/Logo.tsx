import dynamic from 'next/dynamic';

const AppLogo = dynamic(() => import('@/components/Logo/AppLogo/AppLogo'), {});

export type LogoProps = {
	className?: string | undefined;
	variant: 'app';
};

export default function Logo({ className, variant }: LogoProps) {
	switch (variant) {
		case 'app':
			return <AppLogo className={className} variant={variant} />;
		default:
			return;
	}
}
