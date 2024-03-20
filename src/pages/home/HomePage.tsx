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
            <header
                id="top-navigation"
                style={{
                    backgroundColor: headerBackground,
                    position: "sticky",
                    top: 0,
                    zIndex: 999,
                    boxShadow: scrolled
                        ? "0 20px 60px rgba(50,61,88,0.09)"
                        : "none"
                }}
            >
                <TopNavigation />
            </header>

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
