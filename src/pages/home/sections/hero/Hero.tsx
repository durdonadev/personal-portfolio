import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/shape-me.png";
import dots from "../../../../assets/images/dot-transparent.png";
import IconLink from "../../../components/IconLink";
import Typewriter from "typewriter-effect";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-10);
    padding-bottom: var(--space-10);
    position: relative;
`;

const HeroTextWrapper = styled.div`
    width: 50%;

    .greeting {
        margin-bottom: var(--space-12);
    }

    .heading {
        margin-bottom: var(--space-20);
    }

    .description {
        margin-bottom: var(--space-40);
        color: var(--gray-600);
    }
`;

const BackgroundDotsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 14.1rem;

    @media (max-width: 106em) {
        //1700
        left: 10rem;
    }

    @media (max-width: 100em) {
        //1600
        left: 8rem;
    }

    img {
        z-index: -2;
        opacity: 0.1;
        object-fit: contain;
        height: 30.5rem;
        width: auto;

        @media (max-width: 106em) {
            //1700
            height: 28rem;
        }

        @media (max-width: 100em) {
            //1600
            height: 26rem;
        }

        @media (max-width: 90em) {
            //1440
            height: 24rem;
        }

        @media (max-width: 82em) {
            //1300
            height: 22rem;
        }
    }
`;

const StyledTypewriterWrapper = styled.div`
    font-weight: var(--font-weight-700);
    font-size: 5.2rem;
    line-height: var(--line-height-64);
    margin-bottom: var(--space-20);
    color: var(--primary-600);
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const HeroImgWrapper = styled.div`
    width: 40%;
    text-align: center;

    transition: all 1s;

    &:hover {
        transform: scale(1.03);
    }
    img {
        border-radius: 50%;
        object-fit: contain;
        height: 58rem;
        width: auto;

        @media (max-width: 90em) {
            height: 52rem;
        }
    }
`;

const Hero = () => {
    const githubLink = process.env.REACT_APP_GITHUB_LINK || "";
    const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK || "";
    const twitterLink = process.env.REACT_APP_TWITTER_LINK || "";

    return (
        <BaseContainer>
            <HeroTextWrapper>
                <Typography
                    variant="paragraphLG"
                    weight="bold"
                    className="greeting"
                >
                    Hey There, It's
                </Typography>

                <StyledTypewriterWrapper>
                    <Typewriter
                        options={{
                            strings: ["Web Developer", "Full Stack Engeneer"],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </StyledTypewriterWrapper>

                <Typography variant="h1" className="heading">
                    Durdona Ibragimova
                </Typography>
                <Typography
                    variant="paragraphMD"
                    weight="bold"
                    className="description"
                >
                    Creative full stack web developer driven by a love for
                    coding and a passion for creating seamless user experiences.
                    I am coding with a clean and beautiful problem solving in
                    mind
                </Typography>
                <SocialMedia>
                    <IconLink href={linkedinLink} iconName="linkdin-icon" />
                    <IconLink href={githubLink} iconName="github-icon" />
                    <IconLink href={twitterLink} iconName="twitter-icon" />
                </SocialMedia>
            </HeroTextWrapper>
            <BackgroundDotsWrapper>
                <img src={dots} alt="dots" />
            </BackgroundDotsWrapper>
            <HeroImgWrapper>
                <img src={hero} alt="Girl with laptop" />
            </HeroImgWrapper>
        </BaseContainer>
    );
};

export { Hero };
