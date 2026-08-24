import { topicos } from "./data/topicos.js";

import {
    cadastrarTopico,
    buscarTopicoPorId,
    atualizarStatusTopico,
    excluirTopico, 
    listarTopicos,
    listarTopicosPorMateria
} from "./services/topicosService.js";

// EXECUÇÃO E TESTES MANUAIS

// DEMONSTRAÇÃO CREATE
console.log("\n** TESTE CREATE **");

console.log("\n=== ANTES DO CADASTRO ===");
console.log(topicos);

const novoTopico = cadastrarTopico(3, "Middlewares", "Estudando");

console.log("\n=== NOVO TÓPICO CADASTRADO ===");
console.log(novoTopico);

console.log("\n=== DEPOIS DO CADASTRO ===");
console.log(topicos);


// DEMONSTRAÇÃO READ
console.log("\n** TESTE READ **");
const topicoEncontrado = await buscarTopicoPorId(999);
console.log("\n=== TÓPICO ENCONTRADO ===");
console.log(topicoEncontrado);

// DEMONSTRAÇÃO UPDATE
console.log("\n** TESTE UPDATE **");
const topicoAtualizado = atualizarStatusTopico(2, "Concluído");
console.log("\n=== TÓPICO ATUALIZADO ===");
console.log(topicoAtualizado);

// DEMONSTRAÇÃO DELETE
console.log("\n** TESTE DELETE **");
const topicoExcluido = excluirTopico(5);
console.log("\n=== TÓPICO EXCLUÍDO ===");
console.log(topicoExcluido);

// ESTADO FINAL
console.log("\n** ESTADO FINAL **");
console.log(topicos)


const todos = await listarTopicos();
console.log("\n** TODOS OS TÓPICOS **");
console.log(todos);


console.log("\n** TÓPICOS POR MATERIA **");
const topicosDeJavaScript = listarTopicosPorMateria(1);
console.log("\n=== TÓPICOS DE JAVASCRIPT ===");
console.log(topicosDeJavaScript);