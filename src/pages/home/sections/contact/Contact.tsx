import styled from "styled-components";
import { Button, Icon, Input, Typography } from "../../../../design-system";
import { Container } from "../../../components";

const BaseContainer = styled(Container)`
    padding-top: var(--space-50);
    padding-bottom: var(--space-50);
    background-color: #f6f7fb;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-30);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-80);
    span {
        color: var(--primary-600);
    }
`;

const ContactInfoWrapper = styled.div`
    width: 40%;
    padding: var(--space-32);
    background-color: #dcece1;
    border-radius: var(--border-radius-8);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-20);
`;

const StyledLink = styled.a`
    font-size: 1.8rem;
    color: var(--green-900);
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-20);
    align-items: center;
    justify-content: center;
`;

const StyledIcon = styled(Icon)`
    cursor: pointer;
    height: 2.6rem;
    width: 2.6rem;
    transition: all 1s;

    &:hover {
        transform: scale(1.3);
    }
`;

const ContactForm = styled.form`
    width: 60%;
    margin: 0 auto;
    padding: var(--space-32) var(--space-100);
    background-color: #eff0f1;
    border-radius: var(--border-radius-8);

    > *:not(:last-child) {
        margin-bottom: var(--space-24);
    }
`;

const Contact = () => {
    return (
        <BaseContainer>
            <Title variant="h3" weight="extrabold">
                Contact <span>Me</span>
            </Title>
            <Content>
                <ContactInfoWrapper>
                    <TextWrapper>
                        <Typography variant="h5" weight="bold">
                            Say Hello!
                        </Typography>
                        <Typography variant="paragraphMD" weight="normal">
                            Interested in working together or just have a
                            question? Let's connect and make things happen.
                        </Typography>
                        <Typography variant="paragraphLG" weight="bold">
                            Email
                        </Typography>
                        <StyledLink href="mailto:durdona.dev@gmail.com">
                            durdona.dev@gmail.com
                        </StyledLink>

                        <Typography variant="paragraphLG" weight="bold">
                            Phone
                        </Typography>
                        <StyledLink href="tel:+19293347203">
                            +1 929 334-7203
                        </StyledLink>
                    </TextWrapper>

                    <SocialMedia>
                        <StyledIcon iconName="linkdin-icon" />
                        <StyledIcon iconName="github-icon" />
                        <StyledIcon iconName="twitter-icon" />
                        <StyledIcon iconName="facebook" />
                    </SocialMedia>
                </ContactInfoWrapper>
                <ContactForm>
                    <Input
                        labelText="Name"
                        type="text"
                        placeholder="Will Smith"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />

                    <Input
                        labelText="Email"
                        type="email"
                        placeholder="email@example.com"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        labelText="Phone Number"
                        type="tel"
                        placeholder="(123) 456-7890"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        labelText="Message"
                        type="textarea"
                        placeholder="How can I help you?"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        fullWidth
                    >
                        Send Message
                    </Button>
                </ContactForm>
            </Content>
        </BaseContainer>
    );
};

export { Contact };
