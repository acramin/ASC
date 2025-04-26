const express = require("express");
const app = express();
app.use(express.json());
const { v4: uuidv4 } = require("uuid");

const axios = require("axios");
const baseURL = "http://localhost:1000";

const observacoesPorLembreteID = {};

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.send(observacoesPorLembreteID[req.params.id] || []);
});

app.post("/lembretes/:id/observacoes", async (req, res) => {
  //:id é um placeholder
  const idObs = uuidv4();
  const { texto } = req.body;
  const observacoesDoLembrete = observacoesPorLembreteID[req.params.id] || []; // req.params pega os parâmetros da url
  observacoesDoLembrete.push({ id: idObs, texto });
  observacoesPorLembreteID[req.params.id] = observacoesDoLembrete;

  await axios.post(`${baseURL}/eventos`, {
    tipo: "ObservacaoCriada",
    dados: {
      id: idObs,
      texto,
      lembreteId: req.params.id,
    },
  });

  res.status(201).send(observacoesDoLembrete);
});

// app.post("/eventos", (req, res) => {
//   console.log(req.body);
//   res.status(200).send({ msg: "ok" });
// });

app.listen(5000, () => console.log("Observações up. Port 4000"));
