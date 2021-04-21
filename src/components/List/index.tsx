import { useContext } from "react";
import { CardContext } from "../../hooks/CardContext";
import Card from "../Card";

import { Container } from "./styles";
import { MdAdd } from "react-icons/md";

interface PropsBoard {
    title: string;
    button?: boolean;
    typeFilter?: string;
}

export default function List({ title, button, typeFilter }: PropsBoard) {
    const { list, hadleOpenModalCreateCard, loading } = useContext(CardContext);

    return (
        <Container>
            <header>
                {loading ? <h2>Loading...</h2> : <h2>{title}</h2>}
                {button && (
                    <button
                        type="button"
                        onClick={() => hadleOpenModalCreateCard()}
                    >
                        <MdAdd />
                    </button>
                )}
            </header>
            <ul>
                {list.map((card) =>
                    card.status === typeFilter ? (
                        <Card key={card.id} {...card} />
                    ) : null
                )}
            </ul>
        </Container>
    );
}
