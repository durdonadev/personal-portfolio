import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/hero-img.png";
import IconLink from "../../../components/IconLink";
import Typewriter from "typewriter-effect";
import FileViewer from "../../../components/FileViewer";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-25);
    padding-bottom: var(--space-0);
    position: relative;

    @media (max-width: 57em) {
        //912
        display: block;
    }
`;

const HeroTextWrapper = styled.div`
    width: 50%;

    .heading {
        color: var(--color-gray);
        letter-spacing: -0.04em;

        @media (max-width: 40em) {
            //1104
            font-size: 5rem;
            line-height: 1.25;
        }
    }

    .description {
        width: 70%;
        font-size: 18px;
        line-height: 3.2rem;
        margin-bottom: var(--space-32);
        color: var(--color-text);

        @media (max-width: 57em) {
            width: 80%;
            font-size: 18px;
            margin: 0 auto;
            margin-bottom: var(--space-32);
        }

        @media (max-width: 40em) {
            width: 90%;
            font-size: 15px;
            line-height: 1.5;
        }
    }

    @media (max-width: 69em) {
        //1104
        width: 55%;
    }

    @media (max-width: 57em) {
        //912
        width: 100%;
        text-align: center;
        padding-top: 2rem;
    }
`;

const StyledTypewriterWrapper = styled.div`
    font-weight: var(--font-weight-700);
    font-size: 6.4rem;
    line-height: 1.25;
    margin-bottom: var(--space-24);
    color: var(--color-gray);
    letter-spacing: -0.06em;

    @media (max-width: 90em) {
        font-size: 6rem;
    }

    @media (max-width: 40em) {
        font-size: 5rem;
        margin-bottom: var(--space-20);
    }

    @media (max-width: 27.5em) {
        font-size: 4rem;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
    width: max-content;

    @media (max-width: 57em) {
        margin: 0 auto;
        margin-bottom: var(--space-32);
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
    width: max-content;
    margin-bottom: var(--space-32);

    @media (max-width: 57em) {
        margin: 0 auto;
        margin-bottom: var(--space-32);
    }
`;

const HeroImgWrapper = styled.div`
    width: 50%;
    text-align: center;
    /* transition: all 1s;

    &:hover {
        transform: scale(1.05);
    } */
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

        @media (max-width: 57em) {
            height: 72rem;
            text-align: center;
        }

        @media (max-width: 44em) {
            //704
            height: 60rem;
        }

        @media (max-width: 38em) {
            //608
            height: 54rem;
        }

        @media (max-width: 32em) {
            //512
            height: 48rem;
        }

        @media (max-width: 26em) {
            //416
            height: 44rem;
        }

        @media (max-width: 23em) {
            //416
            height: 38rem;
        }
    }

    @media (max-width: 57em) {
        width: 100%;
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
                    variant="paragraphLG"
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
                    <FileViewer />
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
