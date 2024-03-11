import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";
import { Container } from "../../../components";

const links = [
    { text: "HOME", link: "" },
    { text: "ABOUT", link: "" },
    { text: "PROJECTS", link: "" },
    { text: "BLOG", link: "" }
];

const BaseContainer = styled(Container)`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #ffffff7e;
    backdrop-filter: blur(1rem);
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Links = styled.div`
    display: flex;
    gap: var(--space-40);
`;

const StyledLogo = styled(Logo)`
    margin-right: var(--space-40);
`;

const TopNavigation = () => {
    return (
        <BaseContainer>
            <StyledLogo size="sm" layout="horizontal" />
            <Links>
                {links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </Links>

            <Button
                color="secondary"
                variant="outlined"
                size="lg"
                shape="rounded"
                onClick={() => {}}
            >
                CONTACT
            </Button>
        </BaseContainer>
    );
};

export { TopNavigation };
