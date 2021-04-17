import Card from "../Card";
import { Container } from "./styles";

import { MdAdd } from "react-icons/md";

interface PropsBoard {
    title: string;
    button?: boolean;
}

export default function index({ title, button }: PropsBoard) {
    function HandleButton() {
        alert("Clicou");
    }

    return (
        <Container>
            <header>
                <h2>{title}</h2>
                {button && (
                    <button onClick={HandleButton} type="button">
                        +
                    </button>
                )}
            </header>

            <ul>
                <Card />
                <Card />
                <Card />
            </ul>
        </Container>
    );
}
