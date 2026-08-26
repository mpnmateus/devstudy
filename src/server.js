import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("DevStudy API funcionando!");
});

app.get("/sobre", (req, res) => {
    res.send("DevStudy - Organizador de estudos para desenvolvedores.");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

