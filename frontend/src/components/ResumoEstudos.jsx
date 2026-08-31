function ResumoEstudos() {
    const quantidadeMaterias = 3;
    const quantidadeTopicos = 8;

    return (
        <section>
            <h2>Resumo dos Estudos</h2>
            <p>Materias cadastradas: {quantidadeMaterias}</p>
            <p>Tópicos cadastrados: {quantidadeTopicos}</p>
        </section>
    );
}

export default ResumoEstudos;