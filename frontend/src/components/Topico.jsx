import { useState } from "react";

function Topico({ id, titulo, status, aoAtualizar }){
  
  const [atualizando, setAtualizando] = useState(false);
  const [erro, setErro] = useState("");
  const [excluindo, setExcluindo] = useState(false);

  async function atualizarStatus(novoStatus) {
    setAtualizando(true);
    setErro("");
    try {
      const resposta = await fetch(
        `http://localhost:3000/topicos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: novoStatus,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao atualizar tópico");
      }

      await aoAtualizar();

    } catch (erro) {
      setErro("Não foi possível atualizar o tópico.");
      console.error(erro);
    } finally {
      setAtualizando(false);
    }
  }

  async function excluirTopico(){
    const confirmou = window.confirm(
        `Deseja realmente excluir o tópico "${titulo}"?`
      );

      if(!confirmou){
        return;
      }
      setErro("");
      setExcluindo(true);

    try {     
      const resposta = await fetch(
        `http://localhost:3000/topicos/${id}`,
        {
          method: "DELETE",
        }
      );

      if(!resposta.ok){
        throw new Error("Erro ao excluir tópico.")
      }

      await aoAtualizar();

    } catch (erro) {
      console.error(erro);
      setErro("Não foi possível excluir o tópico.");
    } finally {
      setExcluindo(false);
    } 
  }

  return (
    <div>
      <h3>Tópico: {titulo}</h3>
      
      <p>Status: {status}</p>
      
      <select
        value={status}
        disabled={atualizando}
        onChange={(evento) => atualizarStatus(evento.target.value)}
      >
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluído">Concluído</option>

      </select>

      <button 
        disabled={excluindo || atualizando}
        onClick={excluirTopico}>
        {excluindo ? "Excluindo..." : "Excluir" }
      </button>
      
      {atualizando && <p>Atualizando...</p>}
      {erro && <p>{erro}</p>}

    </div>  
    );
}

export default Topico;