import Board from "./components/Board";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import { CardProvider } from "./hooks/CardContext";

import { GlobalStyle } from "./styles/global";

export default function App() {
    return (
        <CardProvider>
            <Header />
            <Dashboard />
            <Board />
            <GlobalStyle />
        </CardProvider>
    );
}
