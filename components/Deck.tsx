/** @format */

import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

import styles from '../styles/Deck.module.css';
import { from, to, trans } from '@/utils/helpers';
import { cards } from '@/utils/constants';
import {
	AgainButton,
	CompatControls,
	CompatDotDiv,
	CompatWord,
	MatchIcon,
	NoMatchIcon,
	WhiteDot
} from './Deck.styles';

function Deck() {
	const [complete, setComplete] = useState(false);
	const [outcome, setOutcome] = useState(true);
	const [circle1, setCircle1] = useState(1);
	const [circle2, setCircle2] = useState(0.2);
	const [circle3, setCircle3] = useState(0.2);
	const [circle4, setCircle4] = useState(0.2);
	const [circle5, setCircle5] = useState(0.2);

	let likes = 0;
	let dislikes = 0;

	const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
	const [props, api] = useSprings(cards.length, (i) => ({
		...to(i),
		from: from(i)
	})); // Create a bunch of springs using the helpers above

	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			if (!down && trigger) {
				if (index === 8) {
					setCircle1(0.2);
					setCircle2(1);
				}
				if (index === 6) {
					setCircle2(0.2);
					setCircle3(1);
				}
				if (index === 4) {
					setCircle3(0.2);
					setCircle4(1);
				}
				if (index === 2) {
					setCircle4(0.2);
					setCircle5(1);
				}
				if (index === 0) {
					setCircle5(0.2);
				}
				if ((index % 2 === 0 && dir === 1) || (index % 2 === 1 && dir === -1)) {
					likes++;
				} else {
					dislikes++;
				}
				gone.add(index);
			} // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			api.start((i) => {
				if (index !== i) return; // We're only interested in changing spring-data for the current spring
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
				const rot = mx / 50 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
				const scale = down ? 1.1 : 1; // Active cards lift up a bit
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
				};
			});
			if (!down && gone.size === cards.length) {
				if (likes > dislikes || likes === dislikes) {
					setOutcome(true);
				} else {
					setOutcome(false);
				}
				setComplete(true);
				likes = 0;
				dislikes = 0;
				setTimeout(() => {
					gone.clear();
					api.start((i) => to(i));
				}, 600);
			}
		}
	);

	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{complete && (
				<div className={styles.outcome}>
					{outcome ? (
						<>
							<MatchIcon src='img/match.png' />
							<h2 className={styles.yesheader}>We were made for each other!</h2>
							<h4 className={styles.yessubheader}>
								When can we meet your parents?
							</h4>
						</>
					) : (
						<>
							<NoMatchIcon src='img/failure.png' />
							<h2 className={styles.header}>
								It&rsquo;s not us, it&rsquo;s you...
							</h2>
							<h4 className={styles.subheader}> You may need clinical help.</h4>
						</>
					)}
					<AgainButton
						onClick={(e) => {
							setComplete(false);
							setCircle1(1);
						}}
					>
						Try Again
					</AgainButton>
				</div>
			)}
			{props.map(({ x, y, rot, scale }, i) => (
				<animated.div className={styles.deck} key={i} style={{ x, y }}>
					{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					<animated.div
						{...bind(i)}
						style={{
							backgroundColor: 'white',
							transform: interpolate([rot, scale], trans),
							backgroundImage: `url(${cards[i]})`
						}}
					/>
				</animated.div>
			))}
			<CompatControls>
				<CompatWord>Swipe left or right</CompatWord>
			</CompatControls>
			<CompatDotDiv>
				<WhiteDot src='img/circle.png' style={{ opacity: circle1 }} />
				<WhiteDot src='img/circle.png' style={{ opacity: circle2 }} />
				<WhiteDot src='img/circle.png' style={{ opacity: circle3 }} />
				<WhiteDot src='img/circle.png' style={{ opacity: circle4 }} />
				<WhiteDot src='img/circle.png' style={{ opacity: circle5 }} />
			</CompatDotDiv>
		</>
	);
}

export default Deck;
