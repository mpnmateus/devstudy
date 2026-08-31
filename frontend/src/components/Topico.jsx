function Topico({ titulo, status, materia }){
    return (
      <div>
        <h3>Tópico: {titulo}</h3>
        <p>Status: {status}</p>
        <p>Materia: {materia}</p>
      </div>  
    );
}

export default Topico;