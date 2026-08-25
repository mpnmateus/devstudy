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
export async function atualizarStatusTopico(id, novoStatus) {

    const resultado = await pool.query(
        "UPDATE topicos SET status = $1 WHERE id = $2 RETURNING *", [novoStatus, id]
    );
    return resultado.rows[0];
}

export async function atualizarTituloTopico(id, novoTitulo){
    const resultado = await pool.query(
        "UPDATE topicos SET titulo = $1 WHERE id = $2 RETURNING *", [novoTitulo, id]
    );
    return resultado.rows[0];
}

// DELETE
export async function excluirTopico(id) {

    const resultado = await pool.query(
        "DELETE FROM topicos WHERE id = $1 RETURNING *", [id]
    );
    return resultado.rows[0];
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