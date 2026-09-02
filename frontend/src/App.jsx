import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho.jsx";
import ResumoEstudos from "./components/ResumoEstudos.jsx";
import ListaTopicos from "./components/ListaTopicos.jsx";
import FiltroStatus from "./components/FiltroStatus.jsx";
import FormularioTopico from "./components/FormularioTopico.jsx";

function App() {
  const [topicos, setTopicos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [statusSelecionado, setStatusSelecionado] = useState("Todos");

  async function buscarTopicos(){
    
    try {
      const resposta = await fetch("http://localhost:3000/topicos");
      
      if(!resposta.ok){
        throw new Error("Erro ao buscar tópicos.");
      }

      const dados = await resposta.json();

      setTopicos(dados);
      setErro("");

    } catch (erro){
      console.error("Erro ao carregar tópicos: ", erro);
      setErro("Não foi possível carregar os tópicos.");
    
    } finally {
      setCarregando(false);
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

  const topicosFiltrados = 
    statusSelecionado === "Todos" 
    ? topicos 
    : topicos.filter(
        (topico) => topico.status === statusSelecionado
      );

  return (
    <div>
      <Cabecalho />

      <ResumoEstudos topicos={topicos}/>

      <FiltroStatus 
        statusSelecionado={statusSelecionado}
        aoSelecionarStatus={setStatusSelecionado}
      />

      <FormularioTopico aoCadastrar={buscarTopicos}/>

      <ListaTopicos 
        topicos={topicosFiltrados}
        aoAtualizar={buscarTopicos}
      />
    </div>
  );
}

export default App;