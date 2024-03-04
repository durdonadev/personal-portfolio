import sprite from "./sprite.svg";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({
    iconName,
    className,
    onClick,
    height,
    width
}) => {
    const handleOnClick = () => {
        onClick && onClick();
    };

    const defaultHeight = "2.4rem";
    const defaultWidth = "2.4rem";

    return (
        <svg
            height={height || defaultHeight}
            width={width || defaultWidth}
            className={className || ""}
            onClick={handleOnClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };
