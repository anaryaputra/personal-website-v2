/**
 * Module Imports
 */
/** Material UI */
import { useMediaQuery } from '@mui/material';
/** React */
import React from 'react';

/**
 * Interface Declarations
 */
interface IsDesktopProviderProps {
	children: React.ReactNode;
}

/**
 * Context
 */
const IsDesktopContext = React.createContext<boolean>(false);

export const IsDesktopProvider = ({ children }: IsDesktopProviderProps): React.JSX.Element => {
	const isDesktop: boolean = useMediaQuery('(min-width:1024px)');

	return <IsDesktopContext.Provider value={isDesktop}>{children}</IsDesktopContext.Provider>;
};

export const useIsDesktopContext = (): boolean => {
	return React.useContext(IsDesktopContext);
};
