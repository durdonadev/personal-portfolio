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
    | "twitter-icon"
    | "person"
    | "age"
    | "location"
    | "mail"
    | "phone"
    | "css"
    | "html"
    | "figma"
    | "prisma"
    | "mongodb"
    | "javascript"
    | "nodejs"
    | "npm"
    | "react"
    | "typescript"
    | "vscode"
    | "expressjs"
    | "git"
    | "github"
    | "terminal"
    | "sass"
    | "corel-draw"
    | "frontend"
    | "backend"
    | "internet"
    | "management";

export type IconProps = {
    iconName: IconName;
    className?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
};
