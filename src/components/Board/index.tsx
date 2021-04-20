import List from "../List";
import ModalCreatCard from "../ModalCreatCard";
import ModalEditCard from "../ModalEditCard";
import { Container, Content } from "./styles";

export default function Board() {
    return (
        <Container>
            <Content>
                <ModalCreatCard />
                <ModalEditCard />

                <List title="Projetado" button={true} typeFilter="projetado" />

                <List title="Desenvolvimento" typeFilter="iniciado" />

                <List title="Concluidos" typeFilter="concluido" />

                <List title="Cancelados" typeFilter="cancelado" />
            </Content>
        </Container>
    );
}
