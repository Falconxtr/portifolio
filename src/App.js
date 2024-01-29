import React, { useState } from 'react';
import './App.css';

import Topo from './Componentes/Topo';
import Banner from './Componentes/Conteudo/Banner';
import Sobre from './Componentes/Conteudo/Sobre';
import Projetos from './Componentes/Conteudo/Projetos';
import Experiencia from './Componentes/Conteudo/Experiencia';

function App() {
  const [novaCor, setNovaCor] = useState("bg-branco");
  const [novaCor2, setNovaCor2] = useState("bg-branco2");

   /* const alterarCor = () => {
    if (novaCor === "bg-branco" & novaCor2 === "bg-branco2") {
      setNovaCor("bg-preto");
      setNovaCor2("bg-preto2");
    } else {
      setNovaCor("bg-branco");
      setNovaCor2("bg-branco2")
    }
  };*/

  return (
    <div className="App">
      <Topo tipoBackground={novaCor}  setState={setNovaCor} tipoBackground2={novaCor2}  setState2={setNovaCor2} /> 
      <main>
        <Banner tipoBackground={novaCor} />
        <Sobre tipoBackground2={novaCor2} />
        <Projetos tipoBackground={novaCor}/>
        <Experiencia tipoBackground2={novaCor2}/>
      </main>
    </div>
  );
}

export default App;