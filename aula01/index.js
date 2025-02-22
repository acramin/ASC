/* 02 */

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);

// variáveis podem ser redeclaradas
var linguagem = "Java";
console.log("Aprendendo " + linguagem);

// a variável nome já existe aqui, mas não tem valor atribuído (undefined)
// ela é içada para fora do bloco (declarada como var - efeito global)

console.log(`Oi, ${nome}`); // o nome disso aqui é interpolação
var idade = 18;

if (idade >= 18) {
  var nome = "João";
  console.log(`Parabéns, ${nome}. Você já pode dirigir!`);
}
console.log(`Tchau, ${nome}`);

/* 01 */

// // Declarando constantes
// const nome = "José";
// const idade = 27;
// console.log(nome, idade);

// //idade = 21; // dá problema pois a constante não pode ser alterada
// // aspas simples e duplas dão na mesma

// const genero = "M";
// const endereco = "Rua Olho D'Água, 23";
// console.log(nome, idade, genero, endereco);

// // declarando variável locais
// let a = 2;
// let b = "abc";
// console.log(a, b);

// // declarando variáveis globais - recomendável não usar
// var c = 2 + 3;
// var d = "abcd";
// console.log(c, d);
