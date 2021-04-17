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

    &.semialta {
        border-top: 1.25rem solid var(--semialto);
    }

    &.alta {
        border-top: 1.25rem solid var(--alto);
    }

    span {
        &.TopButtonsCard {
            display: flex;
            justify-content: space-between;

            button {
                width: 2rem;
                height: 1.5rem;

                padding: 0.2rem;
                border-radius: 0.2rem;
                border: none;

                font-size: 1.2rem;

                outline: 0rem auto -webkit-focus-ring-color;

                background: var(--text-title);
                color: var(--shape);

                transition: background 2s;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
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

    footer {
        display: flex;
        justify-content: space-between;

        button {
            width: 5rem;
            height: 1.5rem;

            padding: 0.2rem;
            border-radius: 0.2rem;
            border: none;

            outline: 0rem auto -webkit-focus-ring-color;

            background: var(--text-title);
            color: var(--shape);

            font-weight: bold;

            transition: background 2s;

            &:hover {
                opacity: 0.8;
            }

            &.concluido {
                background: var(--green);
                cursor: not-allowed;
                opacity: 0.6;
            }

            &.cancelado {
                background: var(--red);
                cursor: not-allowed;
                opacity: 0.6;
            }
        }
    }
`;
