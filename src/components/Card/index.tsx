import { useContext } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { CardContext } from "../../hooks/CardContext";
import ModalEditCard from "../ModalEditCard";
import { Container } from "./styles";

interface CardProps {
    id: string;
    responsavel: string;
    titulo: string;
    descricao: string;
    viabilidade: number;
    status: string;
    dataInicio: string;
    dataFinal: string;
    iniciado?: string;
    finalizado?: string;
}

export default function Card(props: CardProps) {
    const {
        editCard,
        cancelCard,
        desenvolvimentoCard,
        concluidoCard,
    } = useContext(CardContext);

    return (
        <>
            <Container viabilidade={props.viabilidade}>
                <section>
                    {props.status === "concluido" ||
                    props.status === "cancelado" ? null : (
                        <span className="TopButtonsCard">
                            <button>
                                <MdDelete
                                    onClick={() => cancelCard(props.id)}
                                />
                            </button>

                            <button onClick={() => editCard(props.id)}>
                                <MdModeEdit />
                            </button>
                        </span>
                    )}

                    <section>
                        <h3>{props.titulo}</h3>
                        <h5>
                            <b>Viabilidade: </b>
                            {props.viabilidade}
                        </h5>
                        <span>
                            <b>Data: </b>
                        </span>
                        <span>inicio: </span>
                        <span>{props.dataInicio}</span>
                        <span> | </span>
                        <span>final:</span>
                        <span>{props.dataFinal}</span>
                    </section>

                    <p>
                        <b>Descrição: </b>
                        {props.descricao}
                    </p>

                    <section>
                        <span>
                            <b>Responsavel: </b>
                            {props.responsavel}
                        </span>
                    </section>
                </section>

                <footer>
                    {props.finalizado !== "" ? (
                        <span>
                            <b>finalizado: </b>
                            {props.finalizado}
                        </span>
                    ) : (
                        <span>
                            <b>iniciado:</b>
                            {props.iniciado}
                        </span>
                    )}
                    {props.status === "concluido" ||
                    props.status === "cancelado" ? (
                        <button className={props.status}>{props.status}</button>
                    ) : props.status === "iniciado" ? (
                        <button onClick={() => concluidoCard(props.id)}>
                            finalizado
                        </button>
                    ) : (
                        <button onClick={() => desenvolvimentoCard(props.id)}>
                            iniciar
                        </button>
                    )}
                </footer>
            </Container>
        </>
    );
}
