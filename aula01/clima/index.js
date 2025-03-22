const axios = require("axios"); // importação do axios
require("dotenv").config(); // importa dotenv
const appId = process.env.API_KEY; // chave da api para chamada
const q = "São Caetano do Sul"; // parâmetro query cidade
const units = "metric"; // unidade
const lang = "pt_BR"; // idioma
const cnt = "10"; // timestamp
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appId}&lang=${lang}&cnt=${cnt}`; // url do endpoint

//console.log(url);

axios
  .get(url) //faz a requisição
  .then((res) => {
    //mostra o resultado e devolve somente a parte de interesse
    console.log(res);
    return res.data;
  })
  .then((res) => {
    //mostra o total e devolve o resultado
    console.log(res.cnt);
    return res;
  })
  .then((res) => {
    //devolve somente a lista de previsões
    console.log("aqui", res);
    return res.list;
  })
  .then((res) => {
    //para cada resultado, mostra algumas informações
    for (let previsao of res) {
      console.log(`
         ${new Date(+previsao.dt * 1000).toLocaleString()},
         ${"Min: " + previsao.main.temp_min}\u00B0C,
         ${"Max: " + previsao.main.temp_max}\u00B0C,
         ${"Hum: " + previsao.main.humidity}%,
         ${previsao.weather[0].description}
         `);
    }
    return res;
  })
  .then((res) => {
    //verifica quantas previsões têm percepção humana de temperatura acima de 30 graus
    const lista = res.filter((r) => r.main.feels_like >= 30); // filtro gera lista com a condição feels_like maior que 30°
    console.log(
      `${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`
    );
  })
  .catch((err) => {
    console.log({ erro: err });
  });
