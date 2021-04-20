import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../service/api";

// interface para inglobar o contexto
interface CardProviderProps {
    children: ReactNode;
}

// interfaxe da requisição da api
interface ListProject {
    id: string;
    responsavel: string;
    titulo: string;
    descricao: string;
    viabilidade: number;
    status: string;
    dataInicio: string;
    dataFinal: string;
    iniciado: string;
    finalizado: string;
}

// interface do contexto
interface CardProps {
    list: ListProject[];
    dadoStorage: ListProject;

    isOpenModalCreateCard: boolean;
    isOpenModalEditCard: boolean;

    hadleOpenModalCreateCard: () => void;
    hadleOpenModalEditCard: () => void;
    createCardProject: (date: ListProject) => void;
    editCardProject: (date: ListProject) => void;
    editCard: (id: string) => void;
    cancelCard: (id: string) => void;
    concluidoCard: (id: string) => void;
    desenvolvimentoCard: (id: string) => void;
}

export const CardContext = createContext<CardProps>({} as CardProps);

export function CardProvider({ children }: CardProviderProps) {
    // estado de armazenamento de Lista de projetos da api
    const [list, setList] = useState<ListProject[]>([]);

    // estados para modal
    const [isOpenModalCreateCard, setIsOpenModalCreateCard] = useState(false);
    const [isOpenModalEditCard, setIsOpenModalEditCard] = useState(false);

    // estado para localStorage
    const [dadoStorage, setDadoStorage] = useState<ListProject>(() => {
        const storagedCard = localStorage.getItem("project");
        if (storagedCard) {
            return JSON.parse(storagedCard);
        }
        return [];
    });

    // Metodo get da api, buscando dados do backend
    useEffect(() => {
        api.get("list").then((response) => setList(response.data));
    }, []);

    // Criar um novo projeto
    async function createCardProject(data: ListProject) {
        alert("cadastro realizadso");

        const response = await api.post("list", data);

        const listDate = response.data;

        setList([...list, listDate]);

        setIsOpenModalCreateCard(false);
    }

    // editar  projeto
    async function editCardProject(data: ListProject) {
        const response = await api.put(`list/${data.id}`, {
            ...data,
            descricao: data.descricao,
            viabilidade: data.viabilidade,
        });

        const newData = list.filter((data) => data.id !== response.data.id);
        const date = response.data;

        setList([date, ...newData]);
        hadleOpenModalEditCard();
    }

    // mudança de estado para cancelado
    async function cancelCard(id: string) {
        localStorage.setItem(
            "project",
            JSON.stringify(list.filter((dado) => dado.id.includes(id)))
        );
        const response = JSON.parse(localStorage.getItem("project")!);
        const dado = response[0];
        setDadoStorage(dado);

        const data = new Date();
        const editResponse = await api.put(`list/${dado.id}`, {
            ...dado,
            finalizado: data.toLocaleDateString("pt-BR"),
            status: "cancelado",
        });

        const newData = list.filter((data) => data.id !== editResponse.data.id);
        const date = editResponse.data;

        setList([date, ...newData]);
    }

    // mudança de estado para conlcuido
    async function concluidoCard(id: string) {
        localStorage.setItem(
            "project",
            JSON.stringify(list.filter((dado) => dado.id.includes(id)))
        );

        const response = JSON.parse(localStorage.getItem("project")!);
        const dado = response[0];
        setDadoStorage(dado);

        const data = new Date();

        const editResponse = await api.put(`list/${dado.id}`, {
            ...dado,
            finalizado: data.toLocaleDateString("pt-BR"),
            status: "concluido",
        });

        const newData = list.filter((data) => data.id !== editResponse.data.id);
        const date = editResponse.data;

        setList([date, ...newData]);
    }

    // mudança do estado para  desenvolvimento
    async function desenvolvimentoCard(id: string) {
        localStorage.setItem(
            "project",
            JSON.stringify(list.filter((dado) => dado.id.includes(id)))
        );

        const response = JSON.parse(localStorage.getItem("project")!);
        const dado = response[0];

        setDadoStorage(dado);

        const data = new Date();

        const editResponse = await api.put(`list/${dado.id}`, {
            ...dado,
            iniciado: data.toLocaleDateString("pt-BR"),
            status: "iniciado",
        });

        const newData = list.filter((data) => data.id !== editResponse.data.id);
        const date = editResponse.data;

        setList([date, ...newData]);
    }

    // passando valor do prejto id, e injetando no localStorag
    function editCard(id: string) {
        localStorage.setItem(
            "project",
            JSON.stringify(list.filter((dado) => dado.id.includes(id)))
        );
        const response = JSON.parse(localStorage.getItem("project")!);
        const data = response[0];
        setDadoStorage(data);
        hadleOpenModalEditCard();
    }

    // logica para abrir modal de criação

    function hadleOpenModalCreateCard() {
        setIsOpenModalCreateCard(!isOpenModalCreateCard);
    }

    // logica para abrir modal de edição
    function hadleOpenModalEditCard() {
        setIsOpenModalEditCard(!isOpenModalEditCard);
    }

    // valores de contexto
    return (
        <CardContext.Provider
            value={{
                list,
                hadleOpenModalCreateCard,
                isOpenModalCreateCard,
                createCardProject,
                isOpenModalEditCard,
                hadleOpenModalEditCard,
                editCard,
                editCardProject,
                dadoStorage,
                cancelCard,
                concluidoCard,
                desenvolvimentoCard,
            }}
        >
            {children}
        </CardContext.Provider>
    );
}
