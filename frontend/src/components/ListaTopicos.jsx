import Topico from "./Topico.jsx";

function ListaTopicos({ topicos, aoAtualizar }){
    
    return (
        <section className="topicos">
            <h2>Tópicos de estudo</h2>

            {topicos.length === 0 ? (
                <p className="lista-vazia">
                    Nenhum tópico encontrado.
                </p>
            ) : (
                topicos.map((topico) => (
                    <Topico
                        key={topico.id}
                        id={topico.id}
                        titulo={topico.titulo}
                        status={topico.status}
                        aoAtualizar={aoAtualizar}
                    />
                ))
            )}
        </section>
    );
}

export default ListaTopicos;