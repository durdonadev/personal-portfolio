import styled from "styled-components";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";

const Base = styled.div``;

const HomePage = () => {
    return (
        <Base>
            <TopNavigation />
            <Hero />
        </Base>
    );
};

export { HomePage };
