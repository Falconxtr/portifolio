import React from "react";
import "./style.css";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Topo(props) { 
    const alterarCor = () => {
        if (props.tipoBackground === "bg-branco") {
            props.setState("bg-preto");
            props.tipoBackground2 === "bg-branco2" && props.setState2("bg-preto2");
        } else {
            props.setState("bg-branco");
            props.tipoBackground2 === "bg-preto2" && props.setState2("bg-branco2");
        }
    };

    const classeTopo = `topo ${props.tipoBackground}`
    
    return (
        <header className={classeTopo} >
            <div className="topo-nome">
                <button onClick={alterarCor}>{props.tipoBackground === "bg-branco" ? <FaMoon size={20} /> : <FaSun size={20} style={{ color: "white" }} /> }</button>
            <h1>Lucas Teixeira</h1>
            </div>
            <nav>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#experiencia">Experiência</a>
            </nav>
        </header>
    );
}