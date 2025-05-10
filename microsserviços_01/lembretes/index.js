const express = require("express");
const app = express();
app.use(express.json());

const axios = require("axios");
const baseURL = "http://localhost:1000";

const lembretes = {};
let contador = 0;

app.get("/lembretes", (req, res) => {
  res.send(lembretes); // envia resposta
});

app.post("/lembretes", async (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = {
    contador,
    texto,
  };
  await axios.post(`${baseURL}/eventos`, {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto,
    },
  });
  res.status(201).send(lembretes[contador]);
});

app.post("/eventos", (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok" });
});

app.listen(4000, () => console.log("Lembretes. Porta 4000;"));
