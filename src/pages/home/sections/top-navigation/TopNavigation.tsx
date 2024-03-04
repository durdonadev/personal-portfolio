import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";

const links = [
    { text: "Home", link: "" },
    { text: "About", link: "https://google.com" },
    { text: "Projects", link: "https://facebook.com" },
    { text: "Blog", link: "https://facebook.com" }
];

const HeaderBase = styled.header`
    margin: 0 auto;
    max-width: 190rem;
    padding: 2.5rem 36.5rem;
    background-color: #b4bdc5;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoWithLinks = styled.header`
    display: flex;
    gap: var(--space-40);
`;

const StyledLogo = styled(Logo)`
    margin-right: var(--space-40);
`;

const TopNavigation = () => {
    return (
        <HeaderBase>
            <LogoWithLinks>
                <StyledLogo size="sm" layout="horizontal" />
                {links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </LogoWithLinks>

            <Button
                iconName="arrow"
                variant="outlined"
                size="sm"
                shape="rounded"
                color="primary"
                onClick={() => {}}
            >
                Contact
            </Button>
        </HeaderBase>
    );
};

export { TopNavigation };
