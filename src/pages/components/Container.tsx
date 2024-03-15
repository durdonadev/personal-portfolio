import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    max-width: 190rem;
    padding: 2.5rem 28.2rem;

    @media (max-width: 106em) {
        //1696
        padding: 2.5rem 21rem;
    }

    @media (max-width: 100em) {
        //1600
        padding: 2.5rem 17rem;
    }

    @media (max-width: 96em) {
        //1536
        padding: 2.5rem 15rem;
    }

    @media (max-width: 90em) {
        //1440
        padding: 2.5rem 12.5rem;
    }

    @media (max-width: 84em) {
        //1344
        padding: 2.5rem 11rem;
    }

    @media (max-width: 75em) {
        //1200
        padding: 2.5rem 10rem;
    }

    @media (max-width: 69em) {
        //1104
        padding: 2.5rem 9.3rem;
    }

    @media (max-width: 64em) {
        //1024
        padding: 2.5rem 8.7rem;
    }
`;

export { Container };
