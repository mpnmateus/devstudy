import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho.jsx";
import ResumoEstudos from "./components/ResumoEstudos.jsx";
import MensagemInicial from "./components/MensagemInicial.jsx";
import ListaTopicos from "./components/ListaTopicos.jsx";
import FiltroStatus from "./components/FiltroStatus.jsx";

function App() {
  const [topicos, setTopicos] = useState([]);
  
  console.log("App renderizou");
  async function buscarTopicos(){
    const resposta = await fetch("http://localhost:3000/topicos");
    const dados = await resposta.json();
    console.log("Dados recebidos da API");
    console.log(dados);
    setTopicos(dados);
  }

  useEffect(() => {
    buscarTopicos();
  }, []);

  return (
    <div>
      <Cabecalho />

      <ResumoEstudos />

      <MensagemInicial />

      <FiltroStatus />

      <ListaTopicos topicos={topicos}/>
    </div>
  );
}

export default App;