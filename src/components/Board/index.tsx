import React from "react";
import List from "../List";
import { Container } from "./styles";

export default function Board() {
    return (
        <Container>
            <List title="Planejado" button={true} />
            <List title="Desenvolvimento" />
            <List title="Concluidos" />
            <List title="Cancelados" />
        </Container>
    );
}
