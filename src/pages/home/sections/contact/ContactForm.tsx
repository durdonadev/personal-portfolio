import styled from "styled-components";
import { AnimateOnScroll, Button, Input } from "../../../../design-system";

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
    return (
        <FormBase
            x={window.innerWidth < 1920 ? "10%" : "20%"}
            scale={0.9}
            duration={0.8}
            delay={0.2}
        >
            <FormContent>
                <NameInput
                    type="text"
                    placeholder="Your Name"
                    shape="rounded"
                    size="lg"
                    value=""
                    onChange={() => {}}
                />

                <EmailInput
                    type="email"
                    placeholder="Email Address"
                    shape="rounded"
                    size="lg"
                    value=""
                    onChange={() => {}}
                />
                <MessageInput
                    type="textarea"
                    placeholder="Your Message"
                    shape="rounded"
                    size="lg"
                    value=""
                    onChange={() => {}}
                />
                <StyledButton
                    color="primary"
                    variant="contained"
                    size="lg"
                    shape="rounded"
                >
                    Send Message
                </StyledButton>
            </FormContent>
        </FormBase>
    );
};

export { ContactForm };
