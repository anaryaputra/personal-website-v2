import { useMediaQuery } from '@mui/material';
import { ReactNode, createContext, useContext } from 'react';

const IsDesktopContext = createContext<boolean>(false);

type IsDesktopProviderProps = {
	children: ReactNode;
};

export function IsDesktopProvider({ children }: IsDesktopProviderProps) {
	const isDesktop = useMediaQuery('(min-width:1024px)');

	return <IsDesktopContext.Provider value={isDesktop}>{children}</IsDesktopContext.Provider>;
}

export function useIsDesktopContext() {
	return useContext(IsDesktopContext);
}
