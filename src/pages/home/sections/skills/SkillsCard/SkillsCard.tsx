import styled from "styled-components";
import { Typography } from "../../../../../design-system";

type Skill = {
    icon: string;
    name: string;
    tools: string;
};

type SkillsCardProps = {
    skill: Skill;
};

export const SkillsCardBase = styled.div<{ icon: string }>`
    position: relative;
    padding: var(--space-8);
    border-radius: var(--border-radius-12);
    max-width: 34rem;
    box-shadow: var(--shadow-2xl);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 0.5s;
    background-color: var(--white);

    & > img {
        position: absolute;
        top: -10%;
        left: calc(50% - 5rem);
        width: 10rem;
        height: 10rem;
        border-radius: var(--border-radius-12);
        box-shadow: var(--shadow-xl);
    }
`;

const SkillTextWrapper = styled.div<{ icon: string }>`
    text-align: center;
    padding: var(--space-24);
    margin-top: 5rem;
`;

const SkillName = styled(Typography)`
    margin-bottom: var(--space-16);
`;

const SkillTool = styled.li`
    line-height: 2.4rem;
    list-style-type: none;
    font-size: medium;
    font-weight: 700;
    text-decoration: none;
    color: var(--primary-300);
`;

const SkillsCard = ({ skill }: SkillsCardProps) => {
    return (
        <SkillsCardBase icon={skill.icon}>
            <img src={skill.icon} alt="Skills Icon" />
            <SkillTextWrapper icon={skill.icon}>
                <SkillName variant="h5" weight="semibold">
                    {skill.name}
                </SkillName>
                <ul>
                    {skill.tools.split(",").map((tool, index) => (
                        <SkillTool key={index}>{tool.trim()}</SkillTool>
                    ))}
                </ul>
            </SkillTextWrapper>
        </SkillsCardBase>
    );
};

export { SkillsCard };
