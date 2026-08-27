import express from "express";
import { 
    buscarTopicoPorId, 
    listarTopicos,
    listarTopicosPorMateria,
    cadastrarTopico, 
    atualizarStatusTopico,
    atualizarTituloTopico, 
    excluirTopico 
} from "./services/topicosService.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("DevStudy API funcionando!");
});

app.get("/sobre", (req, res) => {
    res.send("DevStudy - Organizador de estudos para desenvolvedores.");
});

app.get("/status", (req, res) =>{
    res.json({
        aplicação: "DevStudy API",
        status: "online"
    });
});


app.get("/topicos", async (req, res) => {
    const materiaId = req.query.materiaId;
    
    try {
        if(materiaId !== undefined){
            const id = Number(materiaId);

            if(!Number.isInteger(id) || id <= 0){
                return res.status(400).json({
                    erro: "materiaId inválido."
                });
            }
            const topicos = await listarTopicosPorMateria(id);
            return res.json(topicos);

        }
        
        const topicos = await listarTopicos();
        return res.json(topicos);

    } catch (erro) {
        console.error("Erro ao listar tópicos: ", erro);
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

app.get("/topicos/:id", async (req, res) => {
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            erro: "ID inválido."
        });
    };

    try {
        const topico = await buscarTopicoPorId(id);

        if(!topico){
            return res.status(404).json({
                erro: "Tópico não encontrado"
            });
        }

        return res.json(topico);

    } catch (erro) {
        console.error("Erro ao buscar tópico: ", erro);
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
    
});

app.post("/topicos", async (req, res) => {
    const { materiaId, titulo, status } = req.body;
    
    if(
        !Number.isInteger(materiaId) || 
        materiaId <= 0 ||
        typeof titulo !== "string" ||
        titulo.trim() === "" ||
        typeof status !== "string" ||
        status.trim() === ""
    ) {
        return res.status(400).json({
            erro: "Dados inválidos."
        });
    }
    
    try{
        const novoTopico = await cadastrarTopico( materiaId, titulo, status);
        return res.status(201).json(novoTopico);
        
    } catch (erro) {
        console.error("Erro ao cadastrar tópico:", erro);
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

app.patch("/topicos/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { titulo, status } = req.body;

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            erro: "ID inválido."
        });
    }

    if(titulo === undefined && status === undefined){
        return res.status(400).json({
            erro: "Informe o titulo ou status para atualização."
        });
    }

    if(
        titulo != undefined &&
        (typeof titulo !== "string" || titulo.trim() === "")
    ){
        return res.status(400).json({
            erro: "Título inválido."
        });
    }

    if(
        status != undefined &&
        (typeof status !== "string" || status.trim() === "")
    ){
        return res.status(400).json({
            erro: "Status inválido."
        });
    }

    try {
        let topicoAtualizado;

        if(titulo !== undefined){
            topicoAtualizado = await atualizarTituloTopico(id, titulo.trim());
        }

        if(status !== undefined){
            topicoAtualizado = await atualizarStatusTopico(id, status.trim());
        }

        if(!topicoAtualizado){
            return res.status(404).json({
                erro: "Tópico não encontrado."
            });
        }

        return res.json(topicoAtualizado);

    } catch (erro){
        console.error("Erro ao atualizar tópico: ", erro);
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

app.delete("/topicos/:id", async (req, res) => {
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0){
        return res.status(400).json({
            erro: "ID inválido."
        });
    }

    try {
        const topicoExcluido = await excluirTopico(id);

        if(!topicoExcluido){
            return res.status(404).json({
                erro: "Tópico não encontrado."
            });
        }

        return res.status(204).send();

    } catch (erro) {
        console.error("Erro ao excluir tópico: ", erro);
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

