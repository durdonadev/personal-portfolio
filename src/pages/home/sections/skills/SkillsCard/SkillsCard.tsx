import styled, { css } from "styled-components";
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
    padding: var(--space-8);
    border-radius: var(--border-radius-24);
    box-shadow: var(--shadow-xs);
    max-width: 37rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opacity 0.5s;
    background-color: var(--white);

    & > img {
        width: 10rem;
        height: 10rem;
        margin-top: var(--space-32);
        margin-bottom: var(--space-40);
    }
`;

const SkillTextWrapper = styled.div<{ icon: string }>`
    max-width: 35rem;
    padding: var(--space-24);
    border-radius: var(--border-radius-24);
    background-color: var(--green-25);
`;

const SkillName = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const SkillTools = styled(Typography)`
    color: var(--jaguar-500);
`;

const SkillsCard = ({ skill }: SkillsCardProps) => {
    return (
        <SkillsCardBase icon={skill.icon}>
            <img src={skill.icon} alt="Skills Icon" />
            <SkillTextWrapper icon={skill.icon}>
                <SkillName variant="paragraphLG" weight="semibold">
                    {skill.name}
                </SkillName>
                <SkillTools variant="subtitleLG" weight="medium">
                    {skill.tools}
                </SkillTools>
            </SkillTextWrapper>
        </SkillsCardBase>
    );
};

export { SkillsCard };
