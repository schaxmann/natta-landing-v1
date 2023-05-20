/** @format */
import styled from 'styled-components';

export const CompatControls = styled.div`
	width: 200px;
	height: 72.669322708px;
	background-image: url('img/CompatControls.png');
	background-size: contain;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 500;
	margin-top: 80px;
	position: relative;
	top: 30px;
`;

export const CompatWord = styled.p`
	position: relative;
	top: -24px;
	font-size: 16px;
`;

export const CompatDotDiv = styled.div`
	height: 50px;
	width: 150px;
	justify-self: center;
	align-self: center;
	top: 580px;
	display: flex;
	gap: 16px;
	align-content: center;
	justify-content: center;
`;

export const WhiteDot = styled.img`
	height: 12px;
	width: 12px;
	opacity: 0.4;
`;

export const AgainButton = styled.button`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 500;
	background-color: black;
	width: 26%;
	height: 100%;
	background-color: black;
	color: white;
	border: solid 2px white;
	border-radius: 4px;
	margin: 0;
	padding: 0;
	padding: 0;
	padding-left: 1.5vh;
	padding-top: 0.4vh;
	padding-right: 1px;
	font-size: 1.8vh;
	text-align: left;
	box-sizing: content-box;
	height: 27px;
	width: 35%;
	text-align: center;
	padding: 0;
	padding-top: 2px;
	border-radius: 8px;
	margin: 0;
	position: absolute;
	bottom: 25px;
	font-size: 12px;
	:hover {
		background-color: hsla(360, 100%, 100%, 0.1);
		cursor: pointer;
	}
`;

export const MatchIcon = styled.img`
	height: 40px;
	width: 40px;
	position: absolute;
	top: 28px;
`;

export const NoMatchIcon = styled.img`
	height: 40px;
	width: 40px;
	position: absolute;
	top: 48px;
`;
