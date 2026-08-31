import { useState } from "react";

function FiltroStatus(){
    const [statusSelecionado, setStatusSelecionado] = useState("Todos");

    function selecionarTodos(){
        setStatusSelecionado("Todos");
    }
    function selecionarConcluidos(){
        setStatusSelecionado("Concluído");
    }
    function selecionarPendentes(){
        setStatusSelecionado("Pendente");
    }
    function selecionarEmAndamento(){
        setStatusSelecionado("Em andamento");
    }
    return(
        <section>
            <h2>Filtro</h2>
            <p>Status selecionado: {statusSelecionado}</p>
            <button onClick={selecionarTodos}>
                Todos
            </button>
            <button onClick={selecionarConcluidos}>
                Concluídos
            </button>
            <button onClick={selecionarPendentes}>
                Pendentes
            </button>
            <button onClick={selecionarEmAndamento}>
                Em andamento
            </button>
        </section>
    );
}

export default FiltroStatus;    