import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 5rem);
    max-width: 80rem;
    padding: 5rem 0;
    margin: 0 auto;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
