import { NavigationMenu } from "../components";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { ToolsBar } from "./sections/tool-bar/ToolBar";
import { Services } from "./sections/services/Services";
import { Projects } from "./sections/projects/Projects";
import { Contact } from "./sections/contact/Contact";
import { Footer } from "./sections/footer/Footer";

const Home = () => {
    return (
        <>
            <NavigationMenu />
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

export { Home };
