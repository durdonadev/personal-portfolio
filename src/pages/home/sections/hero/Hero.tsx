import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/developer.png";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    gap: var(--space-100);
`;

const HeroTextWrapper = styled.div`
    width: 50%;

    .heading,
    .description {
        margin-bottom: var(--space-40);
    }

    .description {
        font-weight: 600;
        color: var(--primary-500);
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-10);
    svg {
        height: 4rem;
        width: 4rem;
    }
`;

const HeroImgWrapper = styled.div`
    width: 50%;
    img {
        height: 60rem;
    }
`;

const Hero = () => {
    return (
        <BaseContainer>
            <HeroTextWrapper>
                <Typography variant="h1" className="heading">
                    Hey there, <br></br>It's Durdona
                </Typography>{" "}
                <Typography variant="paragraphLG" className="description">
                    🚀 Passionate Full Stack Developer 🖥️ <br></br>from New York
                    📍 Building dynamic web applications with flair and
                    precision.
                </Typography>
                <SocialMedia>
                    <Icon iconName="linkdin-icon" />
                    <Icon iconName="github-icon" />
                </SocialMedia>
            </HeroTextWrapper>
            <HeroImgWrapper>
                <img src={hero} alt="" />
            </HeroImgWrapper>
        </BaseContainer>
    );
};

export { Hero };
