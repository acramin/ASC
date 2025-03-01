/* 07 - Métodos de vetor */

const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'];

const nomesComA = nomes.filter((n) => n.startsWith('A')); /// startsWith é método de string
// filtro retorna outro array apenas com os valores que retornaram true dentro a arrow function
console.log(nomesComA);

const resp = nomes.map((n) => n.charAt(0)); // charAt retorna o carácter na posição pedida
// map passa por todos e retorna novo array aplicando a função
console.log(resp)

const todosComecamComA = nomes.every((n) => n.startsWith('A')) // every retorna um valor escalar, todos tem que seguir a regra para ser true
console.log(todosComecamComA);

valores = [1,2,3,4];
const soma = valores.reduce((ac, v) => ac +v); // devolve apenas um valor, o valor que fica acumulado na primeira variável
console.log(soma);

/* 06 - Vetores */

// // são como as listas do python, aceita qualquer tipo e cresce dinamicamente

// v1 = []; // Declaração
// v1[0] = 3.4; // coloca na posição 0
// v1[10] = 2; // coloca na posição 10
// v1[2] = 'abc'; // coloca na posição 2
// console.log(v1.length); // devolve o tamanho
// console.log(v1); // devolve o vetor

// v2 = [2, 'abc', true];
// console.log(v2);

// // iterando 
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i]);
// }

// const v3 = [1];
// v3[2] = 'abc'; // adiciona no array -> muda o estado
// console.log(v3);
// // v3 = [4]; // isso dá erro -> tentado atribuir novo vetor

/* 05 - Comparação */
// console.log(1 == 1) // true
// console.log(1 === 1) // true
// console.log(1 == '1') // true
// console.log(1 === '1') // false
// console.log(true == 1) // true
// console.log(true == 2) // false
// console.log(false == 2) // false
// console.log(false == 0) // true
// console.log(1 == [1]) // true
// console.log(null == null) // true
// console.log(null == undefined) // true
// console.log([] == false) // true
// console.log([] == []) // false

/* 04 - - Tipos e coerção */

// Coerção
// const n1 = 2; // tipo Number
// const n2 = '3'; // tipo String

// // Coerção implícita -> concatena
// const n3 = n1 + n2;
// console.log(n3);

// // Coerção explicita -> soma
// const n4 = n1 + Number(n2);
// console.log(n4);

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
