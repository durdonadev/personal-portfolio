import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import IconLink from "../../../components/IconLink";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const BaseContainer = styled(Container)`
    padding-top: var(--space-100);
    padding-bottom: var(--space-40);
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-50);

    @media (max-width: 57em) {
        //912
        display: block;
    }
`;

const Title = styled(Typography)`
    color: var(--color-white);
    text-align: center;
    margin-bottom: var(--space-64);
`;

const ContactInfoWrapper = styled.div`
    width: 40%;
    padding: var(--space-32);

    background-color: #fafafa;
    border-radius: var(--border-radius-8);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 57em) {
        //912
        width: 100%;
        margin-bottom: var(--space-32);
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-20);
    margin-bottom: var(--space-32);
`;

const StyledLink = styled.a`
    font-size: 1.8rem;
    color: #3aa79a;
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-20);
    align-items: center;
    justify-content: center;
`;

const ContactForm = styled.form`
    width: 60%;
    margin: 0 auto;
    padding: var(--space-32) var(--space-120);
    background-color: var(--color-gray-100);
    border-radius: var(--border-radius-8);

    @media (max-width: 57em) {
        //912
        width: 100%;
    }

    @media (max-width: 44em) {
        //704
        padding: var(--space-32) var(--space-80);
    }

    @media (max-width: 38em) {
        //608
        padding: var(--space-32) var(--space-50);
    }

    @media (max-width: 32em) {
        //512
        padding: var(--space-32);
    }
`;

const StyledButton = styled(Button)`
    margin-left: auto;

    @media (max-width: 32em) {
        //512
        width: 100%;
    }
`;
const StyledLabel = styled.label`
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
    color: var(--jaguar-500);
    font-weight: var(--font-weight-500);
`;

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm("service_67toclm", "template_6vyt8o9", form.current, {
                    publicKey: "WM3lpTR-yY047TINO"
                })
                .then(
                    (response) => {
                        console.log(response);
                        console.log("SUCCESS!", response);
                    },
                    (error) => {
                        console.error("FAILED...", error);
                    }
                );
        }
    };

    const githubLink = process.env.REACT_APP_GITHUB_LINK || "";
    const linkedinLink = process.env.REACT_APP_LINKEDIN_LINK || "";
    const twitterLink = process.env.REACT_APP_TWITTER_LINK || "";
    const facebookLink = process.env.REACT_APP_FACEBOOK_LINK || "";

    return (
        <BaseContainer>
            <Title variant="h3" weight="bold">
                Get In Touch
            </Title>
            <Content>
                <ContactInfoWrapper>
                    <TextWrapper>
                        <Typography variant="h5" weight="bold">
                            Say Hello!
                        </Typography>
                        <Typography variant="paragraphMD" weight="normal">
                            Have a project in mind or just have a question?
                            Let's connect and make it happen together!
                        </Typography>
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
                    </TextWrapper>

                    <SocialMedia>
                        <IconLink href={linkedinLink} iconName="linkdin-icon" />
                        <IconLink href={githubLink} iconName="github-icon" />
                        <IconLink href={twitterLink} iconName="twitter-icon" />
                        <IconLink href={facebookLink} iconName="facebook" />
                    </SocialMedia>
                </ContactInfoWrapper>

                <ContactForm ref={form} onSubmit={sendEmail}>
                    <StyledLabel>Name</StyledLabel>
                    <input
                        className="input"
                        required
                        type="text"
                        name="user_name"
                        placeholder="Will Smith"
                    />
                    <StyledLabel>Email</StyledLabel>
                    <input
                        className="input"
                        required
                        type="email"
                        name="user_email"
                        placeholder="email@example.com"
                    />
                    <StyledLabel>Phone number</StyledLabel>
                    <input
                        className="input"
                        required
                        type="tel"
                        name="user_tel"
                        placeholder="(123) 456-7890"
                    />
                    <StyledLabel>Message</StyledLabel>
                    <textarea
                        className="input input-textarea"
                        placeholder="How can I help you?"
                        name="message"
                        required
                    />
                    <StyledButton color="primary" size="lg" shape="rounded">
                        Send Message
                    </StyledButton>
                </ContactForm>
            </Content>
        </BaseContainer>
    );
};

export { Contact };
