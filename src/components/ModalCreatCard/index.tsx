import { useContext } from "react";
import { CardContext } from "../../hooks/CardContext";

import { MdCancel } from "react-icons/md";

import { ActiveButton, Container, TransactionTypeContainer } from "./styles";

import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ModalCreatCard() {
    const { hadleOpenModalCreateCard, isOpenModalCreateCard } = useContext(
        CardContext
    );
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
                <input type="text" placeholder="Titulo do projeto" />
                <textarea placeholder="Descrição do projeto" />

                <label htmlFor="">
                    Data Inicial
                    <input type="date" className="Date" />
                </label>

                <div className="Date">
                    <label htmlFor="">
                        Data Final
                        <input type="date" />
                    </label>
                </div>
            </Container>
        </Modal>
    );
}
