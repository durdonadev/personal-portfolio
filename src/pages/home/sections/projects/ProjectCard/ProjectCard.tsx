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
    justify-content: space-between;
    gap: var(--space-30);
`;

const ProjectCardLeft = styled.div<{ name: string }>`
    width: 70%;
    display: flex;
    align-items: center;
    gap: var(--space-20);
    padding: var(--space-60) var(--space-60) 0;
    border-radius: var(--border-radius-8);
    box-shadow: var(--shadow-l);
    margin-bottom: var(--space-30);

    background-color: ${({ name }) => {
        switch (name) {
            case "Projectify-App":
                return "#dce3f3";
            case "Furniture Website":
                return "#faf0d7";
            case "Restaurant Website":
                return "#dcece1";
            default:
                return "transparent";
        }
    }};
`;

const ProjectCardRight = styled.div<{ name: string }>`
    position: relative;
    text-align: center;
    width: 30%;
    height: 47.52rem;
    overflow: hidden;
    border-radius: var(--border-radius-8);
    box-shadow: var(--shadow-l);
    cursor: pointer;
    transition: all 1s;

    &:hover {
        transform: scale(1.04);
    }

    img {
        object-fit: cover;
        height: 100%;
        border-radius: var(--border-radius-8);
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;

        background-color: ${({ name }) => {
            switch (name) {
                case "Projectify-App":
                    return "rgba(81, 129, 248, 0.5)";
                case "Furniture Website":
                    return "rgba(255, 187, 64, 0.5)";
                case "Restaurant Website":
                    return " rgba(50, 183, 104, 0.5)";
                default:
                    return "transparent";
            }
        }};
    }
`;

const ProjectTextWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const ProjectName = styled(Typography)`
    margin-bottom: var(--space-12);
`;

const ProjectDescription = styled(Typography)`
    margin-bottom: var(--space-12);
`;

const ProjectImageWrapper = styled.div`
    overflow: hidden;
    img {
        object-fit: cover;
        height: 41.2rem;
    }
`;

const StyledButton = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: transparent !important;

    &:hover {
        background-color: var(--jaguar-900) !important;
        color: white !important;
    }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <ProjectCardBase>
            <ProjectCardLeft name={project.name}>
                <ProjectTextWrapper>
                    <ProjectName variant="h5" weight="semibold">
                        {project.name}
                    </ProjectName>
                    <ProjectDescription variant="paragraphMD">
                        {project.description}
                    </ProjectDescription>
                    <a href={project.githubLink}>
                        <Button
                            size="md"
                            variant="outlined"
                            color="secondary"
                            shape="rounded"
                        >
                            GitHub Link
                        </Button>
                    </a>
                </ProjectTextWrapper>
                <ProjectImageWrapper>
                    <img src={project.image} alt="Project" />
                </ProjectImageWrapper>
            </ProjectCardLeft>

            <ProjectCardRight name={project.name}>
                <img src={project.image} alt="" />
                <a href={project.demoLink}>
                    <StyledButton
                        size="md"
                        variant="outlined"
                        color="secondary"
                        shape="rounded"
                    >
                        Try Demo
                    </StyledButton>
                </a>
            </ProjectCardRight>
        </ProjectCardBase>
    );
};

export { ProjectCard };
