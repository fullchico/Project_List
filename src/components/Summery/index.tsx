import { Container } from "./styles";

export default function Summery() {
    return (
        <Container>
            <div>
                <header>total: 0</header>
                <strong>Iniciados</strong>
            </div>

            <div className="Concluidos">
                <header>Total: 0</header>
                <strong>Concluidos</strong>
            </div>

            <div className="Cancelados">
                <header>Total: 0</header>
                <strong>Cancelados</strong>
            </div>
        </Container>
    );
}
