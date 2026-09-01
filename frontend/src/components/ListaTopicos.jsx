import Topico from "./Topico.jsx";

function ListaTopicos({ topicos }){
    return (
        <section>
            <h2>Tópicos de estudo</h2>

            {topicos.map((topico) => (
                <Topico 
                key={topico.id}
                titulo={topico.titulo}
                status={topico.status}
                />
            ))}
        </section>
    );
}

export default ListaTopicos;