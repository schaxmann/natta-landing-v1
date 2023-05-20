/** @format */

import { useEffect, useRef, useState, useCallback } from 'react';
import type { NextPage } from 'next';
import { useDrag } from 'react-use-gesture';
import { swing } from 'react-scrollchor';
import Deck from '@/components/Deck';
import swipe from '../animations/swipe-right.json';
import useWindowDimensions from '@/hooks/useWindowDimension';
import {
	AnimationDiv,
	BackTicketImage,
	Chevron,
	CompatDiv,
	CompatSub,
	CompatTitle,
	Container,
	DetailTitle,
	Feedback,
	FeedbackButton,
	FeedbackDiv,
	FeedbackTitle,
	Footer,
	FooterDiv,
	FormDiv,
	FriendDetailTitle,
	GreenSpan,
	LastPara,
	LearnMore,
	LearnMoreText,
	Name,
	NattaTitle,
	Number,
	Para,
	ParaDiv,
	StyledScrollchor,
	SubmitButton,
	SubmitDiv,
	Subtitle,
	SuccessIcon,
	SuccessTitle,
	SuccessTitleTwo,
	SwipeAnimation,
	TealSpan,
	TicketDiv,
	TicketImage,
	TopTitle,
	VideoTemp
} from './index.styles';

const Landing: NextPage = () => {
	const [spin, setSpin] = useState(false);
	const [straight, setStraight] = useState(false);
	const { width, height } = useWindowDimensions();
	const scrollRef = useRef(null);
	// useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
	const [animation, setAnimation] = useState(true);
	const [selfSubmitted, SetSelfSubmitted] = useState(false);
	const [otherSubmitted, SetOtherSubmitted] = useState(false);
	const [yourName, setYourName] = useState('');

	const handleSpin = useCallback(() => {
		setSpin((prev) => !prev);
		setStraight(false);
		setAnimation(false);
	}, []);

	const onNameChanged = useCallback((e: { target: { value: string } }) => {
		setYourName(e.target.value);
	}, []);

	const submit = useCallback(() => {
		SetOtherSubmitted(true);
	}, []);

	useEffect(() => {
		if (spin) {
			setStraight(true);
		}
	}, [spin]);

	const bind = useDrag(
		({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
			console.log(down, mx, xDir, velocity);
			if (mx) {
				handleSpin();
			}
		}
	);

	return (
		<div ref={scrollRef}>
			<Container height={height} width={width}>
				{animation && (
					<AnimationDiv {...bind()}>
						<SwipeAnimation animationData={swipe} {...bind()} />
					</AnimationDiv>
				)}
				<TicketDiv
					spin={spin}
					straight={straight}
					height={height}
					width={width}
					{...bind()}
				>
					<TicketImage
						spin={spin}
						straight={straight}
						src='img/MainTicket.png'
					/>
					<BackTicketImage spin={spin} straight={straight} {...bind()}>
						{selfSubmitted ? (
							<FormDiv>
								<TopTitle>
									Your spot is reserved
									<GreenSpan>133 remaining</GreenSpan>
								</TopTitle>
								<SuccessTitle>
									We think we might like like you,{' '}
									{yourName.substring(0, yourName.indexOf(' '))}.
								</SuccessTitle>
								<SuccessIcon src='img/success.png' />
							</FormDiv>
						) : (
							<FormDiv>
								<TopTitle>
									Reserve your spot
									<GreenSpan>134 remaining</GreenSpan>
								</TopTitle>
								<DetailTitle>Your details:</DetailTitle>
								<Name
									type='text'
									placeholder='Full Name'
									onChange={onNameChanged}
								></Name>
								<Number type='tel' placeholder='Phone Number'></Number>
								<SubmitDiv>
									<SubmitButton onClick={() => SetSelfSubmitted(true)}>
										Submit
									</SubmitButton>
								</SubmitDiv>
							</FormDiv>
						)}
						{otherSubmitted ? (
							<FormDiv>
								<SuccessTitleTwo>
									Let&rsquo;s fly to Vegas and get married.
								</SuccessTitleTwo>
								<SuccessIcon src='img/success.png' />
							</FormDiv>
						) : (
							<FormDiv>
								<FriendDetailTitle>
									Your Friend&rsquo;s details:
								</FriendDetailTitle>
								<Name type='text' placeholder='Full Name'></Name>
								<Number type='tel' placeholder='Phone Number'></Number>
								<SubmitDiv>
									<SubmitButton onClick={submit}>Submit</SubmitButton>
								</SubmitDiv>
							</FormDiv>
						)}
					</BackTicketImage>
				</TicketDiv>
				<LearnMore>
					<StyledScrollchor
						to='section-2'
						animate={{ duration: 800, easing: swing }}
					>
						<LearnMoreText>Learn</LearnMoreText>
						<Chevron src='img/chevron.png' alt='chevron' />
						more
					</StyledScrollchor>
				</LearnMore>
			</Container>
			<Container height={height} width={width} id='section-2'>
				<VideoTemp height={height} width={width} src='img/VideoDiv.png' />
			</Container>
			<Container height={height} width={width}>
				<CompatDiv height={height} width={width}>
					<CompatTitle>Compatitibility Test</CompatTitle>
					<CompatSub>Are you a match for natta?</CompatSub>
					<div style={{ height: '360px', width: '400px' }}></div>
					<Deck />
				</CompatDiv>
			</Container>
			<Container height={height} width={width}>
				<ParaDiv height={height} width={width}>
					<NattaTitle>
						natta <TealSpan>x</TealSpan> UoB
					</NattaTitle>
					<Subtitle>What&rsquo;s the deal?</Subtitle>
					<Para>
						If you&rsquo;ve chosen to study in Brum, you must have exquisite
						taste...
					</Para>
					<Para>
						We&rsquo;d like to borrow it to shape the best dating app in the
						world.
					</Para>
					<Subtitle>The goal</Subtitle>
					<Para>Our mission is to create your favourite dating app. </Para>
					<Para>
						But to do it, we need you to roast us; tell us all our flaws so we
						can do better.
					</Para>
					<Subtitle>The promise</Subtitle>
					<Para>
						In return, we promise to not stop refining and perfecting until
						we&rsquo;ve built the perfect app, especially for you.
					</Para>
					<LastPara>Literally you, reading this, right now.</LastPara>
				</ParaDiv>
			</Container>
			<Container height={height} width={width}>
				<FeedbackDiv height={height} width={width}>
					<FeedbackTitle>Still Scrolling?</FeedbackTitle>
					<Para>
						If you&rsquo;ve got this far and think this sounds as shit as other
						dating apps, we&rsquo;d love to know why...
					</Para>
					<Feedback placeholder='This sounds shit because...'></Feedback>
					<Feedback placeholder='I would hate it less if...'></Feedback>
					<FeedbackButton>Submit</FeedbackButton>
				</FeedbackDiv>
			</Container>
			<FooterDiv>
				<Footer> © 2023 Natta Chat Ltd</Footer>
			</FooterDiv>
		</div>
	);
};

export default Landing;
