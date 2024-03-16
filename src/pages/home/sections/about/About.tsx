import styled from "styled-components";
import { Button, Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import dots from "../../../../assets/images/dot-transparent.png";
import me from "../../../../assets/images/shape-about.png";

const info = {
    bio: "Hello, I'm Durdona, a full-stack developer based in New York with over a year of experience. Passionate about crafting seamless digital experiences, I thrive on bringing innovative ideas to life through code. From backend logic to captivating frontend interfaces, I specialize in creating dynamic web solutions that engage and inspire users.",
    fullName: "Durdona Ibragimova",
    age: "28",
    address: "New York, USA",
    email: "durdona.dev@gmail.com",
    phone: "(929) 334-7203"
};

const BaseContainer = styled(Container)`
    position: relative;
    padding-top: var(--space-100);
    padding-bottom: var(--space-100);
    background-color: #f6f7fb;
`;

const AboutContent = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
`;

const ImageWrapper = styled.div`
    width: 45%;
    text-align: center;
    transition: all 1s;

    &:hover {
        transform: scale(1.05);
    }

    img {
        border-radius: 50%;
        /* margin-top: auto; */
        object-fit: contain;
        height: 56rem;
        width: auto;

        @media (max-width: 90em) {
            //1440
            height: 53rem;
        }
    }

    @media (max-width: 90em) {
        //1440
        height: 30%;
    }
`;

const AboutTextWrapper = styled.div`
    width: 60%;
`;

const AboutInfoWrapper = styled.div`
    display: grid;
    row-gap: var(--space-16);

    @media (max-width: 84em) {
        row-gap: var(--space-10);
    }
`;

const InfoItem = styled.div`
    display: grid;
    grid-template-columns: 15% 30% 55%;
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
    z-index: 10;
    span {
        color: var(--primary-600);
    }

    @media (max-width: 90em) {
        margin-bottom: var(--space-40);
    }
`;

const Bio = styled(Typography)`
    margin-bottom: var(--space-30);
    line-height: 1.5;
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
    margin-bottom: var(--space-40);
`;

const BackgroundDotsWrapper = styled.div`
    position: absolute;
    top: 10rem;
    right: 14.1rem;

    @media (max-width: 106em) {
        //1700
        right: 10rem;
    }

    @media (max-width: 100em) {
        //1600
        right: 8rem;
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

const About = () => {
    const resumeLink = process.env.REACT_APP_RESUME_LINK || "";

    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <BaseContainer>
            <BackgroundDotsWrapper>
                <img src={dots} alt="" />
            </BackgroundDotsWrapper>

            <AboutContent>
                <ImageWrapper>
                    <img src={me} alt="" />
                </ImageWrapper>
                <AboutTextWrapper>
                    <Title variant="h3" weight="extrabold">
                        About <span>Me</span>
                    </Title>
                    <Bio variant="paragraphMD">{info.bio}</Bio>
                    <Buttons>
                        <Button
                            size="lg"
                            shape="rounded"
                            color="secondary"
                            onClick={handleOnClick}
                        >
                            HIRE ME
                        </Button>
                        <a href={resumeLink}>
                            <Button
                                color="primary"
                                variant="outlined"
                                size="lg"
                                shape="rounded"
                                onClick={() => {}}
                            >
                                REVIEW MY RESUME
                            </Button>
                        </a>
                    </Buttons>
                    <AboutInfoWrapper>
                        <InfoItem>
                            <Icon iconName="person" />
                            <Typography variant="paragraphMD">
                                Full Name:
                            </Typography>
                            <Typography variant="paragraphMD">
                                {info.fullName}
                            </Typography>
                        </InfoItem>
                        <InfoItem>
                            <Icon iconName="age" />
                            <Typography variant="paragraphMD">Age:</Typography>
                            <Typography variant="paragraphMD">
                                {info.age}
                            </Typography>
                        </InfoItem>
                        <InfoItem>
                            <Icon iconName="location" />
                            <Typography variant="paragraphMD">
                                Address:
                            </Typography>
                            <Typography variant="paragraphMD">
                                {info.address}
                            </Typography>
                        </InfoItem>
                        <InfoItem>
                            <Icon iconName="mail" />
                            <Typography variant="paragraphMD">
                                Email:
                            </Typography>
                            <Typography variant="paragraphMD">
                                {info.email}
                            </Typography>
                        </InfoItem>
                        <InfoItem>
                            <Icon iconName="phone" />
                            <Typography variant="paragraphMD">
                                Phone:
                            </Typography>
                            <Typography variant="paragraphMD">
                                {info.phone}
                            </Typography>
                        </InfoItem>
                    </AboutInfoWrapper>
                </AboutTextWrapper>
            </AboutContent>
        </BaseContainer>
    );
};

export { About };
