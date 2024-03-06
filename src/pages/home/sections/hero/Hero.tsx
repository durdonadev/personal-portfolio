import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/developer.png";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-50);
    padding-bottom: var(--space-50);
`;

const HeroTextWrapper = styled.div`
    width: 55%;

    .greeting {
        color: #42b3a2;
    }

    .heading {
        margin-bottom: var(--space-20);
    }

    .description {
        margin-bottom: var(--space-40);
        color: var(--jaguar-600);
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-10);
    svg {
        cursor: pointer;
        height: 3.6rem;
        width: 3.6rem;
        transition: all 1s;
        &:hover {
            transform: scale(1.25);
        }
    }
`;

const HeroImgWrapper = styled.div`
    width: 42%;
    img {
        object-fit: contain;
        height: 60.8rem;
        width: auto;
        transition: all 1s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const Hero = () => {
    return (
        <BaseContainer>
            <HeroTextWrapper>
                <Typography
                    variant="paragraphLG"
                    weight="bold"
                    className="greeting"
                >
                    Hi, I am
                </Typography>
                <Typography variant="h1" className="heading">
                    Durdona Ibragimova
                </Typography>
                <Typography variant="h5" weight="bold" className="description">
                    Full Stack Web Developer
                </Typography>
                <SocialMedia>
                    <Icon iconName="linkdin-icon" />
                    <Icon iconName="github-icon" />
                    <Icon iconName="twitter-icon" />
                </SocialMedia>
            </HeroTextWrapper>
            <HeroImgWrapper>
                <img src={hero} alt="Girl with laptop" />
            </HeroImgWrapper>
        </BaseContainer>
    );
};

export { Hero };
