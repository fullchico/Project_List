import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    label {
        color: var(--text-title);
        font-size: 1rem;
    }

    input[type="text"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        margin-bottom: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    input[type="number"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        margin-bottom: 1rem;

        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea {
        margin-bottom: 1rem;
        width: 100%;
        min-height: 140px;
        height: 60px;

        font-weight: 400;
        font-size: 1rem;

        border: 1px solid #dcdce6;
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
        line-height: 1.5rem;
        resize: none;
        background: #e7e9ee;

        &::placeholder {
            color: var(--text-body);
        }
    }

    button {
        font-size: 2rem;
        outline: 0rem auto -webkit-focus-ring-color;
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const ContentDate = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    label {
        color: var(--text-title);
        font-size: 1rem;
    }

    input[type="date"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        margin-bottom: 1rem;
    }
`;

export const ContentGrupViabilidade = styled.section`
    span {
        color: var(--text-title);
        margin-bottom: 1rem;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        padding: 0;
        margin: 1rem 0 2rem 0;
    }
`;
interface ValidateNivel {
    viabilidade: number;
    inputValidade?: number;
}

export const ListViabilidade = styled.li<ValidateNivel>`
    border: 1px solid #d7d7d7;
    padding: 0.5rem 2rem;

    border-radius: 0.25rem;

    list-style-type: none;
    cursor: pointer;
    transition: background 0.5s;

    background: ${(props) => {
        switch (props.inputValidade) {
            case 1:
                return props.inputValidade === props.viabilidade
                    ? `var(--baixo)`
                    : "#e7e9ee;";
            case 2:
                return props.inputValidade === props.viabilidade
                    ? `var(--semibaixo)`
                    : "#e7e9ee;";

            case 3:
                return props.inputValidade === props.viabilidade
                    ? `var(--medio)`
                    : "#e7e9ee;";

            case 4:
                return props.inputValidade === props.viabilidade
                    ? `var(--semialto)`
                    : "#e7e9ee;";

            case 5:
                return props.inputValidade === props.viabilidade
                    ? `var(--alto)`
                    : "#e7e9ee;";

            default:
                return "#e7e9ee;";
        }
    }};

    &:hover {
        background: ${(props) => {
            switch (props.viabilidade) {
                case 1:
                    return `var(--baixo)`;
                case 2:
                    return `var(--semibaixo)`;

                case 3:
                    return `var(--medio)`;

                case 4:
                    return `var(--semialto)`;

                case 5:
                    return `var(--alto)`;

                default:
                    return "";
            }
        }};
    }
`;
