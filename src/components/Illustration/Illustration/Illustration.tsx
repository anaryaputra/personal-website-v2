import dynamic from 'next/dynamic';

const DeveloperIllustration = dynamic(
	() => import('@/components/Illustration/DeveloperIllustration/DeveloperIllustration'),
	{}
);

const DeveloperCollaborationIllustration = dynamic(
	() => import('@/components/Illustration/DeveloperCollaborationIllustration/DeveloperCollaborationIllustration'),
	{}
);

export type IllustrationProps = {
	className?: string | undefined;
	variant: 'developer' | 'developer-collaboration';
};

export default function Illustration({ className, variant }: IllustrationProps) {
	switch (variant) {
		case 'developer':
			return <DeveloperIllustration className={className} variant={variant} />;
		case 'developer-collaboration':
			return <DeveloperCollaborationIllustration className={className} variant={variant} />;
		default:
			return;
	}
}
