import { useEffect, useState } from "react";
import { Button } from "../../../../design-system";
import { NavigationLink } from "./NavigationLinks";
import { TopNavigationProps, links } from "./TopNavigation";
import styled from "styled-components";

const MenuLinks = styled.div<TopNavigationProps>`
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

const MobileNavigation: React.FC<TopNavigationProps> = () => {
    const [navBackground, setNavBackground] = useState("var(--color-bg)");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setNavBackground("var(--color-white)");
                setScrolled(true);
            } else {
                setNavBackground("var(--color-bg)");
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <MenuLinks backgroundcolor={navBackground} scrolled={scrolled}>
            {links.map((link, index) => (
                <NavigationLink
                    key={index}
                    linkText={link.text}
                    linkTo={link.link}
                    isFirstLink={index === 0}
                />
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
