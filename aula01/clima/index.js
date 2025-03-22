const axios = require("axios"); // importação do axios
const appId = "cec48c7f79bf1472acb378cc0f4a1df5"; // chave da api para chamada
const q = "Itu"; // parâmetro query cidade
const units = "metric"; // unidade
const lang = "pt_BR"; // idioma
const cnt = "10"; // timestamp
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appId}&lang=${lang}&cnt=${cnt}`; // url do endpoint

console.log(url);