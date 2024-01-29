import React from "react";
import "./style.css";

export default function Sobre (props) {
    return (
        <section className={props.tipoBackground2 === "bg-branco2" ? "bg-branco2": "bg-preto2"} id="sobre">
            <div className="limita-secao secao-sobre">
                <h2>Meu nome é <span className="secao-span">Lucas Teixeira de Jesus👋</span></h2>
                <p>Sou do Brasil, Salvador/BA. Cursando Análise e Desenvolvimento de Sistemas na Uniasselvi - Caminho das Árvores. </p>
                <p>Demonstro grande entusiasmo quando o tema é tecnologia da informação. Ingressei inicialmente nesse universo por meio da área de redes e infraestrutura, contudo, atualmente, estou direcionando meus estudos para realizar uma transição para a área de desenvolvimento web. Essa mudança reflete minha busca constante por desafios e aprimoramento profissional, e estou empolgado em explorar novos horizontes dentro do campo da TI.</p>
            </div>
        </section>
    );
}