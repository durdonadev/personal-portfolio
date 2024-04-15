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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: var(--space-24);

    cursor: pointer;
    box-shadow: var(--shadow-xl);
    background-color: var(--color-white);
    border-radius: var(--border-radius-8);
    padding: var(--space-24);
`;

const ProjectImageWrapper = styled.div`
    border-radius: var(--border-radius-8);
    border: 1px solid var(--color-border);
    padding: var(--space-8);
`;

const ProjectImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: var(--border-radius-8);
    transition: all 1s;
    &:hover {
        transform: scale(1.02);
    }
`;

const ProjectTextWrapper = styled.div<{ $name: string }>`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const ProjectName = styled(Typography)`
    margin-bottom: var(--space-16);
`;

const ProjectDescription = styled(Typography)``;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-20);
    margin: 0 auto;

    @media (max-width: 60em) {
        width: max-content;
    }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    const handleGitHubButtonClick = () => {
        window.open(project.githubLink, "_blank");
    };

    const handleDemoButtonClick = () => {
        window.open(project.demoLink, "_blank");
    };

    return (
        <ProjectCardBase id="projects">
            <ProjectTextWrapper $name={project.name}>
                <ProjectName variant="h5" weight="bold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="paragraphSM" weight="normal">
                    {project.description}
                </ProjectDescription>
            </ProjectTextWrapper>
            <ProjectImageWrapper>
                <ProjectImg src={project.image} alt="Project" />
            </ProjectImageWrapper>
            <Buttons>
                <Button
                    size="md"
                    color="secondary"
                    shape="rounded"
                    onClick={handleGitHubButtonClick}
                >
                    GitHub
                </Button>

                <Button
                    size="md"
                    variant="outlined"
                    color="secondary"
                    shape="rounded"
                    onClick={handleDemoButtonClick}
                >
                    Try Demo
                </Button>
            </Buttons>
        </ProjectCardBase>
    );
};

export { ProjectCard };
