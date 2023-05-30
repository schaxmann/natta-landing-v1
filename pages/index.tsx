import useWindowDimensions from "@/hooks/useWindowDimension";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useScrollSnap from "react-use-scroll-snap";
import Deck from "@/components/compatability";
import { useDrag } from "react-use-gesture";
import Lottie from "lottie-react";
import swipe from "../animations/swipe-right.json";
import { Scrollchor, swing } from "react-scrollchor";

interface Props {
  spin: boolean;
  straight: boolean;
}

interface Dimensions {
  height: number | undefined;
  width: number | undefined;
}

interface DivProps extends Props, Dimensions {}

export const Container = styled.div<Dimensions>`
  height: 100lvh;
  width: 100svw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const SmallContainer = styled(Container)`
  height: 100svh;
`;

export const DeckContainer = styled(Container)`
  overscroll-behavior-y: contain;
  overflow: hidden;
  position: absolute;
`;

export const TicketDiv = styled.div<DivProps>`
  height: 80svh;
  width: 38.7786259528svh;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.spin && "rotateY(180deg)"};
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

const FeedbackDiv = styled.div<Dimensions>`
  width: ${(dimensions) => dimensions.width && `${dimensions.width * 0.75}px`};
  color: white;
  padding-bottom: 0px;
`;

const CompatDiv = styled.div<Dimensions>`
  width: 75vw;
  color: white;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overscroll-behavior-y: contain;
  overflow: hidden;
`;

export const NattaTitle = styled.h2`
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 600;
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
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 700;
  font-size: 18px;
  padding: 0;
  margin: 0;
  padding-top: 25px;
`;

export const FeedbackTitle = styled(Subtitle)`
  padding-top: 0px;
`;

export const Para = styled.p`
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 400;
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
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 500;
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
  transform: ${(props) => props.spin && "rotate(0deg)"};
  outline: 1px solid transparent;
  touch-action: none;
`;

export const BackTicketImage = styled.div<Props>`
  touch-action: none;
  outline: 1px solid transparent;
  height: 100%;
  width: 100%;
  background-image: url("ticketOutline.png");
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
  transform: ${(props) => props.spin && "rotateY(180deg) rotate(4deg)"};
  ${(props) =>
    props.straight &&
    css`
      transition: all 0.3s ease 0.5s;
      transform: rotateY(180deg) rotate(0deg);
    `};
`;

export const LogoutButton = styled.button`
  position: absolute;
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 700;
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
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 700;
  font-size: 20px;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4%;
`;

export const Name = styled.input`
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 500;
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
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 400;
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
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 550;
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
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 400;
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
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 500;
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

const FeedbackButton = styled.button`
  font-family: "indivisible-variable";
  font-variation-settings: "wght" 500;
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

const AnimationDiv = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  z-index: 30;
  border-radius: 20px;
  padding: 0;
  opacity: 50%;
`;

const SubmitDiv = styled.div`
  width: 75%;
  height: 10%;
  align-self: center;
  padding: 0;
  margin: 0;
`;

export const GreenSpan = styled.span`
  color: #3eae93;
  font-variation-settings: "wght" 400;
  display: block;
  margin: 0;
  padding-top: 0.4vw;
`;

const DimensionsDiv = styled.div<Dimensions>`
  position: absolute;
  top: 0px;
  left: 10px;
  color: white;
  background-color: red;
  height: ${(dimensions) =>
    dimensions.height && `${dimensions.height * 0.9}px`};
`;

const CompatSub = styled(Para)`
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 400;
  font-size: 16px;
  position: relative;
  top: 50px;
`;

const CompatTitle = styled(FeedbackTitle)`
  font-size: 24px;
  position: relative;
  top: 50px;
`;

const LearnMore = styled.div`
  width: 200px;
  height: 50px;
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 500;
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
  color: white;
  gap: 10px;
  position: relative;
  top: 12px;
  z-index: 500;

  :hover {
    cursor: pointer;
  }
`;

const LearnMoreText = styled.p`
  margin-bottom: 10px;
  display: inline;
`;

const VideoTemp = styled.img<Dimensions>`
  width: 40.9759326107svh;
  height: 85svh;
  padding-top: 30px;
