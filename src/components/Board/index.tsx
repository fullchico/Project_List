import List from "../List";
import { Container, Content } from "./styles";

export default function Board() {
    return (
        <Container>
            <Content>
                <List title="Planejado" button={true} />
                <List title="Desenvolvimento" />
                <List title="Concluidos" />
                <List title="Cancelados" />
            </Content>
        </Container>
    );
}
