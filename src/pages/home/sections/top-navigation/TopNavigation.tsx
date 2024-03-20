import styled from "styled-components";
import { NavigationLink } from "./NavigationLinks";
import { Button, Logo } from "../../../../design-system";

const links = [
    { text: "Home", link: "" },
    { text: "Services", link: "#services" },
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" }
];

const BaseContainer = styled.nav`
    margin: 0 auto;
    max-width: 190rem;
    padding: 2.5rem 28.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
        padding: 4rem;
    }
`;

const Links = styled.div`
    display: flex;
    gap: var(--space-40);
`;

const StyledLogo = styled(Logo)`
    margin-right: var(--space-40);
`;

const TopNavigation: React.FC = () => {
    const handleOnClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <BaseContainer>
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

            <Button
                size="md"
                color="primary"
                shape="rounded"
                variant="contained"
                onClick={handleOnClick}
            >
                Let's Talk
            </Button>
        </BaseContainer>
    );
};

export { TopNavigation };
