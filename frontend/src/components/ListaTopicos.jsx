import Topico from "./Topico.jsx";

function ListaTopicos({ topicos, aoAtualizar }){
    if(topicos.length === 0){
        return (
            <section>
                <h2>Tópicos de estudo</h2>
                <p>Nenhum tópico cadastrado</p>
            </section>
        );
    }
    
    return (
        <section>
            <h2>Tópicos de estudo</h2>

            {topicos.map((topico) => (
                <Topico 
                key={topico.id}
                id={topico.id}
                titulo={topico.titulo}
                status={topico.status}
                aoAtualizar={aoAtualizar}
                />
            ))}
        </section>
    );
}

export default ListaTopicos;