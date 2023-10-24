/**
 * Module Imports
 */
import React from 'react';

/**
 * Interface Declarations
 */
interface UseLaodedProps {
	inView: boolean;
}

/**
 * useLoaded Hooks
 */
export const useLoaded = ({ inView }: UseLaodedProps): boolean => {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

	React.useEffect(() => {
		function getIsLoaded() {
			return isLoaded;
		}

		if (inView && !getIsLoaded()) {
			setIsLoaded(true);
		}
	}, [inView]);

	return isLoaded;
};
