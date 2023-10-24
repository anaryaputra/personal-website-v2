/**
 * Module Imports
 */
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
export interface UseFadeProps {
	inView: boolean;
	isLoaded: boolean;
}

/**
 * useFade Hooks
 */
export const useFade = ({ inView, isLoaded }: UseFadeProps): boolean => {
	const [shouldFade, setShouldFade] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (inView && !isLoaded) {
			setShouldFade(true);
		}
	}, [inView]);

	return shouldFade;
};
