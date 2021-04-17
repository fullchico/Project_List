import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 1.25rem solid rgba(230, 236, 245, 0.4);

    &.baixa {
        border-top: 1.25rem solid var(--baixo);
    }

    &.semibaixa {
        border-top: 1.25rem solid var(--semibaixo);
    }

    &.media {
        border-top: 1.25rem solid var(--medio);
    }

    &.semialto {
        border-top: 1.25rem solid var(--semialto);
    }

    &.alto {
        border-top: 1.25rem solid var(--alto);
    }

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }

    p {
        font-weight: 500;
        line-height: 20px;
    }
`;
