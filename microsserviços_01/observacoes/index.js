const express = require("express");
const app = express();
app.use(express.json());

app.get("/lembretes/:id/observacoes", (req, res) => {


});

app.post("/lembretes/:id/observacoes", (req, res) => {

    
});

app.listen(5000, () => console.log("Observações up. Port 4000"));
