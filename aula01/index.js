/* 04 - - Tipos e coerção */

// Coerção
const n1 = 2; // tipo Number
const n2 = '3'; // tipo String

// Coerção implícita -> concatena
const n3 = n1 + n2;
console.log(n3);

// Coerção explicita -> soma
const n4 = n1 + Number(n2);
console.log(n4);

/* 03 - Commit  */

// console.log("testando commit pelo vscode")

/* 02 - Prints */

// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);

// // variáveis podem ser redeclaradas
// var linguagem = "Java";
// console.log("Aprendendo " + linguagem);

// // a variável nome já existe aqui, mas não tem valor atribuído (undefined)
// // ela é içada para fora do bloco (declarada como var - efeito global)

// console.log(`Oi, ${nome}`); // o nome disso aqui é interpolação
// var idade = 18;

// if (idade >= 18) {
//   var nome = "João";
//   console.log(`Parabéns, ${nome}. Você já pode dirigir!`);
// }
// console.log(`Tchau, ${nome}`);

/* 01 - Criação de variáveis */

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
