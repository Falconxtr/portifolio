import React from "react";
import "./style.css";

import Card from "../../Card";

export default function Experiencia (props) {
    return (
        <section className={props.tipoBackground2 === "bg-branco2" ? "bg-branco2": "bg-preto2"} id="experiencia">
          <div className="limita-secao secao-experiencia">
            <h2><span className="secao-span">Experiência</span> Profissional</h2>
            <div className="secao-experiencia-cards">
              <Card
                Empresa= "BRDefender Tecnologia e Segurança da informação"
                Cargo= "Assistente Administrativo de TI"
                Modelo= "Estágio"
                Data= "Set de 2021 - Abr de 2022"
              />
              <Card
                Empresa= "BRDefender Tecnologia e Segurança da informação"
                Cargo= "Analista de TI Nível 1"
                Modelo= "Tempo Integral"
                Data= "Mai de 2022 - Jan de 2023"
              />
              <Card
                Empresa= "Itech Tecnologia"
                Cargo= "Analista de Suporte"
                Modelo= "Tempo Integral"
                Data= "Jan de 2023 - Out de 2023"
              />
              <Card
                Empresa= "Itech Tecnologia"
                Cargo= "Analista de Infraestrutura e Segurança"
                Modelo= "Tempo Integral"
                Data= "Nov de 2023 - o momento"
              />
            </div>
          </div>
        </section>
    );
}