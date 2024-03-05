import styled from "styled-components";
import { Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import hero from "../../../../assets/images/developer.png";

const BaseContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-50);
`;

const HeroTextWrapper = styled.div`
    width: 50%;

    .heading,
    .description {
        margin-bottom: var(--space-40);
    }

    .description {
        font-weight: 400;
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
        height: 60.8rem;
    }
`;

const Hero = () => {
    return (
        <BaseContainer>
            <HeroTextWrapper>
                <Typography variant="h1" className="heading">
                    Hey there, <br></br>It's Durdona
                </Typography>
                <Typography variant="paragraphMD" className="description">
                    🚀 Passionate Full Stack Developer 🖥️ <br></br>Proficient in
                    front-end and back-end technologies, dedicated to crafting
                    exceptional digital experiences.
                </Typography>
                <SocialMedia>
                    <Icon iconName="linkdin-icon" />
                    <Icon iconName="github-icon" />
                </SocialMedia>
            </HeroTextWrapper>
            <HeroImgWrapper>
                <img src={hero} alt="Girl with laptop" />
            </HeroImgWrapper>
        </BaseContainer>
    );
};

export { Hero };
