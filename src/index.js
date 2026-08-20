// Etapa 1: data model e topic queries

const materias = [
    {
        id: 1,
        nome: "JavaScript"
    },
    {
        id: 2,
        nome: "React"
    },
    {
        id: 3,
        nome: "Node.js"
    },
    {
        id: 4,
        nome: "SQL"
    }
];
console.log("=== TODAS AS MATÉRIAS ===")
console.log(materias);

const topicos = [
    {
        id: 1,
        materiaId: 1,
        titulo: "Arrays",
        status: "Concluído"
    },
    {
        id: 2,
        materiaId: 1,
        titulo: "Async/Await",
        status: "Estudando"
    },
    {
        id: 3,
        materiaId: 2,
        titulo: "useState",
        status: "Concluído"
    },
    {
        id: 4,
        materiaId: 2,
        titulo: "useEffect",
        status: "Estudando"
    },
    {
        id: 5,
        materiaId: 3,
        titulo: "Rotas com Express",
        status: "Pendente"
    }
];

console.log("\n=== TODOS OS TÓPICOS ===");
console.log(topicos);

// Requisito funcional 01: mostrar todos os tópicos que estou estudando
const topicosEstudando = topicos.filter(topico => topico.status === "Estudando");
console.log("\n=== TÓPICOS QUE ESTOU ESTUDANDO ===");
console.log(topicosEstudando);

// Requisito funcional 02: encontrar o tópico com o id 3
const topicoEncontrado = topicos.find(topico => topico.id === 3);
console.log("\n=== TÓPICO ID 3 ===");
console.log(topicoEncontrado)

// Requisito funcional 03: mostrar todos os nomes dos tópicos
const nomeDosTopicos = topicos.map(topico => topico.titulo);
console.log("\n=== NOMES DOS TÓPICOS ===");
console.log(nomeDosTopicos);

// Requisito funcional 04: mostrar somente os tópicos concluídos
const topicosConcluido = topicos.filter(topico => topico.status === "Concluído");
console.log("\n=== TÓPICOS CONCLUÍDOS ===");
console.log(topicosConcluido);

// Apenas os tópicos pertencentes ao materiaId === 1
const topicoEncontradoMateria = topicos.filter(topico => topico.materiaId === 1);
console.log("\n=== TÓPICOS PERTENCENTES A MATERIA ID 1 ===");
console.log(topicoEncontradoMateria);

// Etapa 2: CRUD

/*
const novoTopico = {
    id: 6,
    materiaId: 3,
    titulo: "Middlewares",
    status: "Pendente"
};

topicos.push(novoTopico);
console.log("\n=== APÓS CADASTRAR NOVO TÓPICO ===");
console.log(topicos);
*/


let proximoTopicoId = 6;
// CREATE
function cadastrarTopico(materiaId, titulo, status){
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

const topicoCadastrado = cadastrarTopico(3, "Middlewares", "Pendente");
console.log("\n=== [CREATE] NOVO TÓPICO ===");
console.log(topicoCadastrado);

// READ
function buscarTopicoPorId(id){
    const topicoEncontrado = topicos.find(topico => topico.id === id);
    return topicoEncontrado;
}

const resultadoBusca = buscarTopicoPorId(3);
console.log("\n=== [READ] BUSCA POR ID ===");
console.log(resultadoBusca);

// UPDATE
function atualizarStatusTopico(id, novoStatus){
    const topico = topicos.find(topico => topico.id === id);

    if(!topico){
        return null;
    }

    topico.status = novoStatus;

    return topico;
}
console.log("\n=== [UPDATE] ATUALIZAR STATUS ===");
console.log("Antes de atualizar: ", topicos.find(topico => topico.id === 2));
const topicoAtualizado = atualizarStatusTopico(2, "Concluído");
console.log("Depois de atualizar: ", topicoAtualizado);

// DELETE
function deletarTopico(id){
    const indice = topicos.findIndex(topicos => topicos.id === id); // Splice precisa do indice e da quantidade de elementos a serem removidos, por isso preciso achar o índice
    if(indice === -1){
        return null;
    }
    const removido = topicos.splice(indice, 1); // Splice(indice de onde começa, quantidade a ser removida). Removido é um array com o elemento removido. 
    return removido[0]; // Retorno o primeiro elemento do array, que é o objeto removido
}

const topicoRemovido = deletarTopico(5);

console.log("\n=== [DELETE] DELETAR TÓPICO ===");
console.log("Tópico removido: ", topicoRemovido);
console.log("Lista de tópicos após remoção: ", topicos);