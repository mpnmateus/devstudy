function FiltroStatus({ statusSelecionado, aoSelecionarStatus, }){

    return(
        <section>
            <h2>Filtrar tópicos</h2>
            <p>Status selecionado: {statusSelecionado}</p>
            
            <button onClick={() => aoSelecionarStatus("Todos")}>
                Todos
            </button>
            
            <button onClick={() => aoSelecionarStatus("Pendente")}>
                Pendentes
            </button>

            <button onClick={() => aoSelecionarStatus("Em andamento")}>
                Em andamento
            </button>

            <button onClick={() => aoSelecionarStatus("Concluído")}>
                Concluídos
            </button>

        </section>
    );
}

export default FiltroStatus;    