import styled from "styled-components";
import { Container } from "../../../components";
import { Tool } from "./types";
import { Icon, Typography } from "../../../../design-system";

const ToolsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ToolsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--space-40);
    -webkit-box-align: center;
    -webkit-box-pack: center;
`;

const Title = styled(Typography)`
    color: var(--color-section-header);
    text-align: center;
    margin-bottom: var(--space-60);
`;

const StyledIcon = styled(Icon)`
    margin-right: 1rem;
`;

const ToolTitle = styled.span`
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-500);
    color: var(--gray-500);
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;
`;

interface ToolsProps {
    tools: Tool[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
    return (
        <ToolsContainer>
            <Title variant="h2" weight="bold">
                Technical Skills
            </Title>
            <ToolsWrapper>
                {tools.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="4rem"
                            iconName={tool.icon}
                        />
                        <ToolTitle>{tool.title}</ToolTitle>
                    </ToolBox>
                ))}
            </ToolsWrapper>
        </ToolsContainer>
    );
};

export { Tools };
