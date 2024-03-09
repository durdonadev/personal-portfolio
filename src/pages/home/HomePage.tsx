import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Skills } from "./sections/skills/Skills";
import { About } from "./sections/about/About";
import { ToolBar } from "./sections/tool-bar/ToolBar";
import { tools } from "./sections/tool-bar/data";

const Base = styled.div``;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Hero />
            <ToolBar tools={tools} />
            <About />
            <Skills />
        </Base>
    );
};

export { HomePage };
