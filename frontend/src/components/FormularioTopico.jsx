import { useState } from "react";

function FormularioTopico({ aoCadastrar}){
    const [materiaId, setMateriaId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [status, setStatus] = useState("Pendente");
    const [erro, setErro] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function cadastrarTopico(evento){
        evento.preventDefault();

        setErro("");
        setEnviando(true);

        const novoTopico = {
            materiaId: Number(materiaId),
            titulo,
            status,
        };
        try{

            if(!titulo.trim()){
                setErro("Informe o título do tópico.");
                setEnviando(false);
                return;
            }

            const resposta = await fetch(
                "http://localhost:3000/topicos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(novoTopico),
                }
            );

            if(!resposta.ok){
                throw new Error("Erro ao cadastrar tópico.");
            }

            await resposta.json();

            await aoCadastrar();

            setMateriaId("");
            setTitulo("");
            setStatus("Pendente");
        } catch (erro) {
            console.error(erro);
            setErro("Não foi possível cadastrar o tópico.");
        } finally {
            setEnviando(false);
        }
        
    }

    return (
        <section>
            <h2>Novo tópico</h2>
            <form onSubmit={cadastrarTopico}> 
                <div>
                    <label htmlFor="materiaId">
                        ID da matéria: 
                    </label>
                    <input 
                        id="materiaId"
                        type="number"
                        value={materiaId}
                        onChange={(evento) => setMateriaId(evento.target.value)} required   
                    />
                </div>

                <div>
                    <label htmlFor="titulo">
                        Título: 
                    </label>
                    <input 
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={(evento) => setTitulo(evento.target.value)} required
                    />
                </div>
                

                <div>
                    <label htmlFor="status">
                        Status: 
                    </label>
                    <select 
                        id="status"
                        value={status}
                        onChange={(evento) => setStatus(evento.target.value)}
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                </div>
                {erro && <p>{erro}</p>}

                <button type="submit" disabled={enviando}>
                    {enviando ? "Enviando..." : "Cadastrar"}
                </button>
                
            </form>

        </section>
    );
}

export default FormularioTopico;