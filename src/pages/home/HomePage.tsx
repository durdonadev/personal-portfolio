import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { ToolsBar } from "./sections/tool-bar/ToolBar";
import { Services } from "./sections/services/Services";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";

const Base = styled.div``;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />

            <section id="hero">
                <Hero />
            </section>
            <section id="tool-bar">
                <ToolsBar />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </Base>
    );
};

export { HomePage };
