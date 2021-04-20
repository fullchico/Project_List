import { useContext, useState } from "react";
import { CardContext } from "../../hooks/CardContext";
import { v4 as uuidv4 } from "uuid";

import { MdCancel } from "react-icons/md";

import {
    Container,
    ContentDate,
    ContentGrupViabilidade,
    ListViabilidade,
} from "./styles";

import Modal from "react-modal";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

export default function ModalCreatCard() {
    const [inputTitulo, setInputTitulo] = useState("");
    const [inputDescricao, setInputDescricao] = useState("");
    const [inputValidade, setInputValidade] = useState(1);
    const [inputDataInicial, setInpuDatatInicial] = useState("");
    const [inputDataFinal, setInputDataFinal] = useState("");
    const [inputAutor, setInputAutor] = useState("");

    const {
        hadleOpenModalCreateCard,
        isOpenModalCreateCard,
        createCardProject,
    } = useContext(CardContext);

    function hadleSubmitButton() {
        // data format
        const dataFinal = new Date(inputDataFinal + "T00:00");
        const dataInicio = new Date(inputDataInicial + "T00:00");

        const data = {
            id: uuidv4(),
            responsavel: inputAutor,
            titulo: inputTitulo,
            descricao: inputDescricao,
            viabilidade: inputValidade,
            status: "projetado",
            dataInicio: dataInicio.toLocaleDateString("pt-BR"),
            dataFinal: dataFinal.toLocaleDateString("pt-BR"),
            iniciado: "",
            finalizado: "",
        };

        // validação de campos
        if (data.titulo === "") return toast.error("ensira o titulo");

        if (data.descricao === "") return toast.error("informer a descrição");

        if (data.dataInicio === "Invalid Date")
            return toast.error("Ensira a data inicial");

        if (data.dataFinal === "Invalid Date")
            return toast.error("insira a data final");

        if (data.responsavel === "")
            return toast.error("ensira o Autor do projeto");

        createCardProject(data);

        // Zerando states
        setInputTitulo("");
        setInputDescricao("");
        setInputValidade(1);
        setInpuDatatInicial("");
        setInputDataFinal("");
        setInputAutor("");
    }

    return (
        <Modal
            isOpen={isOpenModalCreateCard}
            onRequestClose={hadleOpenModalCreateCard}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Projeto</h2>

                <button
                    className="react-modal-close"
                    onClick={(event) => {
                        event.preventDefault();
                        hadleOpenModalCreateCard();
                    }}
                >
                    <MdCancel />
                </button>

                <label htmlFor="">
                    <input
                        type="text"
                        placeholder="Titulo do projeto"
                        onChange={(event) => {
                            setInputTitulo(event.target.value);
                        }}
                    />
                </label>

                <label htmlFor="">
                    <textarea
                        placeholder="Descrição do projeto"
                        onChange={(event) => {
                            setInputDescricao(event.target.value);
                        }}
                    />
                </label>

                <ContentDate>
                    <label htmlFor="">
                        Data Inicial:
                        <input
                            type="Date"
                            onChange={(event) => {
                                setInpuDatatInicial(event.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="">
                        Data Final:
                        <input
                            type="Date"
                            onChange={(event) => {
                                setInputDataFinal(event.target.value);
                            }}
                        />
                    </label>
                </ContentDate>
                <ContentGrupViabilidade>
                    <span>Viabilidade:</span>
                    <ul>
                        <ListViabilidade
                            onClick={() => setInputValidade(1)}
                            inputValidade={inputValidade}
                            viabilidade={1}
                        >
                            1
                        </ListViabilidade>
                        <ListViabilidade
                            onClick={() => setInputValidade(2)}
                            inputValidade={inputValidade}
                            viabilidade={2}
                        >
                            2
                        </ListViabilidade>
                        <ListViabilidade
                            onClick={() => setInputValidade(3)}
                            inputValidade={inputValidade}
                            viabilidade={3}
                        >
                            3
                        </ListViabilidade>
                        <ListViabilidade
                            onClick={() => setInputValidade(4)}
                            inputValidade={inputValidade}
                            viabilidade={4}
                        >
                            4
                        </ListViabilidade>
                        <ListViabilidade
                            onClick={() => setInputValidade(5)}
                            inputValidade={inputValidade}
                            viabilidade={5}
                        >
                            5
                        </ListViabilidade>
                    </ul>
                </ContentGrupViabilidade>

                <label htmlFor="">
                    <input
                        type="text"
                        placeholder="Autor do projeto"
                        onChange={(event) => {
                            setInputAutor(event.target.value);
                        }}
                    />
                </label>

                <button
                    type="submit"
                    onClick={(event) => {
                        event.preventDefault();
                        hadleSubmitButton();
                    }}
                >
                    Confirmar
                </button>
            </Container>
        </Modal>
    );
}
