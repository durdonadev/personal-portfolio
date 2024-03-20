import styled from "styled-components";
import { Button, Input, Typography } from "../../../../design-system";
import { Container } from "../../../components";
import IconLink from "../../../components/IconLink";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

    > *:not(:last-child) {
        margin-bottom: var(--space-24);
    }

    @media (max-width: 57em) {
        //912
        width: 100%;
    }
`;

const StyledButton = styled(Button)`
    margin: 0 auto;
`;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeName = (value: string) => {
        setName(value);
    };
    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangeTel = (value: string) => {
        setTel(value);
    };
    const handleOnChangeMessage = (value: string) => {
        setMessage(value);
    };

    const isFormSubmittable = name && email && tel && message;

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, name, tel, message);

        if (form.current) {
            setIsFormSubmitting(true);

            const formData = new FormData(form.current);
            const data: Record<string, string> = {
                name,
                email,
                tel,
                message
            };

            formData.set("user_name", name);
            formData.set("user_email", email);
            formData.set("user_tel", tel);
            formData.set("message", message);

            formData.forEach((value, key) => {
                if (value instanceof File) {
                } else {
                    data[key] = value as string;
                }
            });

            try {
                await emailjs.sendForm(
                    "service_67toclm",
                    "template_6vyt8o9",
                    form.current,
                    {
                        publicKey: "WM3lpTR-yY047TINO"
                    }
                );
                setIsFormSubmitting(false);
                setName("");
                setEmail("");
                setTel("");
                setMessage("");

                console.log("Email sent successfully!");
            } catch (error) {
                setIsFormSubmitting(false);

                console.error("Error sending email:", error);
            }
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
                    {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                    </form> */}
                    <Input
                        name="user_name"
                        labelText="Name"
                        type="text"
                        placeholder="Will Smith"
                        shape="rounded"
                        size="lg"
                        value={name}
                        onChange={handleOnChangeName}
                    />

                    <Input
                        name="user_email"
                        labelText="Email"
                        type="email"
                        placeholder="email@example.com"
                        shape="rounded"
                        size="lg"
                        value={email}
                        onChange={handleOnChangeEmail}
                    />
                    <Input
                        name="user_tel"
                        labelText="Phone Number"
                        type="tel"
                        placeholder="(123) 456-7890"
                        shape="rounded"
                        size="lg"
                        value={tel}
                        onChange={handleOnChangeTel}
                    />
                    <Input
                        name="message"
                        labelText="Message"
                        type="textarea"
                        placeholder="How can I help you?"
                        shape="rounded"
                        size="lg"
                        value={message}
                        onChange={handleOnChangeMessage}
                    />
                    <StyledButton
                        color="primary"
                        size="lg"
                        shape="rounded"
                        fullWidth
                        // disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Send Message
                    </StyledButton>
                </ContactForm>
            </Content>
        </BaseContainer>
    );
};

export { Contact };
