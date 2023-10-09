import dynamic from 'next/dynamic';

const DeveloperIllustration = dynamic(
	() => import('@/components/Illustration/DeveloperIllustration/DeveloperIllustration'),
	{}
);

const DeveloperCollaborationIllustration = dynamic(
	() => import('@/components/Illustration/DeveloperCollaborationIllustration/DeveloperCollaborationIllustration'),
	{}
);

const PartnershipIllustration = dynamic(
	() => import('@/components/Illustration/PartnershipIllustration/PartnershipIllustration'),
	{}
);

export type IllustrationProps = {
	className?: string | undefined;
	variant: 'developer' | 'developer-collaboration' | 'partnership';
};

export default function Illustration({ className, variant }: IllustrationProps) {
	switch (variant) {
		case 'developer':
			return <DeveloperIllustration className={className} variant={variant} />;
		case 'developer-collaboration':
			return <DeveloperCollaborationIllustration className={className} variant={variant} />;
		case 'partnership':
			return <PartnershipIllustration className={className} variant={variant} />;
		default:
			return;
	}
}
