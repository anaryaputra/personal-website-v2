export const openInNewTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, url: string | URL | undefined) => {
	e.preventDefault();
	window.open(url, '_blank');
};
