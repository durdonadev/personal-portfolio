import styled from "styled-components";
import { Button, Input, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import IconLink from "../../../components/IconLink";
import mail from "../../../../assets/images/mail-2.png";
// import mailIcon from "../../../../assets/images/mail.png"
// import phoneIcon from "../../../../assets/images/phone.png"

const BaseContainer = styled(Container)`
    padding-top: var(--space-100);
    padding-bottom: var(--space-40);
    background-color: #f6f7fb;
`;

const Content = styled.div`
    display: flex;
    margin-bottom: var(--space-50);
    gap: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-40);
    span {
        color: var(--primary-600);
    }
`;

const StyledText = styled(Typography)`
    margin-bottom: var(--space-30);
`;

const ContactInfoWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: var(--space-32);
`;

const StyledLink = styled.a`
    font-size: 1.8rem;
    color: var(--primary-900);
    margin-bottom: var(--space-10);
`;

const ImgWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: auto;

    img {
        object-fit: cover;
        width: auto;
        height: 30rem;
    }
`;

const ContactForm = styled.form`
    width: 50%;
    margin: 0 auto;
    padding: var(--space-32) var(--space-100);
    background-color: #e2e2fe;
    border-radius: var(--border-radius-8);

    > *:not(:last-child) {
        margin-bottom: var(--space-24);
    }

    > :last-child {
        margin-left: auto;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-40);
    align-items: center;
    justify-content: center;
`;

const Contact = () => {
    const githubLink = process.env.REACT_APP_GITHUB_LINK || "";
    const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK || "";
    const twitterLink = process.env.REACT_APP_TWITTER_LINK || "";
    const facebookLink = process.env.REACT_APP_FACEBOOK_LINK || "";

    return (
        <BaseContainer>
            <Content>
                <ContactInfoWrapper>
                    <Title variant="h3" weight="extrabold">
                        Contact <span>Me</span>
                    </Title>
                    <StyledText variant="paragraphMD" weight="normal">
                        Have a project in mind or just have a question? Let's
                        connect and make things happen together!
                    </StyledText>

                    <Typography variant="paragraphMD" weight="bold">
                        Email
                    </Typography>

                    <StyledLink href="mailto:durdona.dev@gmail.com">
                        durdona.dev@gmail.com
                    </StyledLink>
                    <Typography variant="paragraphMD" weight="bold">
                        Phone
                    </Typography>
                    <StyledLink href="tel:+19293347203">
                        +1 929 334-7203
                    </StyledLink>
                    <ImgWrapper>
                        <img src={mail} alt="" />
                    </ImgWrapper>
                </ContactInfoWrapper>

                <ContactForm>
                    <Typography variant="paragraphLG" weight="bold">
                        Send me a message!
                    </Typography>
                    <Input
                        labelText="Name"
                        type="text"
                        placeholder="Will Smith"
                        shape="circle"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />

                    <Input
                        labelText="Email"
                        type="email"
                        placeholder="email@example.com"
                        shape="circle"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        labelText="Phone Number"
                        type="tel"
                        placeholder="(123) 456-7890"
                        shape="circle"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        labelText="Message"
                        type="textarea"
                        placeholder="How can I help you?"
                        shape="circle"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Button color="primary" size="lg" shape="circle">
                        Send Message
                    </Button>
                </ContactForm>
            </Content>
            <SocialMedia>
                <IconLink href={linkedinLink} iconName="linkdin-icon" />
                <IconLink href={githubLink} iconName="github-icon" />
                <IconLink href={twitterLink} iconName="twitter-icon" />
                <IconLink href={facebookLink} iconName="facebook" />
            </SocialMedia>
        </BaseContainer>
    );
};

export { Contact };
