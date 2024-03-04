import { IconName } from "../Icon";

export type ButtonSize = "sm" | "lg";
export type ButtonShape = "rounded" | "circle";
export type ButtonColor = "primary" | "danger" | "success";
export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ButtonColor;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    iconName?: IconName;
    children: React.ReactNode;
    onClick?: () => void;
    buttonRef?: React.ForwardedRef<HTMLButtonElement>;
};
