import { useState } from "react";

function Topico({ id, titulo, status, aoAtualizar }){
  
  const [atualizando, setAtualizando] = useState(false);
  const [erro, setErro] = useState("");

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
      
      {atualizando && <p>Atualizando...</p>}
      {erro && <p>{erro}</p>}

    

    </div>  
    );
}

export default Topico;