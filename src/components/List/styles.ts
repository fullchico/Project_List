import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: bold;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            width: 2rem;
            height: 2rem;

            padding: 0;

            border-radius: 0.5rem;
            background: var(--text-title);
            border: none;
            cursor: pointer;
            outline: 0px auto -webkit-focus-ring-color;

            color: var(--shape);

            transition: background 2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    ul {
        margin-top: 30px;
    }
`;
