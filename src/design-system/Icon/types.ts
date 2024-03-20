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
    | "linkedin"
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
    | "management"
    | "database"
    | "services-icon-1"
    | "services-icon-2"
    | "services-icon-3";

export type IconProps = {
    iconName: IconName;
    className?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
};
