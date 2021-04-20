import styled from "styled-components";

interface ValidateNivel {
    viabilidade: number;
}

export const Container = styled.div<ValidateNivel>`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: ${(props) => {
        switch (props.viabilidade) {
            case 1:
                return `1.25rem solid var(--baixo)`;
            case 2:
                return `1.25rem solid var(--semibaixo)`;

            case 3:
                return `1.25rem solid var(--medio)`;

            case 4:
                return `1.25rem solid var(--semialto)`;

            case 5:
                return `1.25rem solid var(--alto)`;

            default:
                return "";
        }
    }};

    section {
        margin-bottom: 0.5rem;

        h5 {
            margin-bottom: 0.5rem;
        }

        h3 {
            margin-bottom: 0.5rem;
        }

        p {
            margin-bottom: 0.5rem;
        }
    }

    span {
        margin-bottom: 1rem;
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

            color: var(--shape);

            font-weight: bold;

            transition: background 2s;

            background: var(--text-title);

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
