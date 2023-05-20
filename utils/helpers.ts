/** @format */

// These two are just helpers, they curate spring data, values that are later being interpolated into css
export const to = (i: number) => ({
	x: 0,
	y: i * -8,
	scale: 1,
	rot: 0,
	delay: i * 100
});
export const from = (_i: number) => ({ x: 0, rot: 0, scale: 1, y: -80 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
export const trans = (r: number, s: number) =>
	`rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
