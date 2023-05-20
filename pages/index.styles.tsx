/** @format */
import styled, { css } from 'styled-components';
import Lottie from 'lottie-react';
import { Scrollchor } from 'react-scrollchor';

interface Props {
	spin: boolean;
	straight: boolean;
}

interface Dimensions {
	height: number | undefined;
	width: number | undefined;
}

interface DivProps extends Props, Dimensions {}

export const SwipeAnimation = styled(Lottie)`
	height: 200px;
	width: 200px;
	position: relative;
	right: 60px;
	bottom: 50px;
`;

export const Container = styled.div<Dimensions>`
	height: 100svh;
	width: 100svw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

export const TicketDiv = styled.div<DivProps>`
	height: 80svh;
	width: 38.7786259528svh;
	transform-style: preserve-3d;
	transition: all 0.8s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: ${(props) => props.spin && 'rotateY(180deg)'};
	margin-top: 50px;
	@media (max-width: 500px) {
		margin-top: 80px;
	}
`;

export const TicketOverlay = styled.div`
	height: 80svh;
	width: 38.7786259528svh;
	position: absolute;
	z-index: 300;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 500px) {
		margin-top: 20px;
	}
	/* :hover {
    transform: rotateY(180deg);
  } */
`;

export const ParaDiv = styled.div<Dimensions>`
	width: ${(dimensions) => dimensions.width && `${dimensions.width * 0.75}px`};
	color: white;
	padding-bottom: 0px;
`;

export const FeedbackDiv = styled.div<Dimensions>`
	width: ${(dimensions) => dimensions.width && `${dimensions.width * 0.75}px`};
	color: white;
	padding-bottom: 0px;
`;

export const CompatDiv = styled.div<Dimensions>`
	width: ${(dimensions) => dimensions.width && `${dimensions.width * 0.75}px`};
	color: white;
	padding-bottom: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const NattaTitle = styled.h2`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 600;
	font-size: 40px;
	line-height: 127%;
	padding: 0;
	margin: 0;
	/* margin-top: 40px;
  margin-bottom: 10px; */
`;

export const TealSpan = styled.span`
	color: #3eae93;
`;

export const Subtitle = styled.h3`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 700;
	font-size: 18px;
	padding: 0;
	margin: 0;
	padding-top: 25px;
`;

export const FeedbackTitle = styled(Subtitle)`
	padding-top: 0px;
`;

export const Para = styled.p`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 400;
	font-size: 18px;
	line-height: 120%;
`;

export const LastPara = styled(Para)`
	margin: 0;
`;

export const FooterDiv = styled.div`
	width: 100%;
	display: flex;
	flex-grow: 0.5;
	justify-content: center;
	position: sticky;
	bottom: 0px;
`;

export const Footer = styled.p`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 500;
	color: white;
	font-size: 10px;
`;

export const TicketImage = styled.img<Props>`
	height: 100%;
	width: 100%;
	position: absolute;
	backface-visibility: hidden;
	transform: rotate(4deg);
	transition: all 0.8s ease;
	transform: ${(props: { spin: any }) => props.spin && 'rotate(0deg)'};
	outline: 1px solid transparent;
	touch-action: none;
`;

export const BackTicketImage = styled.div<Props>`
	touch-action: none;
	outline: 1px solid transparent;
	height: 100%;
	width: 100%;
	background-image: url('img/ticketOutline.png');
	background-size: contain;
	position: absolute;
	color: white;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.8s ease;
	transform: rotateY(180deg) rotate(4deg);
	transform: ${(props: { spin: any }) =>
		props.spin && 'rotateY(180deg) rotate(4deg)'};
	${(props: { straight: any }) =>
		props.straight &&
		css`
			transition: all 0.3s ease 0.5s;
			transform: rotateY(180deg) rotate(0deg);
		`};
`;

export const LogoutButton = styled.button`
	position: absolute;
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 700;
	font-size: 20px;
	color: black;
	background-color: white;
	padding: 5px;
	padding-top: 7px;
	border-radius: 5px;
	width: 200px;
	border: 0;
	height: 40px;
	transition-duration: 0.1s;
	:hover {
		background-color: #3eae93;
		cursor: pointer;
		color: black;
		// text-decoration: underline;
	}
	margin-top: 200px;
	z-index: 10;
`;

export const SeconButton = styled(LogoutButton)`
	margin-top: 400px;
`;

export const FormDiv = styled.div`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 700;
	font-size: 20px;
	height: 50%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4%;
`;

