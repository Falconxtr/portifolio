import React from "react";
import "./style.css";

import Bannerimg from "../../../assets/banner-imagem-hospedagem.png";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Banner(props) {
    const classeBanner = `secao-banner-texto ${props.tipoBackground === "bg-branco" ? "bg-branco" : "bg-preto" }`;
    
    return (
        <section className={props.tipoBackground === "bg-branco" ? "bg-branco" : "bg-preto" } id="home">
          <div className="secao-banner limita-secao">
            <div className={classeBanner}>
              <p>Olá pessoal,</p>
              <h1>Seja bem-vindo</h1>
              <p>ao meu Portifólio Website</p>
              <div className="secao-banner-links">
                <a href="https://github.com/Falconxtr" target="_blank"><FaGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/lucas-teixeira-662148209/" target="_blank"><FaLinkedinIn size={30}/></a>
              </div>
            </div>
            <div>
              <img src={Bannerimg} alt="Banner" />
            </div>
          </div>
        </section>
    );
}