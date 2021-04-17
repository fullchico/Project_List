import List from "../List";
import { Container, Content } from "./styles";

export default function Board() {
    return (
        <Container>
            <Content>
                <List title="Projetado" button={true} typeFilter="projetado" />

                <List title="Desenvolvimento" typeFilter="iniciado" />

                <List title="Concluidos" typeFilter="concluido" />

                <List title="Cancelados" typeFilter="cancelado" />
            </Content>
        </Container>
    );
}
