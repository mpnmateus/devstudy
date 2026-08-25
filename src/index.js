import {
    buscarTopicoPorId,
    listarTopicos,
    listarTopicosPorMateria
} from "./services/topicosService.js";

// EXECUÇÃO E TESTES MANUAIS

// BUSCA POR ID
console.log("\n** TESTE READ **");
const topicoEncontrado = await buscarTopicoPorId(999);
console.log("\n=== TÓPICO ENCONTRADO ===");
console.log(topicoEncontrado);

// LISTAGEM DE TÓPICOS
const todos = await listarTopicos();
console.log("\n** TODOS OS TÓPICOS **");
console.log(todos);

// LISTAGEM POR MATÉRIA
console.log("\n** TÓPICOS POR MATERIA **");
const topicosDeJavaScript = await listarTopicosPorMateria(1);
console.log("\n=== TÓPICOS DE JAVASCRIPT ===");
console.log(topicosDeJavaScript);