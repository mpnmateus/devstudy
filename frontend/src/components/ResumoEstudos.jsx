function ResumoEstudos({ topicos }) {
    const totalTopicos = topicos.length;
    
    const concluidos = topicos.filter(
        (topico) => topico.status === "Concluído"
    ).length;

    return (
        <section className="resumo">
        <div className="resumo-card">
            <span>Total de tópicos</span>
            <strong>{totalTopicos}</strong>
        </div>

        <div className="resumo-card">
            <span>Concluídos</span>
            <strong>{concluidos}</strong>
        </div>
        </section>
    );
}

export default ResumoEstudos;