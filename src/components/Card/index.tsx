import {
    MdDoneAll,
    MdCreate,
    MdModeEdit,
    MdDoNotDisturb,
    MdDelete,
} from "react-icons/md";
import { Container } from "./styles";

interface Props {
    id: number;
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

export default function Card(props: Props) {
    function Test() {
        switch (props.viabilidade) {
            case 1:
                return "baixa";
            case 2:
                return "semibaixa";

            case 3:
                return "media";

            case 4:
                return "semialta";

            case 5:
                return "alta";

            default:
                return "";
        }
    }
    return (
        <Container className={`${Test()}`}>
            <section>
                {props.status === "concluido" ||
                props.status === "cancelado" ? null : (
                    <span className="TopButtonsCard">
                        <button>
                            <MdDelete />
                        </button>
                        <button>
                            <MdModeEdit />
                        </button>
                    </span>
                )}

                <br />

                <section>
                    <h3>{props.titulo}</h3>
                    <h5>
                        <b>Viabilidade: {props.viabilidade}</b>
                    </h5>

                    <br />

                    <span>
                        {" "}
                        <b>Data: </b>
                    </span>
                    <span>inicio:</span>
                    <span>{props.dataInicio}</span>
                    <span> | </span>
                    <span>final:</span>
                    <span>{props.dataFinal}</span>
                </section>

                <br />

                <p>
                    <b>Descrição:</b> {props.descricao}
                </p>

                <br />

                <section>
                    <span>
                        <b>Responsavel:</b> {props.responsavel}
                    </span>
                </section>
            </section>

            <br />

            <footer>
                {props.finalizado !== "" ? (
                    <span>
                        <b>finalizado: </b>
                        {props.finalizado}
                    </span>
                ) : (
                    <span>
                        <b>iniciado: </b>
                        {props.iniciado}
                    </span>
                )}

                {props.status === "concluido" ||
                props.status === "cancelado" ? (
                    <button className={props.status}>{props.status}</button>
                ) : (
                    <button>
                        {props.status === "iniciado" ? "finalizado" : "iniciar"}
                    </button>
                )}
            </footer>
        </Container>
    );
}
