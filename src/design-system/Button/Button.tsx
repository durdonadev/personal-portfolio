import { FC } from "react";
import { trimWhiteSpaces } from "../utils";
import {
    sizeClassNames,
    shapeClassNames,
    colorClassNames,
    variantClassNames
} from "./classnames";
import { Icon } from "../Icon";
import { ButtonProps } from "./types";
import "./Button.css";

const Button: FC<ButtonProps> = (props) => {
    const {
        size,
        shape,
        fullWidth,
        color,
        variant,
        disabled,
        className,
        children,
        onClick,
        buttonRef,
        iconName // Assuming iconName is passed as a prop
    } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";
    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";
    const colorClassName = color !== undefined ? colorClassNames[color] : "";
    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";
    const fullWidthClassName = fullWidth ? "btn-full-width" : "";

    const finalClassNames = trimWhiteSpaces(
        `btn ${colorClassName} ${sizeClassName} ${shapeClassName} ${fullWidthClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return (
        <>
            {iconName ? (
                <button
                    className={trimWhiteSpaces(finalClassNames)}
                    disabled={disabled}
                    onClick={onClick}
                    ref={buttonRef}
                >
                    {children}{" "}
                    <Icon
                        iconName={iconName}
                        height="2rem"
                        width="2rem"
                        className="btn-icon"
                    />
                </button>
            ) : (
                <button
                    className={trimWhiteSpaces(finalClassNames)}
                    disabled={disabled}
                    onClick={onClick}
                    ref={buttonRef}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export { Button };
