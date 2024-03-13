import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/me2.png";
import dots from "../../../../assets/images/dot-transparent.png";
import IconLink from "../../../components/IconLink";

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

    img {
        width: 4rem;
    }

    .greeting {
        color: #0fa49d;
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

    img {
        z-index: -2;
        opacity: 0.1;
        object-fit: contain;
        height: 30.5rem;
        width: auto;
    }
`;

const Position = styled(Typography)`
    margin-bottom: var(--space-20);
    color: var(--primary-600);
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const HeroImgWrapper = styled.div`
    width: 52rem;
    text-align: center;
    background-color: #ffc400;
    border-radius: 17rem 12rem 1.5rem 10rem;
    transition: all 1s;

    &:hover {
        transform: scale(1.07);
    }
    img {
        object-fit: contain;
        height: 58rem;
        width: auto;
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
                <Position variant="h2" weight="bold">
                    Web Developer
                </Position>
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
