import styled from "styled-components";
import { AnimateOnScroll, Icon, Typography } from "../../../../design-system";
import { Container } from "../../../components";

import { ContactForm } from "./ContactForm";
import { SectionBase } from "../../../components/SectionBase";
import footer from "../../../../assets/images/footer.png";

const ContactSectionBase = styled(SectionBase)`
    background-image: url(${footer});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 40rem;
`;

const Content = styled.div`
    display: flex;
    border-radius: var(--border-radius-4);
    justify-content: space-between;
    align-items: center;
    gap: var(--space-60);
    max-width: 102.4rem;
    margin: 0 auto;

    @media (max-width: 60em) {
        display: block;
        max-width: 60rem;
    }
`;

const Title = styled(Typography)`
    color: var(--color-white);
    text-align: center;
    margin-bottom: var(--space-64);
`;

const ContactInfoWrapper = styled(AnimateOnScroll)`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: var(--space-32);

    @media (max-width: 60em) {
        width: 100%;
        margin-bottom: var(--space-40);
    }
`;

const Heading = styled(Typography)`
    color: var(--color-white);
`;

const Paragraph = styled(Typography)`
    color: var(--color-white);
`;

const MailAndPhone = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const StyledLink = styled.a`
    font-size: 1.8rem;
    color: var(--color-white);
`;

const Contact = () => {
    return (
        <ContactSectionBase id="contact">
            <Container>
                <AnimateOnScroll>
                    <Title variant="h3" weight="bold">
                        Get In Touch
                    </Title>
                </AnimateOnScroll>
                <Content>
                    <ContactInfoWrapper
                        x={window.innerWidth < 1920 ? "-10%" : "-20%"}
                        scale={0.9}
                        duration={0.8}
                        delay={0.2}
                    >
                        <Heading variant="h5" weight="bold">
                            Say Hello!
                        </Heading>
                        <Paragraph variant="paragraphMD" weight="normal">
                            Have a project in mind or just have a question?
                            Let's connect and make it happen together!
                        </Paragraph>
                        <MailAndPhone>
                            <Icon iconName="mail" />
                            <StyledLink href="mailto:durdona.dev@gmail.com">
                                durdona.dev@gmail.com
                            </StyledLink>
                        </MailAndPhone>
                        <MailAndPhone>
                            <Icon iconName="phone" />
                            <StyledLink href="tel:+19293347203">
                                +1 929 334-7203
                            </StyledLink>
                        </MailAndPhone>
                    </ContactInfoWrapper>

                    <ContactForm />
                </Content>
            </Container>
        </ContactSectionBase>
    );
};

export { Contact };
