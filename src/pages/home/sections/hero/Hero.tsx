import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/me2.png";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-10);
    padding-bottom: var(--space-10);
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
        color: var(--gray-600);
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-10);
    margin-top: auto;
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
    width: 42rem;

    text-align: center;
    background-color: #ffc400;
    border-top-left-radius: 17rem;
    border-bottom-left-radius: 12rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 10rem;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
    img {
        object-fit: contain;
        height: 60.8rem;
        width: auto;
        border-bottom-right-radius: 8rem;
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
                    Hey There, It's
                </Typography>
                <Typography variant="h1" className="heading">
                    Durdona Ibragimova
                </Typography>
                <Typography variant="h4" weight="bold" className="description">
                    Full Stack Web Developer
                </Typography>
                <Typography
                    variant="paragraphMD"
                    weight="bold"
                    className="description"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, omnis consectetur itaque aut error iste, quam veritatis
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
