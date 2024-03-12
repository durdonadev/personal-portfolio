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

export const ServicesCardBase = styled.div<{ icon: IconName }>`
    position: relative;
    cursor: pointer;
    border-radius: 0 var(--border-radius-40) var(--border-radius-40)
        var(--border-radius-40);
    max-width: 34rem;
    box-shadow: var(--shadow-2xl);
    display: flex;
    flex-direction: column;
    transition: all 1s;

    &:hover {
        transform: scale(1.08);
    }

    background-color: ${({ icon }) => {
        switch (icon) {
            case "frontend":
                return "var(--purple-25)";
            case "backend":
                return "#faf0d7";
            case "internet":
                return "#dce3f3";
            case "management":
                return "#dcece1";
        }
    }};
`;

const ServiceTextWrapper = styled.div<{ icon: string }>`
    padding: var(--space-30) var(--space-24);
`;

const ServiceTitle = styled(Typography)`
    color: var(--jaguar-900);
    margin-bottom: var(--space-16);
`;

const ServiceDescription = styled(Typography)`
    color: var(--gray-500);
`;

const IconWrapper = styled.div<{ icon: IconName }>`
    padding: var(--space-16);
    display: flex;
    align-items: center;
    border-radius: 0 50% 50% 50%;
    height: 12.4rem;
    width: 12.4rem;
    margin-bottom: var(--space-36);

    background-color: ${({ icon }) => {
        switch (icon) {
            case "frontend":
                return "#f8d9f1";
            case "backend":
                return "#fbe6b2";
            case "internet":
                return "#b8c9f2";
            case "management":
                return "#b5e4ca";
        }
    }};
`;

const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
    return (
        <ServicesCardBase icon={service.icon}>
            <IconWrapper icon={service.icon}>
                <Icon iconName={service.icon} height="7rem" width="8rem" />
            </IconWrapper>

            <ServiceTextWrapper icon={service.icon}>
                <ServiceTitle variant="h6" weight="bold">
                    {service.title}
                </ServiceTitle>
                <ServiceDescription variant="paragraphMD" weight="normal">
                    {service.description}
                </ServiceDescription>
            </ServiceTextWrapper>
        </ServicesCardBase>
    );
};

export { ServicesCard };
