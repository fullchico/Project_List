import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        cursor: pointer;

        box-shadow: 0px -2px 30px black;

        &.Concluidos {
            background: var(--green);
            color: var(--shape);
        }

        &.Cancelados {
            background: var(--red);
            color: var(--shape);
        }
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`;
