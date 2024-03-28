import styled from "styled-components";
import { tools } from "./data";
import { SectionBase } from "../../../components/SectionBase";
import { Tools } from "./Tools";

const ToolBarSectionBase = styled(SectionBase)`
    border-bottom: 1px solid var(--color-border);
`;

export const ToolsBar = () => {
    return (
        <ToolBarSectionBase>
            <Tools tools={tools} />
        </ToolBarSectionBase>
    );
};
