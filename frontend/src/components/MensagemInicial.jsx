import { useState} from "react";

function MensagemInicial(){
    const [mostrarMensagem, setMostrarMensagem] = useState(true);
    
    function alterarVisibilidadeMensagem(){
        setMostrarMensagem((mostrarMensagem) => !mostrarMensagem);
    }
    return (
        <section>
            <h2>Próximo passo</h2>
            {mostrarMensagem && (
                <p>
                    Continue estudando e marque seus tópicos conforme avançar.
                </p>
            )}
            <button onClick={alterarVisibilidadeMensagem}>
                {mostrarMensagem ? "Ocultar mensagem" : "Mostrar mensagem"}'
            </button>

        </section>
    );
}

export default MensagemInicial;