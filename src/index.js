const express = require("express");

const app = express();

app.get("/", (req, res) => {
 res.send("Hello world Express");
});

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
})