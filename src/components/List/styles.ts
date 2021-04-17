import styled from "styled-components";

export const Container = styled.div`
    padding: 0 0.8rem;
    height: 100%;
    flex: 0 0 20rem;

    & + div {
        border-left: 0.06rem solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2, 6rem;

        h2 {
            font-weight: bold;
            font-size: 1rem;
            padding: 0 0.6rem;
        }

        button {
            width: 5rem;
            height: 1rem;

            font-size: 1rem;

            padding: 0;

            margin: 0;
            border-radius: 0.2rem;
            background: var(--text-title);
            border: none;
            cursor: pointer;
            outline: 0rem auto -webkit-focus-ring-color;

            color: var(--shape);

            transition: background 2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    ul {
        margin-top: 1.8rem;
    }
`;
