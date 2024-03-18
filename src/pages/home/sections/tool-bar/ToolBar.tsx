import React from "react";
import styled from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../../design-system";
import { Container } from "../../../components";
import { tools } from "./data";

const ToolBarWrapper = styled(Container)`
    margin-top: var(--space-80);
    padding: 5rem 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 90em) {
    }
`;

const StyledIcon = styled(Icon)`
    margin-right: 1rem;
`;

const SkillTitle = styled.span`
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-700);
    color: var(--gray-500);
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;
`;

interface ToolBarProps {
    tools: Tool[];
}

const ToolBar: React.FC<ToolBarProps> = ({ tools }) => {
    return (
        <ToolBarWrapper>
            {tools.map((tool, idx) => (
                <ToolBox key={idx}>
                    <StyledIcon
                        height="4rem"
                        width="5rem"
                        iconName={tool.icon}
                    />
                    <SkillTitle>{tool.title}</SkillTitle>
                </ToolBox>
            ))}
        </ToolBarWrapper>
    );
};

export const ToolsBar = () => {
    return <ToolBar tools={tools} />;
};
