import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 5rem);
    max-width: 80rem;
    padding: 5rem 0;
    margin: 0 auto;
`;

export const ContentFilter = styled.div`
    ul {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Content = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
`;