`;

const Landing: NextPage = () => {
  const [spin, setSpin] = useState(false);
  const [straight, setStraight] = useState(false);
  const { width, height } = useWindowDimensions();
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  const [animation, setAnimation] = useState(true);
  const [selfSubmitted, SetSelfSubmitted] = useState(false);
  const [otherSubmitted, SetOtherSubmitted] = useState(false);
  const [yourName, setYourName] = useState("");

  const handleSpin = () => {
    setSpin(!spin);
    setStraight(false);
    setAnimation(false);
  };

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
      <SmallContainer height={height} width={width}>
        {animation && (
          <AnimationDiv {...bind()}>
            <Lottie
              animationData={swipe}
              style={{
                height: "200px",
                width: "200px",
                position: "relative",
                right: "60px",
                bottom: "50px",
              }}
              {...bind()}
            />
          </AnimationDiv>
        )}
        <TicketDiv
          spin={spin}
          straight={straight}
          height={height}
          width={width}
          {...bind()}
        >
          <TicketImage spin={spin} straight={straight} src="MainTicket.png" />
          <BackTicketImage spin={spin} straight={straight} {...bind()}>
            {selfSubmitted ? (
              <FormDiv>
                <TopTitle>
                  Your spot is reserved
                  <GreenSpan>133 remaining</GreenSpan>
                </TopTitle>
                <SuccessTitle>
                  We think we might like like you,{" "}
                  {yourName.substring(0, yourName.indexOf(" "))}.
                </SuccessTitle>
                <SuccessIcon src="/success.png" />
              </FormDiv>
            ) : (
              <FormDiv>
                <TopTitle>
                  Reserve your spot
                  <GreenSpan>134 remaining</GreenSpan>
                </TopTitle>
                <DetailTitle>Your details:</DetailTitle>
                <Name
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setYourName(e.target.value)}
                ></Name>
                <Number type="tel" placeholder="Phone Number"></Number>
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
                <SuccessIcon src="/success.png" />
              </FormDiv>
            ) : (
              <FormDiv>
                <FriendDetailTitle>
                  Your Friend&rsquo;s details:
                </FriendDetailTitle>
                <Name type="text" placeholder="Full Name"></Name>
                <Number type="tel" placeholder="Phone Number"></Number>
                <SubmitDiv>
                  <SubmitButton onClick={() => SetOtherSubmitted(true)}>
                    Submit
                  </SubmitButton>
                </SubmitDiv>
              </FormDiv>
            )}
          </BackTicketImage>
        </TicketDiv>
        <LearnMore>
          <Scrollchor
            to="section-2"
            animate={{ duration: 800, easing: swing }}
            style={{
              textDecoration: "none",
              color: "white",
              padding: "0",
              paddingBottom: "10px",
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LearnMoreText>Learn</LearnMoreText>
            <img
              src="/chevron.png"
              alt="chevron"
              style={{ height: "20px", marginTop: "5px" }}
            />
            more
          </Scrollchor>
        </LearnMore>
      </SmallContainer>
      <Container height={height} width={width} id="section-2">
        {/* <VideoTemp height={height} width={width} src="VideoDiv.png" /> */}
        <div
          style={{ height: "100vh" }}
          className="muse-video-player"
          data-video="bMacWjd"
          data-search="0"
          data-links="0"
          data-logo="0"
          data-title="0"
          data-sizing="fit"
          data-coverplayposition="center"
        ></div>
        <script src="https://muse.ai/static/js/embed-player.min.js"></script>
      </Container>
      <DeckContainer height={height} width={width}>
        <CompatDiv height={height} width={width}>
          <CompatTitle>Compatitibility Test</CompatTitle>
          <CompatSub>Are you a match for natta?</CompatSub>
          <div style={{ height: "360px", width: "400px" }}></div>
          <Deck />
        </CompatDiv>
      </DeckContainer>
      <SmallContainer height={height} width={width}></SmallContainer>
      <SmallContainer height={height} width={width}>
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
      </SmallContainer>
      <SmallContainer height={height} width={width}>
        <FeedbackDiv height={height} width={width}>
          <FeedbackTitle>Still Scrolling?</FeedbackTitle>
          <Para>
            If you&rsquo;ve got this far and think this sounds as shit as other
            dating apps, we&rsquo;d love to know why...
          </Para>
          <Feedback placeholder="This sounds shit because..."></Feedback>
          <Feedback placeholder="I would hate it less if..."></Feedback>
          <FeedbackButton>Submit</FeedbackButton>
        </FeedbackDiv>
      </SmallContainer>
      <FooterDiv>
        <Footer> © 2023 Natta Chat Ltd</Footer>
      </FooterDiv>
    </div>
  );
};

export default Landing;
