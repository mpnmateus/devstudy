import {
    cadastrarTopico,
    buscarTopicoPorId,
    atualizarStatusTopico,
    excluirTopico
} from "./services/topicosService.js";

import { pool } from "./database/pool.js";

const materiaIdTeste = 1;

try {
    console.log("\n --- CREATE ---");
    const topicoCriado = await cadastrarTopico(
        materiaIdTeste,
        "Teste CRUD integrado",
        "Pendente"
    );
    console.log(topicoCriado);


    console.log("\n --- READ ---");
    const topicoEncontrado = await buscarTopicoPorId(
        topicoCriado.id
    );
    console.log(topicoEncontrado);


    console.log("\n --- UPDATE ---");
    const topicoAtualizado = await atualizarStatusTopico(
        topicoCriado.id, "Concluído"
    );
    console.log(topicoAtualizado)


    console.log("\n --- READ APÓS UPDATE ---");
    const topicoDepoisDoUpdate = await buscarTopicoPorId(
        topicoCriado.id
    );
    console.log(topicoDepoisDoUpdate);


    console.log("\n --- DELETE ---");
    const topicoExcluido = await excluirTopico(
        topicoCriado.id
    );
    console.log(topicoExcluido);


    console.log("\n -- READ APÓS O DELETE ---");
    const topicoDepoisDoDelete = await buscarTopicoPorId(
        topicoCriado.id
    );
    if(topicoDepoisDoDelete === undefined){
        console.log("Teste concluído: o tópico foi removido corretamente.");
    } else {
        console.log("Falha: o tópico ainda existe.");
    }

} catch (erro) {
    console.error("Erro durante o teste do CRUD: ");
    console.error(erro)
} finally {
    await pool.end();
}