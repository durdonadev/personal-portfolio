import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Icon, Logo } from "../../../../design-system";
import { useState } from "react";

interface TopNavigationProps {
    scrolled: boolean; // Define a prop to receive the scrolled state
}

const links = [
    { text: "Home", link: "" },
    { text: "Services", link: "#services" },
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" }
];

const BaseContainer = styled.nav<TopNavigationProps>`
    margin: 0 auto;
    max-width: 190rem;
    padding: 2.5rem 28.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 106em) {
        //1696
        padding: 2.5rem 21rem;
    }

    @media (max-width: 100em) {
        //1600
        padding: 2.5rem 17rem;
    }

    @media (max-width: 96em) {
        //1536
        padding: 2.5rem 15rem;
    }

    @media (max-width: 90em) {
        //1440
        padding: 2.5rem 12.5rem;
    }

    @media (max-width: 84em) {
        //1344
        padding: 2.5rem 11rem;
    }

    @media (max-width: 82em) {
        //1300
        padding: 2.5rem 9rem;
    }

    @media (max-width: 77.5em) {
        //1240
        padding: 2.5rem 8rem;
    }

    @media (max-width: 75em) {
        //1200
        padding: 2.5rem 7rem;
    }

    @media (max-width: 69em) {
        //1104
        padding: 2.5rem 6rem;
    }

    @media (max-width: 64em) {
        //1024
        padding: 2.5rem 5rem;
    }

    @media (max-width: 57em) {
        //912
        padding: 2.5rem 12rem;
    }

    @media (max-width: 50em) {
        padding: ${(props) =>
            props.scrolled ? "2.5rem 10.4rem" : "2.5rem 12rem"};
    }
`;

const Links = styled.div`
    display: flex;
    gap: var(--space-40);

    @media (max-width: 50em) {
        display: none;
    }
`;

const StyledLogo = styled(Logo)`
    margin-right: var(--space-40);
`;

const StyledButton = styled(Button)`
    @media (max-width: 50em) {
        display: none;
    }
`;

const IconWrapper = styled.div`
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

const MenuLinks = styled.div<TopNavigationProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-24);
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
    border-bottom-left-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    background-color: ${(props) => (props.scrolled ? "#fff" : "#f5fdff")};

    position: absolute;
    top: 8rem;
    left: 0;

    @media (min-width: 50em) {
        display: none;
    }
`;

const TopNavigation: React.FC<TopNavigationProps> = ({ scrolled }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

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
        <BaseContainer scrolled={scrolled}>
            <StyledLogo size="sm" layout="horizontal" />
            <Links>
                {links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        linkText={link.text}
                        linkTo={link.link}
                        isFirstLink={index === 0}
                    />
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

            <IconWrapper onClick={handleOnClickMenu}>
                {showMenu ? (
                    <Icon iconName="close" />
                ) : (
                    <Icon iconName="list-menu" />
                )}
            </IconWrapper>
            {showMenu ? (
                <MenuLinks scrolled={scrolled}>
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
            ) : null}
        </BaseContainer>
    );
};

export { TopNavigation };
