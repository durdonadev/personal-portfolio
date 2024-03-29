import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Icon, Logo } from "../../../../design-system";
import { useEffect, useState } from "react";
import { Container } from "../../../components";
import { SectionSidePadding } from "../../../components/SectionBase";
import { MobileNavigation } from "./MobileNavigation";

export const links = [
    { text: "Home", link: "" },
    { text: "Skills", link: "#tool-bar" },
    { text: "Specialized In", link: "#services" },
    { text: "Projects", link: "#projects" }
];

export interface TopNavigationProps {
    backgroundcolor: string;
    scrolled: boolean;
}

const Base = styled.nav<TopNavigationProps>`
    background-color: ${(props) => props.backgroundcolor};
    padding: 0 var(--space-96);
    height: 9rem;

    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: ${(props) =>
        props.scrolled ? "var(--color-white)" : "var(--color-bg)"};
    box-shadow: ${(props) => (props.scrolled ? "var(--shadow-xl)" : "none")};

    ${SectionSidePadding}

    @media screen and (max-width: 50em) {
        border-radius: ${(props) =>
            props.scrolled ? "var(--space-16)" : "none"};
        top: ${(props) => (props.scrolled ? "var(--space-16)" : "none")};
        margin-left: ${(props) =>
            props.scrolled ? "var(--space-16)" : "none"};
        margin-right: ${(props) =>
            props.scrolled ? "var(--space-16)" : "none"};
        padding-left: ${(props) =>
            props.scrolled ? "var(--space-32)" : "var(--space-48)"};
        padding-right: ${(props) =>
            props.scrolled ? "var(--space-32)" : "var(--space-48)"};
    }

    @media screen and (max-width: 30em) {
        border-radius: ${(props) =>
            props.scrolled ? "var(--space-12)" : "none"};
        top: ${(props) => (props.scrolled ? "var(--space-12)" : "none")};
        margin-left: ${(props) =>
            props.scrolled ? "var(--space-12)" : "none"};
        margin-right: ${(props) =>
            props.scrolled ? "var(--space-12)" : "none"};
        padding-left: ${(props) =>
            props.scrolled ? "var(--space-20)" : "var(--space-32)"};
        padding-right: ${(props) =>
            props.scrolled ? "var(--space-20)" : "var(--space-32)"};
    }
`;

const TopNavigationContent = styled(Container)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Links = styled.ul`
    display: flex;
    gap: var(--space-40);

    @media (max-width: 50em) {
        display: none;
    }
`;

const ListItem = styled.li`
    list-style: none;
`;

const StyledLogo = styled(Logo)`
    margin-right: var(--space-40);
`;

const StyledButton = styled(Button)`
    @media (max-width: 50em) {
        display: none;
    }
`;

const BurgerIconWrapper = styled.div`
    height: 4rem;
    width: 4rem;

    border-radius: 0.4rem;
    background-color: var(--color-primary);
    padding: 0.8rem;
    display: none;

    @media (max-width: 50em) {
        display: block;
    }
`;

const TopNavigation: React.FC<TopNavigationProps> = () => {
    const [navBackground, setNavBackground] = useState("var(--color-bg)");
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);

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

    const handleOnClickMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Base backgroundcolor={navBackground} scrolled={scrolled}>
            <TopNavigationContent>
                <StyledLogo size="sm" layout="horizontal" />
                <Links>
                    {links.map((link, index) => (
                        <ListItem key={index}>
                            <NavigationLink
                                linkText={link.text}
                                linkTo={link.link}
                                isFirstLink={index === 0}
                            />
                        </ListItem>
                    ))}
                </Links>

                <StyledButton
                    size="md"
                    color="primary"
                    shape="rounded"
                    variant="contained"
                    onClick={handleOnClick}
                >
                    Let's Talk
                </StyledButton>
            </TopNavigationContent>
            <BurgerIconWrapper onClick={handleOnClickMenu}>
                {showMenu ? (
                    <Icon iconName="close" />
                ) : (
                    <Icon iconName="list-menu" />
                )}
            </BurgerIconWrapper>
            {showMenu ? (
                <MobileNavigation
                    scrolled={scrolled}
                    backgroundcolor={navBackground}
                />
            ) : null}
        </Base>
    );
};

export { TopNavigation };
