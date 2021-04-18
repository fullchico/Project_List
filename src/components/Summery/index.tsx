import { useContext } from "react";
import { CardContext } from "../../hooks/CardContext";
import { Container } from "./styles";

export default function Summery() {
    const { list } = useContext(CardContext);

    const iniciado = list.filter((iniciado) => iniciado.status === "iniciado");

    const concluidos = list.filter(
        (concluido) => concluido.status === "concluido"
    );

    const cancelados = list.filter(
        (cancelado) => cancelado.status === "cancelado"
    );

    return (
        <Container>
            <div>
                <header>total: {iniciado.length}</header>
                <strong>Iniciados</strong>
            </div>

            <div className="Concluidos">
                <header>Total: {concluidos.length}</header>
                <strong>Concluidos</strong>
            </div>

            <div className="Cancelados">
                <header>Total: {cancelados.length}</header>
                <strong>Cancelados</strong>
            </div>
        </Container>
    );
}
