import React from "react";
import styled from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../../design-system";
import { Container } from "../../../components";

const ToolBarWrapper = styled(Container)`
    margin-top: var(--space-80);
    padding: 4rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;
    justify-content: space-around;
    background-color: var(--jaguar-25);
    border-top: 0.4rem solid var(--jaguar-200);
    border-bottom: 0.4rem solid var(--jaguar-200);
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

export { ToolBar };
