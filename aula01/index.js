/* 12 - JSON */

let pessoa = {
  // JSON Object
  nome: "João",
  idade: 17,
};

// acessar propriedade
console.log("Me chama " + pessoa.nome);
console.log("Tenho " + pessoa["idade"] + "anos");

function getPropriedade(prop) {
  console.log(pessoa[prop]);
}

getPropriedade("nome");
getPropriedade("idade");

let pessoaComEndereco = {
  nome: "Maria",
  idade: 21,
  endereco: {
    logradouro: "Rua B",
    numero: 121,
    complemento: "apto 12",
  },
};

console.log(
  `Sou ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos e moro na rua ${pessoaComEndereco.endereco["logradouro"]} número ${pessoaComEndereco["endereco"]["numero"]} complemento ${pessoaComEndereco.endereco.complemento}`
);

// JSON array

let concessionaria = {
  cnpj: "00011122210001-45",
  endereco: {
    logradouro: "Rua A",
    numero: 10,
    bairro: "Vila J",
    coordenadas: {
      latitude: 43.294563,
      longitude: -75.456972,
    },
  },
  veiculos: [
    { marca: "Ford", modelo: "Ecosport", anoFabricacao: 2018 },
    { marca: "Chevrolet", modelo: "Onix", anoFabricacao: 2020 },
    { marca: "Volkswagen", modelo: "Nivus", anoFabricacao: 2020 },
  ],
};

for (let veiculo of concessionaria.veiculos) {
  console.log(`Marca: ${veiculo.marca}`);
  console.log(`Modelo : ${veiculo.modelo}`);
  console.log(`Ano de Fabricação :  ${veiculo.anoFabricacao}`);
}

// funções em JSON
let calculadora = {
    // pode ser arrow function
    soma : (a, b) => a +b,
    // pode ser uma função comum também
    subtracao : function(a,b){
        return a -b
    }
}

console.log(`2 + 3 = ${calculadora.soma(2,3)}`)
console.log(`2 - 3 = ${calculadora.subtracao(2,3)}`)

/* 11 - Escopo de uma função */

// function f() {
//   let nome = "João";
//   function g() {
//     console.log(nome);
//   } // escopo interno
//   g(); // chama g
// } // escopo externo
// f(); // chama f

// function ola() {
//   let nome = "João";
//   return function () {
//     console.log("Olá, " + nome);
//   };
// }

// let olaResult = ola();
// /*perceba que aqui a função ola já terminou.
// É de se esperar que a variável nome já não
// possa ser acessada.*/
// olaResult();

// // também vale com parâmetros
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }

// let olaJoao = saudacoesFactory('Olá', 'Jão')
// let tchauJose = saudacoesFactory('Tchau', 'Zé')
// olaJoao()
// tchauJose()

// /* Uma função interna em conjunto com as variáveis de seu escopo externo é o que chamamos de closure*/

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return{ f1, f2} // devolve um JSON de funções
// }

// let eAgoraResult = eAgora()
// /* neste momento, a funcao eAgora já
// executou por completo e a variável
// cont já foi incrementada. Seu valor final
// é mantido e, assim, ambas f1 e f2 exibirão 2.
// */

// eAgoraResult.f1()
// eAgoraResult.f2()

/* 10 - closure */

// // função sendo atribuída a uma variável
// let umaFuncao = function () {
//   console.log("Func armazenada em variável");
// };

// // chamada da função
// umaFuncao();

// // função de alta ordem -> recebe uma função como parâmetro e/ou devolve uma função
// function f(funcao) {
//   // chamando a função
//   // tipagem dinâmica pesa aqui
//   funcao();
// }

// function g() {
//   function outraFuncao() {
//     console.log("Fui criada por g");
//   }
//   return outraFuncao;
// }

// // f pode ser chamada assim
// f(function(){
//     console.log('Estou sendo passada para f')
// })
// // e g pode ser chamada assim
// const gResult = g()
// gResult()
// // ou assim
// g()()

// console.log(gResult) // objeto indicando que é uma função

// // mais testes
// // f chama gm que devolve uma função. Nada será exibido
// f(g)
// // f chama a função devolvida por g. Exibe coisa
// f(g())
// // f tenta chamar o que a função criada por g devolve. Não devolve nada. Acontece um erro em tempo de execução
// f(g()()) // ta tentando executar uma string que retorna
// f(1) // não é função, então dá erro

/* 09 - arrow function */

// não tem nome e pode ser armazenada em constantes e variáveis
// pode ser criada dentro de métodos

// const hello = () => console.log('Oi')
// hello()

// const dobro = (valor) => {
//     return 2 * valor
// }
// console.log(dobro(10))

// const triplo = (valor) => {
//     return 3 * valor
// }
// console.log(triplo(10))

// const ePar = (valor) => {
//     valor % 2 === 0 // sem o return devolve o undefined
// }

// console.log(ePar(10))

// const ePar1 = (valor) => {
//     return valor % 2 === 0
// }

// console.log(ePar1(10))

/* 08 - funções */

// // funções com o mesmo nome se sobrescrevem
// function hello () {
//     console.log('Oi')
// }
// hello()

// function hello (nome) {
//     console.log(`Oi, ${nome}`)
// }
// hello('Pedro') // fosse salvo em uma variável retornaria undefined

// // função com retorno
// function soma (a, b){
//     return a + b
// }

// const resp = soma(2,3)
// console.log(resp)

// const resp1 = soma('2',3 )
// console.log(resp1)

// // funções anonimas são atribuídas a variáveis
// const dobro = function (n){
//     return n*2
// }
// const resp2 = dobro(4)
// console.log(resp2)

// // criar parâmetros com valor padrão
// const triplo = function (n = 5){
//     return 3 * n
// }
// console.log(triplo()) // usa o valor default
// console.log(triplo(10)) // usa o valor passado

/* 07 - Métodos de vetor */

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'];

// const nomesComA = nomes.filter((n) => n.startsWith('A')); /// startsWith é método de string
// // filtro retorna outro array apenas com os valores que retornaram true dentro a arrow function
// console.log(nomesComA);

// const resp = nomes.map((n) => n.charAt(0)); // charAt retorna o carácter na posição pedida
// // map passa por todos e retorna novo array aplicando a função
// console.log(resp)

// const todosComecamComA = nomes.every((n) => n.startsWith('A')) // every retorna um valor escalar, todos tem que seguir a regra para ser true
// console.log(todosComecamComA);

// valores = [1,2,3,4];
// const soma = valores.reduce((ac, v) => ac +v); // devolve apenas um valor, o valor que fica acumulado na primeira variável
// console.log(soma);

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
