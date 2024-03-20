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
    margin-bottom: var(--space-80);
`;

const ProjectImageWrapper = styled.div<{ $name: string }>`
    grid-row: 1 / 2;
    grid-column: ${(props) =>
        props.$name === "Restaurant Website" ? "2 / 3" : "1 / 2"};

    overflow: hidden;
`;

const ProjectImg = styled.img`
    object-fit: contain;
    border-radius: 0.8rem;
`;

const ProjectTextWrapper = styled.div<{ $name: string }>`
    grid-row: 1 / 2;
    grid-column: ${(props) =>
        props.$name === "Restaurant Website" ? "1 / 2" : "2 / 3"};

    padding-right: 18rem;
    display: flex;
    flex-direction: column;
    text-align: left;
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
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <ProjectCardBase>
            <ProjectImageWrapper $name={project.name}>
                <ProjectImg src={project.image} alt="Project" />
            </ProjectImageWrapper>

            <ProjectTextWrapper $name={project.name}>
                <ProjectName variant="h3" weight="bold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="paragraphSM" weight="normal">
                    {project.description}
                </ProjectDescription>
                <Buttons>
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
                </Buttons>
            </ProjectTextWrapper>
        </ProjectCardBase>
    );
};

export { ProjectCard };
