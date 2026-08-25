import { topicos } from "./data/topicos.js";

import {
    cadastrarTopico,
    buscarTopicoPorId,
    atualizarStatusTopico,
    excluirTopico, 
    listarTopicos,
    listarTopicosPorMateria,
    atualizarTituloTopico
} from "./services/topicosService.js";

// EXECUÇÃO E TESTES MANUAIS

// DEMONSTRAÇÃO CREATE
console.log("\n** TESTE CREATE **");

console.log("\n=== ANTES DO CADASTRO ===");
console.log(topicos);

const novoTopico = await cadastrarTopico(1, "Promises", "Pendente");

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
const topicoAtualizado = await atualizarStatusTopico(3, "Concluído");
console.log("\n=== TÓPICO ATUALIZADO ===");
console.log(topicoAtualizado);

const topicoAtualizadoTitulo = await atualizarTituloTopico(3, "Promises e async/await");
console.log("\n=== TÓPICO ATUALIZADO ===");
console.log(topicoAtualizadoTitulo);

// DEMONSTRAÇÃO DELETE
console.log("\n** TESTE DELETE **");
const topicoExcluido = await excluirTopico(5);
console.log("\n=== TÓPICO EXCLUÍDO ===");
console.log(topicoExcluido);

// ESTADO FINAL
console.log("\n** ESTADO FINAL **");
console.log(topicos)


const todos = await listarTopicos();
console.log("\n** TODOS OS TÓPICOS **");
console.log(todos);


console.log("\n** TÓPICOS POR MATERIA **");
const topicosDeJavaScript = await listarTopicosPorMateria(1);
console.log("\n=== TÓPICOS DE JAVASCRIPT ===");
console.log(topicosDeJavaScript);