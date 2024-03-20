import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectCard/data";
import { Container } from "../../../components";

const SectionBase = styled(Container)`
    padding-top: 15rem;
    padding-bottom: 15rem;

    @media (max-width: 75em) {
        //1200
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
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
        <SectionBase>
            <Title variant="h2" weight="bold">
                Featured Projects
            </Title>

            <ProjectCardsWrapper>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </ProjectCardsWrapper>
        </SectionBase>
    );
};

export { Projects };
