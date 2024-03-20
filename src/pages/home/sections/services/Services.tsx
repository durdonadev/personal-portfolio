import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container } from "../../../components";
import { services } from "./ServiceCard/data";
import { ServicesCard } from "./ServiceCard/ServiceCard";

const SectionBase = styled(Container)`
    padding-top: 12rem;
    padding-bottom: 12rem;

    @media (max-width: 75em) {
        //1200
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
`;

const Title = styled(Typography)`
    color: var(--color-section-header);
    text-align: center;
    margin-bottom: var(--space-64);
`;

const ServicesCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    @media (max-width: 57em) {
        //912
        display: block;
    }
`;

const Services = () => {
    return (
        <SectionBase>
            <Title variant="h2" weight="bold">
                What Services Do I Provide?
            </Title>

            <ServicesCardsWrapper>
                {services.map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </ServicesCardsWrapper>
        </SectionBase>
    );
};

export { Services };
