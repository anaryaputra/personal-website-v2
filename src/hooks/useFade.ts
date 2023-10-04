import { useEffect, useState } from 'react';

type UseFadeProps = {
	inView: boolean;
	isLoaded: boolean;
};

export default function useFade({ inView, isLoaded }: UseFadeProps) {
	const [shouldFade, setShouldFade] = useState(false);

	useEffect(() => {
		if (inView && !isLoaded) {
			setShouldFade(true);
		}
	}, [inView]);

	return shouldFade;
}
