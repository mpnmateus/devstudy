import express from "express";
import { buscarTopicoPorId } from "./services/topicosService.js";

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

app.get("/topicos/:id", async (req, res) => {
    const id = Number(req.params.id);

    const topico = await buscarTopicoPorId(id);

    res.json(topico);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

