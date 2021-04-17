import { MdAdd } from "react-icons/md";

import { useEffect, useState } from "react";
import api from "../../service/api";

import Card from "../Card";
import { Container } from "./styles";

interface PropsBoard {
    title: string;
    button?: boolean;
    typeFilter?: string;
}

interface ListProject {
    id: number;
    responsavel: string;
    titulo: string;
    descricao: string;
    viabilidade: number;
    status: string;
    dataInicio: string;
    dataFinal: string;
    iniciado: string;
    finalizado: string;
}

export default function List({ title, button, typeFilter }: PropsBoard) {
    const [list, setList] = useState<ListProject[]>([]);

    useEffect(() => {
        api.get("list")
            .then((response) => (response = response.data))
            .then((data) => setList(data));
    }, []);

    return (
        <Container>
            <header>
                <h2>{title}</h2>
                {button && (
                    <button type="button">
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
