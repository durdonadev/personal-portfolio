import React, { useEffect } from "react";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
    isFirstLink: boolean;
};

const StyledLink = styled.a`
    color: var(--gray-500);
    font-weight: var(--font-weight-800);

    &:hover {
        color: var(--primary-800);
    }
`;

const NavigationLink: React.FC<PropsType> = ({
    linkText,
    linkTo,
    isFirstLink
}) => {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        if (isFirstLink) {
            const linkElement = document.getElementById("firstLink");
            if (linkElement) {
                linkElement.addEventListener("click", scrollToTop);
            }
        }

        return () => {
            if (isFirstLink) {
                const linkElement = document.getElementById("firstLink");
                if (linkElement) {
                    linkElement.removeEventListener("click", scrollToTop);
                }
            }
        };
    }, [isFirstLink]);

    return (
        <StyledLink
            href={linkTo}
            className="paragraph-sm"
            id={isFirstLink ? "firstLink" : undefined}
        >
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };
