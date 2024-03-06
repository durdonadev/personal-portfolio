import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Skills } from "./sections/skills/Skills";

const Base = styled.div``;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Hero />
            <Skills />
        </Base>
    );
};

export { HomePage };
