import React from "react";
import "./Input.css";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const StyledLabel = styled.label`
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
    color: var(--jaguar-500);
    font-weight: var(--font-weight-500);
`;

type InputProps = {
    type: "text" | "email" | "password" | "tel" | "textarea";
    placeholder?: string;
    labelText: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    name: string;
    validationSchema: object;
};

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    labelText,
    register,
    errors,
    name,
    validationSchema
}) => {
    return (
        <div className="input-wrapper">
            <StyledLabel>{labelText}</StyledLabel>

            {(() => {
                switch (type) {
                    case "textarea":
                        return (
                            <textarea
                                {...register(name, validationSchema)}
                                className="input input-textarea"
                                placeholder={placeholder}
                            ></textarea>
                        );
                    default:
                        return (
                            <input
                                {...register(name, validationSchema)}
                                className="input"
                                type={type}
                                placeholder={placeholder}
                            />
                        );
                }
            })()}
            {errors[name] && <p>{`${errors[name]!.message}`}</p>}
        </div>
    );
};

export { Input };
