import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { ToolsBar } from "./sections/tool-bar/ToolBar";
import { Services } from "./sections/services/Services";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";
import { useEffect, useState } from "react";
import { Footer } from "./sections/footer/Footer";

const HomePage = () => {
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

    return (
        <>
            <TopNavigation
                backgroundcolor={navBackground}
                scrolled={scrolled}
            />
            <Hero />
            <ToolsBar />
            <Services />
            {/* <About /> */}
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export { HomePage };
