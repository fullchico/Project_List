import { useContext } from "react";
import { CardContext } from "../../hooks/CardContext";
import List from "../List";
import ModalCreatCard from "../ModalCreatCard";
import ModalEditCard from "../ModalEditCard";
import { Container, Content, ContentFilter } from "./styles";

export default function Board() {
    const { filterStatus } = useContext(CardContext);
    return (
        <Container>
            <ModalCreatCard />
            <ModalEditCard />

            {filterStatus !== "" ? (
                <>
                    <ContentFilter>
                        <List typeFilter={filterStatus} />
                    </ContentFilter>
                </>
            ) : (
                <>
                    <Content>
                        <List
                            title="Projetado"
                            button={true}
                            typeFilter="projetado"
                        />

                        <List
                            title="Desenvolvimento"
                            typeFilter="desenvolvimento"
                        />

                        <List title="Concluidos" typeFilter="concluido" />

                        <List title="Cancelados" typeFilter="cancelado" />
                    </Content>
                </>
            )}
        </Container>
    );
}
