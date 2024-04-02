import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectCard/data";
import { Container } from "../../../components";
import { SectionBase } from "../../../components/SectionBase";

const ProjectsSectionBase = styled(SectionBase)`
    background-color: var(--color-bg);
`;

const ProjectsContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2 1fr);
    gap: var(--space-30);
`;

const Title = styled(Typography)`
    color: var(--color-section-header);
    text-align: center;
    margin-bottom: 8rem;
`;

const ProjectCardsWrapper = styled.div`
    row-gap: var(--space-20);
`;

const Projects = () => {
    return (
        <ProjectsSectionBase id="projects">
            <ProjectsContainer>
                <Title variant="h3" weight="bold">
                    Latest Projects
                </Title>
                <ProjectCardsWrapper>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </ProjectCardsWrapper>
            </ProjectsContainer>
        </ProjectsSectionBase>
    );
};

export { Projects };
