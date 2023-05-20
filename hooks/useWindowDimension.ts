/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 *
 * @format
 */

import { useEffect, useState } from 'react';

type WindowDimentions = {
	width: number | undefined;
	height: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
		width: undefined,
		height: undefined
	});

	function handleResize(): void {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return (): void => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowDimensions;
};

export default useWindowDimensions;
