import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Contador from "./pages/Contador";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Disciplinas from "./pages/Disciplinas";
import Sobre from "./pages/Sobre";


export default function App() {
    return (
        <BrowserRouter>
        
            <AppRouter />
            <Login/>
            <Disciplinas/>
            <Contador/>
            <Sobre/>
        </BrowserRouter>
    );
}
