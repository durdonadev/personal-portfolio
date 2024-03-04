import React from "react";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
};

const StyledLink = styled.a`
    color: var(--jaguar-900);
    font-weight: var(--font-weight-500);
`;

const NavigationLink: React.FC<PropsType> = ({ linkText, linkTo }) => {
    return (
        <StyledLink href={linkTo} className="paragraph-sm">
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };
