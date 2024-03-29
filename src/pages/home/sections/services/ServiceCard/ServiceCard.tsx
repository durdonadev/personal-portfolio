import styled from "styled-components";
import { Icon, IconName, Typography } from "../../../../../design-system";
import React from "react";

export type Service = {
    icon: IconName;
    title: string;
    description: string;
};

type ServicesCardProps = {
    service: Service;
};

const ServicesCardBase = styled.div<{ icon: IconName }>`
    cursor: pointer;
    border: 1px solid var(--color-gray-300);
    border-radius: var(--border-radius-8);
    padding: var(--space-32) var(--space-42);
    text-align: left;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        transform: scale(1.05);
    }
`;

const ServiceTitle = styled(Typography)`
    color: var(--color-gray);
    margin-bottom: var(--space-20);
`;

const ServiceDescription = styled(Typography)`
    color: var(--color-text);
`;

const IconWrapper = styled.div<{ icon: IconName }>`
    margin-bottom: var(--space-20);
`;

const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
    return (
        <ServicesCardBase icon={service.icon}>
            <IconWrapper icon={service.icon}>
                <Icon iconName={service.icon} height="7rem" width="7rem" />
            </IconWrapper>

            <ServiceTitle variant="h5" weight="bold">
                {service.title}
            </ServiceTitle>
            <ServiceDescription variant="paragraphSM" weight="normal">
                {service.description}
            </ServiceDescription>
        </ServicesCardBase>
    );
};

export { ServicesCard };
