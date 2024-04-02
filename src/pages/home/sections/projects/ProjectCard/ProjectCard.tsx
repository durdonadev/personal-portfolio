import styled from "styled-components";
import { Button, Typography } from "../../../../../design-system";

type Project = {
    image: string;
    name: string;
    description: string;
    githubLink: string;
    demoLink: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCardBase = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: var(--space-50);
    margin-bottom: var(--space-60);

    @media (max-width: 60em) {
        display: block;
        padding-bottom: var(--space-32);
        border-bottom: 1px solid var(--color-border);
    }

    @media (max-width: 30em) {
        padding-bottom: var(--space-20);
    }
`;

const ProjectImageWrapper = styled.div<{ $name: string }>`
    grid-row: 1 / 2;
    grid-column: ${(props) =>
        props.$name === "Restaurant Website" ? "2 / 3" : "1 / 2"};
    overflow: hidden;

    @media (max-width: 60em) {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 30em) {
        width: 90%;
    }
`;

const ProjectImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.8rem;
`;

const ProjectTextWrapper = styled.div<{ $name: string }>`
    grid-row: 1 / 2;
    grid-column: ${(props) =>
        props.$name === "Restaurant Website" ? "1 / 2" : "2 / 3"};

    padding-right: 10%;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media (max-width: 60em) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: var(--space-32);
        padding-right: 0;
        text-align: center;
    }

    @media (max-width: 32em) {
        width: 90%;
    }
`;

const ProjectName = styled(Typography)`
    margin-bottom: var(--space-32);
`;

const ProjectDescription = styled(Typography)`
    margin-bottom: var(--space-32);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);

    @media (max-width: 60em) {
        width: max-content;
        margin: 0 auto;
    }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <ProjectCardBase id="projects">
            <ProjectImageWrapper $name={project.name}>
                <ProjectImg src={project.image} alt="Project" />
            </ProjectImageWrapper>

            <ProjectTextWrapper $name={project.name}>
                <ProjectName variant="h4" weight="bold">
                    {project.name}
                </ProjectName>
                {/* <ProjectDescription variant="paragraphSM" weight="normal">
                    {project.description}
                </ProjectDescription> */}
                {/* <Buttons>
                    <a href={project.demoLink}>
                        <Button size="lg" color="primary" shape="rounded">
                            Try Demo
                        </Button>
                    </a>
                    <a href={project.githubLink}>
                        <Button
                            size="lg"
                            variant="outlined"
                            color="primary"
                            shape="rounded"
                        >
                            GitHub Link
                        </Button>
                    </a>
                </Buttons> */}
            </ProjectTextWrapper>
        </ProjectCardBase>
    );
};

export { ProjectCard };
