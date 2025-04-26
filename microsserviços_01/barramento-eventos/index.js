const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/eventos", (req, res) => {
  //   const evento = req.body;
  //   const baseURL = "http://localhost:";
  //   axios.post(`${baseURL}4000/eventos`, evento);
  //   axios.post(`${baseURL}5000/eventos`, evento);
  console.log(req.body);
  res.status(200).send({ msg: "ok" });
});

app.listen(1000, () => console.log("Barramento up. Port 1000"));
