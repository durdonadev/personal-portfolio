import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { SkillsCard } from "./SkillsCard";
import { skills } from "./SkillsCard/skills";
import { Container } from "../../../components";

const SectionBase = styled(Container)`
    padding-top: 15rem;
    padding-bottom: 15rem;
`;

const SkillsTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-100);
    span {
        color: #42b3a2;
    }
`;

const SkillsCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;

const Skills = () => {
    return (
        <SectionBase>
            <SkillsTextWrapper>
                <Title variant="h3" weight="extrabold">
                    Professinal <span>Skills</span> 🛠
                </Title>
            </SkillsTextWrapper>
            <SkillsCardsWrapper>
                {skills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))}
            </SkillsCardsWrapper>
        </SectionBase>
    );
};

export { Skills };
