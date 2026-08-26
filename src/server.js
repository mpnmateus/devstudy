import express from "express";

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

app.get("/topicos/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json({
        id: id
    })
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

