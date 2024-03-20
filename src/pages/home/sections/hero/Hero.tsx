import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/hero-shape.png";
import dots from "../../../../assets/images/dot-transparent.png";
import IconLink from "../../../components/IconLink";
import Typewriter from "typewriter-effect";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-25);
    padding-bottom: var(--space-0);
    position: relative;
`;

const HeroTextWrapper = styled.div`
    width: 50%;

    .heading {
        color: var(--color-gray);
        letter-spacing: -0.04em;
    }

    .description {
        width: 70%;
        line-height: 3.2rem;
        margin-bottom: var(--space-32);
        color: var(--color-text);
    }

    @media (max-width: 69em) {
        //1104
        width: 55%;
    }
`;

const StyledTypewriterWrapper = styled.div`
    font-weight: var(--font-weight-700);
    font-size: 6.4rem;
    line-height: var(--line-height-72);
    margin-bottom: var(--space-18);
    margin-bottom: var(--space-24);
    color: var(--color-gray);
    letter-spacing: -0.06em;

    @media (max-width: 90em) {
        //1440
        font-size: 6rem;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;

    gap: var(--space-12);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
    margin-bottom: var(--space-32);
`;

const HeroImgWrapper = styled.div`
    width: 50%;
    text-align: center;
    transition: all 1s;

    &:hover {
        transform: scale(1.05);
    }
    img {
        object-fit: contain;
        height: 72rem;
        width: auto;

        @media (max-width: 90em) {
            height: 62rem;
        }

        @media (max-width: 75em) {
            //1200
            height: 60rem;
        }

        /* @media (max-width: 69em) {
            //1104
            height: 48rem;
        } */
    }
`;

const Hero = () => {
    const githubLink = process.env.REACT_APP_GITHUB_LINK || "";

    return (
        <BaseContainer>
            <HeroTextWrapper>
                <Typography variant="h1" className="heading">
                    Hey there, It's <br></br> Durdona
                </Typography>
                <StyledTypewriterWrapper>
                    <Typewriter
                        options={{
                            strings: ["Web Developer", "Full Stack Engineer"],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </StyledTypewriterWrapper>

                <Typography
                    variant="paragraphMD"
                    weight="normal"
                    className="description"
                >
                    Creative full stack web developer driven by a love for
                    coding and a passion for creating seamless user experiences.
                </Typography>
                <Buttons>
                    <Button size="lg" shape="rounded" color="secondary">
                        Hire Me
                    </Button>
                    <Button
                        size="lg"
                        shape="rounded"
                        color="secondary"
                        variant="outlined"
                    >
                        Download Resume
                    </Button>
                </Buttons>

                <SocialMedia>
                    <IconLink href={githubLink} iconName="github-icon" />

                    <Typography variant="paragraphSM" weight="normal">
                        Explore more on my GitHub
                    </Typography>
                </SocialMedia>
            </HeroTextWrapper>

            <HeroImgWrapper>
                <img src={hero} alt="Girl with laptop" />
            </HeroImgWrapper>
        </BaseContainer>
    );
};

export { Hero };
