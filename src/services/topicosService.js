import { topicos } from "../data/topicos.js";

let proximoTopicoId = 6;


// CREATE
export function cadastrarTopico(materiaId, titulo, status) {

    const novoTopico = {
        id: proximoTopicoId,
        materiaId: materiaId,
        titulo: titulo,
        status: status
    };

    topicos.push(novoTopico);

    proximoTopicoId++;

    return novoTopico;
}

// READ
export function buscarTopicoPorId(id) {

    const topicoEncontrado = topicos.find(
        topico => topico.id === id
    );

    return topicoEncontrado;
}

// UPDATE 
export function atualizarStatusTopico(id, novoStatus) {

    const topico = topicos.find(
        topico => topico.id === id
    );

    if (!topico) {
        return null;
    }

    topico.status = novoStatus;

    return topico;
}

// DELETE
export function excluirTopico(id) {

    const indice = topicos.findIndex(
        topico => topico.id === id
    );

    if (indice === -1) {
        return null;
    }

    const removido = topicos.splice(indice, 1);

    return removido[0];
}

export function listarTopicos(){
    
    return topicos;
}

export async function listarTopicosPorMateria(materiaId){
    const topicosPorMateria = topicos.filter(topico => topico.materiaId === materiaId);

    return topicosPorMateria;
}