export type IconName =
    | "arrow"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "behance"
    | "close"
    | "deibbble"
    | "drop-down"
    | "facebook"
    | "instagram"
    | "linkdin"
    | "list-menu"
    | "secure"
    | "twitter"
    | "up-down"
    | "linkdin-icon"
    | "github-icon"
    | "twitter-icon";

export type IconProps = {
    iconName: IconName;
    className?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
};
