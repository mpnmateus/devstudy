function ResumoEstudos({ topicos }) {
    const totalTopicos = topicos.length;
    
    const concluidos = topicos.filter(
        (topico) => topico.status === "Concluído"
    ).length;

    return (
        <section>
            <h2>Resumo dos Estudos</h2>
            
            <p>Total de tópicos: {totalTopicos}</p>
            
            <p>Concluídos: {concluidos}</p>

        </section>
    );
}

export default ResumoEstudos;