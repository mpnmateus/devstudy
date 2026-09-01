import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho.jsx";
import ResumoEstudos from "./components/ResumoEstudos.jsx";
import MensagemInicial from "./components/MensagemInicial.jsx";
import ListaTopicos from "./components/ListaTopicos.jsx";
import FiltroStatus from "./components/FiltroStatus.jsx";
import FormularioTopico from "./components/FormularioTopico.jsx";

function App() {
  const [topicos, setTopicos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function buscarTopicos(){
    setErro("");
    setCarregando(true);
    
    try {
      const resposta = await fetch("http://localhost:3000/topicos");
      
      if(!resposta.ok){
        throw new Error("Erro ao buscar tópicos.");
      }

      const dados = await resposta.json();

      setTopicos(dados);

    } catch (erro){
      console.error("Erro ao carregar tópicos: ", erro);
      setErro("Não foi possível carregar os tópicos.");
    
    } finally {
      setCarregando(false);
      console.log("Finalizando requisição");
    }

  }

  useEffect(() => {
    buscarTopicos();
  }, []);

  if(carregando){
      return <p>Carregando tópicos...</p>
  }

  if(erro){
    return <p>{erro}</p>
  }

  return (
    <div>
      <Cabecalho />

      <ResumoEstudos />

      <MensagemInicial />

      <FiltroStatus />

      <FormularioTopico aoCadastrar={buscarTopicos}/>

      <ListaTopicos 
        topicos={topicos}
        aoAtualizar={buscarTopicos}
      />
    </div>
  );
}

export default App;