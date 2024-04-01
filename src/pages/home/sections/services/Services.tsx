import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container } from "../../../components";
import { services } from "./ServiceCard/data";
import { ServicesCard } from "./ServiceCard/ServiceCard";
import { SectionBase } from "../../../components/SectionBase";

const ServicesSectionBase = styled(SectionBase)`
    background-color: var(--color-white);
`;

const Title = styled(Typography)`
    color: var(--color-section-header);
    text-align: center;
    margin-bottom: var(--space-60);
`;

const ServicesCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);

    @media (max-width: 60em) {
        display: block;

        :not(:last-child) {
            margin-bottom: var(--space-30);
        }
    }
`;

const Services = () => {
    return (
        <ServicesSectionBase id="services">
            <Container>
                <Title variant="h3" weight="bold">
                    Specialized In
                </Title>

                <ServicesCardsWrapper>
                    {services.map((service, index) => (
                        <ServicesCard key={index} service={service} />
                    ))}
                </ServicesCardsWrapper>
            </Container>
        </ServicesSectionBase>
    );
};

export { Services };
