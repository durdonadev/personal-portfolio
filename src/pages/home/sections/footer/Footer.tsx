import styled from "styled-components";
import { Container } from "../../../components";
import { SectionSidePadding } from "../../../components/SectionBase";
import logo from "../../../../assets/images/logo-text.png";
import IconLink from "../../../components/IconLink";
import { Typography } from "../../../../design-system";

const FooterSectionBase = styled.footer`
    background-color: var(--color-footer);
    padding: var(--space-48) var(--space-96);

    ${SectionSidePadding}
`;

const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: var(--space-32);

    @media screen and (max-width: 50em) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const LogoImage = styled.img`
    height: 4rem;
    width: auto;
`;

const CopyRightText = styled(Typography)`
    color: var(--color-white);
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-20);
`;

const Footer = () => {
    return (
        <FooterSectionBase id="footer">
            <FooterContainer>
                <LogoImage src={logo} alt="" />
                <CopyRightText variant="paragraphSM">
                    Copyright © 2024 DurdonaDev
                </CopyRightText>
                <SocialMedia>
                    <IconLink
                        href="https://www.linkedin.com/in/durdonadev"
                        iconName="linkdin-icon"
                    />
                    <IconLink
                        href="https://github.com/durdonadev"
                        iconName="github-icon"
                    />
                    <IconLink
                        href="https://twitter.com/DurdonaDev"
                        iconName="twitter-icon"
                    />
                    <IconLink
                        href="https://www.facebook.com/profile.php?id=100079816749162"
                        iconName="facebook"
                    />
                </SocialMedia>
            </FooterContainer>
        </FooterSectionBase>
    );
};

export { Footer };
