import React from "react";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
};

const StyledLink = styled.a`
    color: var(--gray-500);
    font-weight: var(--font-weight-700);

    &:hover {
        color: var(--primary-600);
    }
`;

const NavigationLink: React.FC<PropsType> = ({ linkText, linkTo }) => {
    return (
        <StyledLink href={linkTo} className="paragraph-sm">
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };
