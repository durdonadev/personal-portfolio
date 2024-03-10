import styled from "styled-components";
import { Typography } from "../../../../design-system";
import { Container } from "../../../components";
import { services } from "./ServiceCard/data";
import { ServicesCard } from "./ServiceCard/ServiceCard";

const SectionBase = styled(Container)`
    padding-top: 15rem;
    padding-bottom: 15rem;
`;

const ServicesTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: left;
    margin-bottom: var(--space-100);
    span {
        color: var(--primary-600);
    }
`;

const ServicesCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-40);
    margin-bottom: var(--space-50);
`;

const Services = () => {
    return (
        <SectionBase>
            <ServicesTextWrapper>
                <Title variant="h3" weight="extrabold">
                    What <span>Services</span> Do I Provide?
                </Title>
            </ServicesTextWrapper>
            <ServicesCardsWrapper>
                {services.map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </ServicesCardsWrapper>
        </SectionBase>
    );
};

export { Services };
