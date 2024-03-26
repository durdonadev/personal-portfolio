import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/hero-img.png";
import IconLink from "../../../components/IconLink";
import Typewriter from "typewriter-effect";
import FileViewer from "../../../components/FileViewer";
import { HeroHeaderBase } from "../../../components/HeroHeaderBase";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-16);
    position: relative;

    @media (max-width: 60em) {
        flex-direction: column;
    }
`;

const HeroTextWrapper = styled.div`
    width: 60%;

    @media (max-width: 90em) {
        width: 55%;
    }

    @media (max-width: 70em) {
        width: 60%;
    }

    @media (max-width: 60em) {
        width: 100%;
        text-align: center;
    }
`;

const HeroHeading = styled(Typography)`
    color: var(--color-gray);
`;

const HeroParagraph = styled(Typography)`
    width: 70%;
    margin-bottom: var(--space-32);
    color: var(--color-text);

    @media (max-width: 60em) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: var(--space-32);
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const StyledTypewriterWrapper = styled.div`
    font-weight: var(--font-weight-700);
    font-size: 5.6rem;
    line-height: 6.4rem;
    margin-bottom: var(--space-24);
    color: var(--color-gray);

    @media (max-width: 40em) {
        font-size: 5rem;
        letter-spacing: -0.05em;
        margin-bottom: var(--space-20);
    }

    @media (max-width: 30em) {
        font-size: 4.4rem;
    }

    @media (max-width: 30em) {
        font-size: 3.4rem;
    }
`;
const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
    width: max-content;
    margin-bottom: var(--space-32);

    @media (max-width: 60em) {
        margin: 0 auto;
        margin-bottom: var(--space-32);
    }
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
    width: max-content;

    @media (max-width: 60em) {
        margin: 0 auto;
        margin-bottom: var(--space-32);
    }
`;

const HeroImgWrapper = styled.div`
    width: 40%;

    @media (max-width: 90em) {
        width: 45%;
    }

    @media (max-width: 70em) {
        width: 40%;
    }

    @media (max-width: 60em) {
        width: 80%;
        text-align: center;
    }

    @media (max-width: 50em) {
        width: 90%;
    }

    @media (max-width: 40em) {
        width: 100%;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
`;

const Hero = () => {
    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <HeroHeaderBase id="hero">
            <BaseContainer>
                <HeroTextWrapper>
                    <HeroHeading variant="h2">Hello, It's Durdona</HeroHeading>
                    <StyledTypewriterWrapper>
                        <Typewriter
                            options={{
                                strings: [
                                    "Web Developer",
                                    "Full Stack Engineer"
                                ],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </StyledTypewriterWrapper>

                    <HeroParagraph variant="paragraphMD" weight="normal">
                        Creative full stack web developer driven by a love for
                        coding and a passion for creating seamless user
                        experiences.
                    </HeroParagraph>
                    <Buttons>
                        <Button
                            size="lg"
                            shape="rounded"
                            color="secondary"
                            onClick={handleOnClick}
                        >
                            Hire Me
                        </Button>
                        <FileViewer />
                    </Buttons>

                    <SocialMedia>
                        <IconLink
                            href="https://github.com/durdonadev"
                            iconName="github-icon"
                        />
                        <Typography variant="paragraphSM" weight="normal">
                            Explore more on my GitHub
                        </Typography>
                    </SocialMedia>
                </HeroTextWrapper>

                <HeroImgWrapper>
                    <HeroImage src={hero} alt="Girl with laptop" />
                </HeroImgWrapper>
            </BaseContainer>
        </HeroHeaderBase>
    );
};

export { Hero };
