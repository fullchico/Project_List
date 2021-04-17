import React from "react";
import Board from "./components/Board";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import { GlobalStyle } from "./styles/global";

export default function App() {
    return (
        <>
            <Header />
            <Dashboard />
            <Board />
            <GlobalStyle />
        </>
    );
}
