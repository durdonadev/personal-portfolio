import { useEffect, useState } from "react";
import { Button } from "../../../../design-system";
import { NavigationLink } from "./NavigationLinks";
import { TopNavigationProps, links } from "./TopNavigation";
import styled from "styled-components";

const MenuLinks = styled.ul<TopNavigationProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-24);
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);

    box-shadow: var(--shadow-xl);
    background-color: ${(props) =>
        props.scrolled ? "var(--color-white)" : "var(--color-bg)"};
    border-bottom-left-radius: ${(props) =>
        props.scrolled ? "var(--border-radius-16)" : "none"};
    border-bottom-right-radius: ${(props) =>
        props.scrolled ? "var(--border-radius-16)" : "none"};

    position: absolute;
    top: 8rem;
    left: 0;
    z-index: 999;

    @media (min-width: 50em) {
        display: none;
    }
`;

const ListItem = styled.li`
    list-style: none;
`;

const MobileNavigation: React.FC<TopNavigationProps> = ({ scrolled }) => {
    const [navBackground, setNavBackground] = useState(
        scrolled ? "var(--color-white)" : "var(--color-bg)"
    );

    useEffect(() => {
        setNavBackground(scrolled ? "var(--color-white)" : "var(--color-bg)");
    }, [scrolled]);

    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <MenuLinks backgroundcolor={navBackground} scrolled={scrolled}>
            {links.map((link, index) => (
                <ListItem key={index}>
                    <NavigationLink
                        linkText={link.text}
                        linkTo={link.link}
                        isFirstLink={index === 0}
                    />
                </ListItem>
            ))}
            <Button
                size="md"
                color="primary"
                shape="rounded"
                variant="contained"
                onClick={handleOnClick}
            >
                Let's Talk
            </Button>
        </MenuLinks>
    );
};

export { MobileNavigation };
