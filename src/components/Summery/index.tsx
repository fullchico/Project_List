import { useContext } from "react";
import { CardContext } from "../../hooks/CardContext";
import { Container } from "./styles";

export default function Summery() {
    const { list, hadleFilterStatus } = useContext(CardContext);

    const desenvolvimento = list.filter(
        (desenvolvimento) => desenvolvimento.status === "desenvolvimento"
    );

    const concluidos = list.filter(
        (concluido) => concluido.status === "concluido"
    );

    const cancelados = list.filter(
        (cancelado) => cancelado.status === "cancelado"
    );

    return (
        <Container>
            <div onClick={() => hadleFilterStatus("")}>
                <header>Total: {list.length}</header>
                <strong>Todos</strong>
            </div>

            <div
                className="Iniciados"
                onClick={() => hadleFilterStatus("desenvolvimento")}
            >
                <header>total:{desenvolvimento.length}</header>
                <strong>Iniciados</strong>
            </div>

            <div
                className="Concluidos"
                onClick={() => hadleFilterStatus("concluido")}
            >
                <header>Total: {concluidos.length}</header>
                <strong>Concluidos</strong>
            </div>

            <div
                className="Cancelados"
                onClick={() => hadleFilterStatus("cancelado")}
            >
                <header>Total: {cancelados.length}</header>
                <strong>Cancelados</strong>
            </div>
        </Container>
    );
}
