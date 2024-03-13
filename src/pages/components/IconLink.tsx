import React from "react";
import styled from "styled-components";
import { Icon, IconName } from "../../design-system";

const StyledLink = styled.a`
    z-index: 10;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    transition: all 1s;

    &:hover {
        transform: scale(1.3);
    }
`;

interface IconLinkProps {
    href: string;
    iconName: IconName;
}

const IconLink: React.FC<IconLinkProps> = ({ href, iconName }) => {
    return (
        <StyledLink href={href} target="_blank">
            <Icon iconName={iconName} height="3rem" width="3rem" />
        </StyledLink>
    );
};

export default IconLink;
