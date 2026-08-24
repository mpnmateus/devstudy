import { topicos } from "../data/topicos.js";
import { pool } from "../database/pool.js";


// CREATE
export async function cadastrarTopico(materiaId, titulo, status) {

    const resultado = await pool.query(
        "INSERT INTO topicos (materia_id, titulo, status) VALUES ($1, $2, $3) RETURNING *", 
        [materiaId, titulo, status]
    );
    return resultado.rows[0];
}

// READ
export async function buscarTopicoPorId(id) {

    const resultado = await pool.query(
        "SELECT * FROM topicos WHERE id = $1", [id]
    );
    return resultado.rows[0];
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

export async function listarTopicos(){
    
    const resultado = await pool.query(
        "SELECT * FROM topicos ORDER BY id" // id é parte da estrutura da tabela topicos
    );

    return resultado.rows; // retorna o array inteiro de tópicos
}

export async function listarTopicosPorMateria(materiaId){
    const resultado = await pool.query(
        "SELECT * FROM topicos WHERE materia_id = $1 ORDER BY id", [materiaId]
    );

    return resultado.rows;
}