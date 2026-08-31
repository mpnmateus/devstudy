import { useState } from "react";

function ResumoEstudos() {
    const quantidadeMaterias = 3;
    const [quantidadeTopicos, setQuantidadeTopicos] = useState(8);

    function adicionarTopico(){
        setQuantidadeTopicos((quantidadeTopicos) => quantidadeTopicos + 1);
    }

    return (
        <section>
            <h2>Resumo dos Estudos</h2>
            <p>Materias cadastradas: {quantidadeMaterias}</p>
            <p>Tópicos cadastrados: {quantidadeTopicos}</p>

            <button onClick={adicionarTopico}>
                Adicionar tópico
            </button>
        </section>
    );
}

export default ResumoEstudos;