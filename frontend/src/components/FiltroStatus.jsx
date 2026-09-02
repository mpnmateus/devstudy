function FiltroStatus({ statusSelecionado, aoSelecionarStatus, }){

    const status = [
        "Todos",
        "Pendente",
        "Em andamento",
        "Concluído",
    ];

    return(
        <section className="filtros">
            {status.map((item) => (
                <button
                    key={item}
                    className={
                        statusSelecionado === item
                        ? "filtro ativo"
                        : "filtro"
                    }
                    onClick={() => aoSelecionarStatus(item)}
                >
                    {item}
                </button>
            ))}
        </section>
    );
}

export default FiltroStatus;    