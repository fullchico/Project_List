import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../service/api";

interface CardProviderProps {
    children: ReactNode;
}

interface ListProject {
    id: number;
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

interface CardProps {
    list: ListProject[];
    hadleOpenModalCreateCard: () => void;

    isOpenModalCreateCard: boolean;
}

export const CardContext = createContext<CardProps>({} as CardProps);

export function CardProvider({ children }: CardProviderProps) {
    const [list, setList] = useState<ListProject[]>([]);

    const [isOpenModalCreateCard, setIsOpenModalCreateCard] = useState<boolean>(
        false
    );

    // Metodo_get
    useEffect(() => {
        api.get("list")
            .then((response) => (response = response.data))
            .then((data) => setList(data));
    }, []);

    function hadleOpenModalCreateCard() {
        setIsOpenModalCreateCard(!isOpenModalCreateCard);
    }

    return (
        <CardContext.Provider
            value={{ list, hadleOpenModalCreateCard, isOpenModalCreateCard }}
        >
            {children}
        </CardContext.Provider>
    );
}
