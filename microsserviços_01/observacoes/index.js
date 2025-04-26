const express = require("express");
const app = express();
app.use(express.json());
const { v4: uuidv4 } = require("uuid");

const observacoesPorLembreteID = {};

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.send(observacoesPorLembreteID[req.params.id] || []);
});

app.post("/lembretes/:id/observacoes", (req, res) => {
  //:id é um placeholder
  const idObs = uuidv4();
  const { texto } = req.body;
  const observacoesDoLembrete = observacoesPorLembreteID[req.params.id] || []; // req.params pega os parâmetros da url
  observacoesDoLembrete.push({ id: idObs, texto });
  observacoesPorLembreteID[req.params.id] = observacoesDoLembrete;
  res.status(201).send(observacoesDoLembrete);
});

app.listen(5000, () => console.log("Observações up. Port 4000"));
