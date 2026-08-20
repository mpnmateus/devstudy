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