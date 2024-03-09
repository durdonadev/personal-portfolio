import styled from "styled-components";
import { Button, Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import dots from "../../../../assets/images/dot-transparent.png";

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
    padding-top: var(--space-150);
    padding-bottom: var(--space-150);
    background-color: #fff;
`;

const AboutContent = styled.div`
    display: flex;
    gap: 5%;
`;

const AboutBioWrapper = styled.div`
    width: 55%;
`;

const AboutInfoWrapper = styled.div`
    width: 40%;
    display: grid;
    row-gap: 0px;
`;
const InfoItem = styled.div`
    display: grid;
    grid-template-columns: 15% 30% 55%;
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-50);
    span {
        color: #42b3a2;
    }
`;

const Bio = styled(Typography)`
    margin-bottom: var(--space-30);
    line-height: 2;
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const BackgroundDotsWrapper = styled.div`
    position: absolute;
    top: 10rem;
    right: 14.1rem;

    img {
        z-index: -2;
        opacity: 0.1;
        object-fit: contain;
        height: 30.5rem;
        width: auto;
    }
`;

const About = () => {
    return (
        <BaseContainer>
            <BackgroundDotsWrapper>
                <img src={dots} alt="" />
            </BackgroundDotsWrapper>
            <Title variant="h3" weight="extrabold">
                About <span>Me</span>
            </Title>
            <AboutContent>
                <AboutBioWrapper>
                    <Bio variant="paragraphMD">{info.bio}</Bio>
                    <Buttons>
                        <Button
                            size="md"
                            shape="rounded"
                            color="secondary"
                            onClick={() => {}}
                        >
                            HIRE ME
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            size="md"
                            shape="rounded"
                            onClick={() => {}}
                        >
                            DOWNLOAD RESUME
                        </Button>
                    </Buttons>
                </AboutBioWrapper>
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
                        <Typography variant="paragraphMD">Address:</Typography>
                        <Typography variant="paragraphMD">
                            {info.address}
                        </Typography>
                    </InfoItem>
                    <InfoItem>
                        <Icon iconName="mail" />
                        <Typography variant="paragraphMD">Email:</Typography>
                        <Typography variant="paragraphMD">
                            {info.email}
                        </Typography>
                    </InfoItem>
                    <InfoItem>
                        <Icon iconName="phone" />
                        <Typography variant="paragraphMD">Phone:</Typography>
                        <Typography variant="paragraphMD">
                            {info.phone}
                        </Typography>
                    </InfoItem>
                </AboutInfoWrapper>
            </AboutContent>
        </BaseContainer>
    );
};

export { About };
