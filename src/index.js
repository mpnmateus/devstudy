import { topicos } from "./data/topicos.js";

import {
    cadastrarTopico,
    buscarTopicoPorId,
    atualizarStatusTopico,
    excluirTopico
} from "./services/topicosService.js";

// EXECUÇÃO E TESTES

// TESTE CREATE
console.log("\n** TESTE CREATE **");

console.log("\n=== ANTES DO CADASTRO ===");
console.log(topicos);

const novoTopico = cadastrarTopico(3, "Middlewares", "Estudando");

console.log("\n=== NOVO TÓPICO CADASTRADO ===");
console.log(novoTopico);

console.log("\n=== DEPOIS DO CADASTRO ===");
console.log(topicos);


// TESTE READ
console.log("\n** TESTE READ **");
const topicoEncontrado = buscarTopicoPorId(3);
console.log("\n=== TÓPICO ENCONTRADO ===");
console.log(topicoEncontrado);

// TESTE UPDATE
console.log("\n** TESTE UPDATE **");
const topicoAtualizado = atualizarStatusTopico(2, "Concluído");
console.log("\n=== TÓPICO ATUALIZADO ===");
console.log(topicoAtualizado);

// TESTE DELETE
console.log("\n** TESTE DELETE **");
const topicoExcluido = excluirTopico(5);
console.log("\n=== TÓPICO EXCLUÍDO ===");
console.log(topicoExcluido);

// ESTADO FINAL
console.log("\n** ESTADO FINAL **");
console.log(topicos)