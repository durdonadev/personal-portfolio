import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { ToolsBar } from "./sections/tool-bar/ToolBar";
import { Services } from "./sections/services/Services";

const Base = styled.div``;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Hero />
            <ToolsBar />
            <About />
            <Services />
        </Base>
    );
};

export { HomePage };
