import React from "react";
import "./style.css";

export default function Card (props) {
    return (
        <div className="box-card">
            <div className="box-card-conteudo">
                <h1>{props.Empresa}</h1>
                <p>{props.Cargo}</p>
                <p>{props.Modelo}</p>
                <p>{props.Data}</p>
            </div>
        </div>
    );
}