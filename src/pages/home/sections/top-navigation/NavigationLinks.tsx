import React, { useEffect } from "react";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
    isFirstLink: boolean;
};

const StyledLink = styled.a`
    color: var(--color-navbar);
    font-weight: var(--font-weight-700);
    font-size: var(--font-size-16);
    padding-bottom: 0.2rem;
    border-bottom: 0.2rem solid transparent;
    transition: all 1s;

    &:hover {
        border-bottom: 1px solid var(--color-navbar);
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
