import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster, Input, Button } from "../../../../design-system";

const Form = ({ onClose }: { onClose?: () => void }) => {
    const form = useRef<HTMLFormElement | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = () => {
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

        emailjs
            .sendForm(serviceId, templateId, form.current!, {
                publicKey: publicKey
            })
            .then(
                () => {
                    onClose && onClose();
                    toast.success("Your Message has been successfully sent!");
                },
                () => {
                    toast.error(`Failed: Please try again later.`);
                }
            );
        reset();
    };

    return (
        <>
            <form ref={form} onSubmit={onSubmit}>
                <Input
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: "Name is required.",
                        minLength: {
                            value: 3,
                            message: "Please enter a minimum of 3 characters."
                        }
                    }}
                    name="Name"
                    type="text"
                    labelText="Name"
                    placeholder="John Doe"
                />
                <Input
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: "Email is required.",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address"
                        }
                    }}
                    name="Email"
                    type="email"
                    labelText="Email"
                    placeholder="email@example.com"
                />
                <Input
                    register={register}
                    errors={errors}
                    validationSchema={{
                        pattern: {
                            value: /^\d{3}-\d{3}-\d{4}$/,
                            message:
                                "Please enter a valid 10-digit US phone number in the format xxx-xxx-xxxx"
                        }
                    }}
                    type="tel"
                    name="Phone Number"
                    labelText="Phone Number"
                    placeholder="222-222-2222"
                />
                <Input
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: "Message is required.",
                        minLength: {
                            value: 15,
                            message: "Please enter a minimum of 15 characters."
                        }
                    }}
                    type="textarea"
                    name="Message"
                    labelText="Message"
                    placeholder="How can I help you?"
                />
                <Button color="primary" size="lg" shape="rounded">
                    Send Message
                </Button>
            </form>

            <Toaster />
        </>
    );
};

export { Form };
