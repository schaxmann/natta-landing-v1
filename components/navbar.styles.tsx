/** @format */

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	color: white;
	z-index: 10;
`;

export const Para = styled.a`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 700;
	font-size: 26px;
	color: white;
	margin: 20px;
	:hover {
		color: #3eae93;
		cursor: pointer;
	}
`;

export const LogoutButton = styled.button`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 700;
	font-size: 20px;
	color: black;
	background-color: white;
	padding: 5px;
	padding-top: 7px;
	border-radius: 5px;
	width: 120px;
	border: 0;
	height: 40px;
	transition-duration: 0.1s;
	&:hover {
		background-color: #3eae93;
		cursor: pointer;
		color: black;
		// text-decoration: underline;
	}
`;

export const Menu = styled.img`
	height: 25px;
	width: 25px;
	margin-right: 20px;
	:hover {
		cursor: pointer;
		filter: brightness(5000%);
	}
`;
