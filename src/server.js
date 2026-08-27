import express from "express";
import { 
    buscarTopicoPorId, 
    listarTopicos,
    listarTopicosPorMateria, 
} from "./services/topicosService.js";

const app = express();

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


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

