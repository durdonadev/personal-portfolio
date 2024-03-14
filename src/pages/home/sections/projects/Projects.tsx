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
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-80);
    span {
        color: var(--primary-600);
    }
`;

const ProjectCardsWrapper = styled.div`
    row-gap: var(--space-20);
`;

const Projects = () => {
    return (
        <SectionBase>
            <Title variant="h3" weight="extrabold">
                Latest <span>Projects</span>
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
