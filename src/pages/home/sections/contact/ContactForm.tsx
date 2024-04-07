import styled from "styled-components";
import {
    AnimateOnScroll,
    Button,
    Input,
    Toaster
} from "../../../../design-system";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const FormBase = styled(AnimateOnScroll)`
    width: 60%;

    @media (max-width: 60em) {
        width: 100%;
    }
`;

const FormContent = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-20);
    row-gap: var(--space-20);
`;

const NameInput = styled(Input)`
    grid-column: 1/2;
`;

const EmailInput = styled(Input)`
    grid-column: 2/3;
`;

const MessageInput = styled(Input)`
    grid-column: 1/3;
`;

const StyledButton = styled(Button)`
    grid-column: 2/3;
    justify-self: end;
`;

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef<HTMLFormElement | null>(null);

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangeMessage = (value: string) => {
        setMessage(value);
    };

    const isFormSubmittable = name && email && message;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

        setIsFormSubmitting(true);

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey
                })
                .then(
                    () => {
                        setIsFormSubmitting(false);

                        toast.success(
                            "Thank you! I have received your message."
                        );
                        setName("");
                        setEmail("");
                        setMessage("");
                    },
                    () => {
                        setIsFormSubmitting(false);
                        setIsError(true);
                        toast.error(
                            "Oops. There was a problem! Please email me at durdona.dev@gmail.com"
                        );
                    }
                );
        }
    };

    return (
        <FormBase
            x={window.innerWidth < 1920 ? "10%" : "20%"}
            scale={0.9}
            duration={0.8}
            delay={0.2}
        >
            <FormContent ref={form} onSubmit={sendEmail}>
                <NameInput
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    shape="rounded"
                    size="lg"
                    value={name}
                    onChange={handleOnChangeName}
                />

                <EmailInput
                    name="user_email"
                    type="email"
                    placeholder="Email Address"
                    shape="rounded"
                    size="lg"
                    value={email}
                    onChange={handleOnChangeEmail}
                />
                <MessageInput
                    name="message"
                    type="textarea"
                    placeholder="Your Message"
                    shape="rounded"
                    size="lg"
                    value={message}
                    onChange={handleOnChangeMessage}
                />
                <StyledButton
                    color="primary"
                    variant="contained"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Send Message
                </StyledButton>
            </FormContent>
            <Toaster position="bottom-right" />
        </FormBase>
    );
};

export { ContactForm };
