import dynamic from 'next/dynamic';

const BackendIcon = dynamic(() => import('@/components/Icon/BackendIcon/BackendIcon'), {});
const FrontendIcon = dynamic(() => import('@/components/Icon/FrontendIcon/FrontendIcon'), {});
const GraphicDesignIcon = dynamic(() => import('@/components/Icon/GraphicDesignIcon/GraphicDesignIcon'), {});
const PerformanceIcon = dynamic(() => import('@/components/Icon/PerformanceIcon/PerformanceIcon'), {});
const UiUxIcon = dynamic(() => import('@/components/Icon/UiUxIcon/UiUxIcon'), {});

export type IconProps = {
	className?: string | undefined;
	variant: 'frontend' | 'backend' | 'performance' | 'ui-ux' | 'graphic-design' | string;
};

export default function Icon({ className, variant }: IconProps) {
	switch (variant) {
		case 'backend':
			return <BackendIcon className={className} variant={variant} />;
		case 'frontend':
			return <FrontendIcon className={className} variant={variant} />;
		case 'graphic-design':
			return <GraphicDesignIcon className={className} variant={variant} />;
		case 'performance':
			return <PerformanceIcon className={className} variant={variant} />;
		case 'ui-ux':
			return <UiUxIcon className={className} variant={variant} />;
		default:
			return;
	}
}
