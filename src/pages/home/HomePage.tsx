import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { ToolsBar } from "./sections/tool-bar/ToolBar";
import { Services } from "./sections/services/Services";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";
import { useEffect, useState } from "react";
import footer from "../../assets/images/footer.png";

interface HeaderProps {
    backgroundColor: string;
    scrolled: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
    background-color: ${(props) => props.backgroundColor};
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: ${(props) =>
        props.scrolled ? "0 2rem 6rem rgba(50,61,88,0.09)" : "none"};
    @media (max-width: 50em) {
        border-radius: ${(props) => (props.scrolled ? "1.6rem" : "none")};
        top: ${(props) => (props.scrolled ? "1.6rem" : "none")};
        margin-left: ${(props) => (props.scrolled ? "1.6rem" : "none")};
        margin-right: ${(props) => (props.scrolled ? "1.6rem" : "none")};
    }

    @media (max-width: 25em) {
        border-radius: ${(props) => (props.scrolled ? "1rem" : "none")};
        top: ${(props) => (props.scrolled ? "1rem" : "none")};
        margin-left: ${(props) => (props.scrolled ? "1rem" : "none")};
        margin-right: ${(props) => (props.scrolled ? "1rem" : "none")};
    }
`;

const HomePage = () => {
    const [headerBackground, setHeaderBackground] = useState("#f5fdff");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setHeaderBackground("#ffffff");
                setScrolled(true);
            } else {
                setHeaderBackground("#f5fdff");
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <StyledHeader
                backgroundColor={headerBackground}
                scrolled={scrolled}
                id="top-navigation"
            >
                <TopNavigation scrolled={scrolled} />
            </StyledHeader>

            <section id="hero" style={{ backgroundColor: "#f5fdff" }}>
                <Hero />
            </section>
            <section
                id="tool-bar"
                style={{
                    borderBottom: "1px solid #dee2e6"
                }}
            >
                <ToolsBar />
            </section>
            <section id="services">
                <Services />
            </section>
            {/* <section id="about" style={{ backgroundColor: "#f6f7fb" }}>
                <About />
            </section> */}
            <section id="projects" style={{ backgroundColor: "#f5fdff" }}>
                <Projects />
            </section>
            <section
                id="contact"
                style={{
                    backgroundImage: "url(" + footer + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "40rem"
                }}
            >
                <Contact />
            </section>
        </>
    );
};

export { HomePage };
