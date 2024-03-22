import styled from "styled-components";
import { Button, Input } from "../../../../design-system";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

    @media (max-width: 44em) {
        //704
        padding: var(--space-32) var(--space-80);
    }

    @media (max-width: 38em) {
        //608
        padding: var(--space-32) var(--space-50);
    }

    @media (max-width: 32em) {
        //608
        padding: var(--space-32);
    }
`;

const StyledButton = styled(Button)`
    margin: 0 auto;
`;

const FormContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const isFormSubmittable = !name && !email && !tel && !message;

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleTelChange = (value: string) => {
        setTel(value);
    };

    const handleMessageChange = (value: string) => {
        setMessage(value);
    };

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

    return (
        <ContactForm ref={form} onSubmit={sendEmail}>
            <Input
                name="user_name"
                labelText="Name"
                type="text"
                placeholder="Will Smith"
                shape="rounded"
                size="lg"
                value={name}
                onChange={handleNameChange}
            />
            <Input
                name="user_email"
                labelText="Email"
                type="email"
                placeholder="email@example.com"
                shape="rounded"
                size="lg"
                value={email}
                onChange={handleEmailChange}
            />
            <Input
                name="user_tel"
                labelText="Phone Number"
                type="tel"
                placeholder="(123) 456-7890"
                shape="rounded"
                size="lg"
                value={tel}
                onChange={handleTelChange}
            />
            <Input
                name="message"
                labelText="Message"
                type="textarea"
                placeholder="How can I help you?"
                shape="rounded"
                size="lg"
                value={message}
                onChange={handleMessageChange}
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
    );
};

export { FormContact };