export const Name = styled.input`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 500;
	font-size: 16px;
	width: 70%;
	height: 10%;
	background-color: black;
	color: white;
	border: solid 2px white;
	border-radius: 4px;
	margin: 0;
	padding: 0;
	padding-left: 1.5vh;
	padding-top: 0.4vh;
	align-self: center;
	:focus {
		outline: none;
	}
	::placeholder {
		color: white;
		padding: 0;
		margin: 0;
	}
`;

export const Feedback = styled.textarea`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 400;
	font-size: 1.8vh;
	width: 93%;
	height: 100px;
	background-color: black;
	color: white;
	border: solid 2px white;
	border-radius: 4px;
	margin: 0;
	padding: 0;
	padding-left: 5px;
	padding-top: 5px;
	margin-top: 20px;
	align-self: center;
	:focus {
		outline: none;
	}
	::placeholder {
		color: gray;
		padding: 0;
		margin: 0;
	}
`;

export const TopTitle = styled.h3`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 550;
	font-size: 2vh;
	margin: 0;
	padding: 3vh 10px 10px 2.7vh;
	line-height: 127%;
`;

export const Number = styled(Name)`
	margin-top: 0;
`;

export const DetailTitle = styled.h2`
	font-size: 2.5vh;
	margin: 0;
	padding: 2.5vh 10px 0 0;
	width: 70%;
	align-self: center;
`;

export const SuccessTitle = styled.h2`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 400;
	font-size: 30px;
	color: white;
	width: 70%;
	align-self: center;
	line-height: 127%;
`;

export const SuccessTitleTwo = styled(SuccessTitle)`
	padding-top: 60px;
	padding-bottom: 5px;
	width: 70%;
`;

export const SuccessIcon = styled.img`
	height: 50px;
	width: 50px;
	position: relative;
	left: 50px;
	bottom: 20px;
`;

export const FriendDetailTitle = styled(DetailTitle)`
	padding-top: 4.5vh;
	line-height: 1.5;
`;

export const SubmitButton = styled.button`
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
	:hover {
		background-color: hsla(360, 100%, 100%, 0.2);
		cursor: pointer;
	}
`;

export const FeedbackButton = styled.button`
	font-family: 'indivisible-variable';
	font-variation-settings: 'wght' 500;
	background-color: black;
	height: 35px;
	background-color: black;
	color: white;
	border: solid 2px white;
	border-radius: 4px;
	margin: 0;
	padding: 0;
	padding-left: 1.5vh;
	padding-right: 1.5vh;
	padding-top: 0.4vh;
	margin-top: 30px;
	font-size: 1.8vh;
	text-align: left;
	box-sizing: content-box;
	display: block;
	:hover {
		background-color: hsla(360, 100%, 100%, 0.2);
		cursor: pointer;
	}
`;

export const AnimationDiv = styled.div`
	height: 100px;
	width: 100px;
	position: absolute;
	z-index: 30;
	border-radius: 20px;
	padding: 0;
	opacity: 50%;
`;

export const SubmitDiv = styled.div`
	width: 75%;
	height: 10%;
	align-self: center;
	padding: 0;
	margin: 0;
`;

export const GreenSpan = styled.span`
	color: #3eae93;
	font-variation-settings: 'wght' 400;
	display: block;
	margin: 0;
	padding-top: 0.4vw;
`;

export const CompatSub = styled(Para)`
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 400;
	font-size: 16px;
	position: relative;
	top: 50px;
`;

export const CompatTitle = styled(FeedbackTitle)`
	font-size: 24px;
	position: relative;
	top: 50px;
`;

export const LearnMore = styled.div`
	width: 200px;
	height: 50px;
	font-family: 'Roc-Grotesk-Variable';
	font-variation-settings: 'wdth' 125, 'wght' 500;
	font-size: 16px;
	text-align: center;
	margin-bottom: 15px;
	color: white;
	gap: 10px;
	position: relative;
	top: 12px;

	:hover {
		cursor: pointer;
	}
`;

export const LearnMoreText = styled.p`
	margin-bottom: 10px;
	display: inline;
`;

export const VideoTemp = styled.img<Dimensions>`
	width: 40.9759326107svh;
	height: 85svh;
	padding-top: 30px;
`;

export const Chevron = styled.img`
	height: 20px;
	margin-top: 5px;
`;

export const StyledScrollchor = styled(Scrollchor)`
	text-decoration: none;
	color: white;
	padding: 0;
	padding-bottom: 10px;
	align-self: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
