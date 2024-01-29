import React from "react";
import "./style.css";

import Agencia from "../../../assets/agencia-viagens.png";
import Barbearia from "../../../assets/barber-shop.png";
import Otica from "../../../assets/oticas-vida.png";
import Sorveteria from "../../../assets/sorveteria-artesanal.png";

export default function Projetos (props) {
    return (
        <section className={props.tipoBackground === "bg-branco" ? "bg-branco" : "bg-preto"} id="projetos">
          <div className="limita-secao secao-projetos">
            <div className="secao-projetos-texto">
              <h2><span className="secao-span">Meus</span> Projetos</h2>
              <p>Estes são alguns dos projetos que já realizei</p>
            </div>
            <nav className="secao-projetos-projetos">
              <a href="https://agencia-digital-zeta.vercel.app/" target="_black"><img src={Agencia} alt="Agencia de Viagens" /></a>
              <a href="https://barber-shop-eight-pi.vercel.app/" target="_black"><img src={Barbearia} alt="Barbearia" /></a>
              <a href="https://sorveteria-gelateria-one.vercel.app/" target="_black"><img src={Sorveteria} alt="Sorveteria Artesanal" /></a>
              <a href="https://loja-de-oculos-phi.vercel.app/" target="_black"><img src={Otica} alt="Oculos Vida" /></a>
            </nav>
          </div>
        </section>
    );
}