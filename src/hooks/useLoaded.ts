import { useEffect, useState } from 'react';

type UseLaodedProps = {
	inView: boolean;
};

export default function useLoaded({ inView }: UseLaodedProps) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		function getIsLoaded() {
			return isLoaded;
		}

		if (inView && !getIsLoaded()) {
			setIsLoaded(true);
		}
	}, [inView]);

	return isLoaded;
}
