// ===== Exercícios de interpretação de código =====

// === Exercício 1 ===

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Como o valor é "i + i", e a contagem vai até 5, ela irá fazer a
// soma dos dois e o resultado será 10.

// === Exercício 2 ===

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) 19, 21, 23, 25, 27, 30
// b) ?

// === Exercício 3 ===

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Ela irá imprimir a quantidade de asteríscos de 1 a 4:
// *
// **
// ***
// ****

// ===== Exercícios de escrita de código =====

// === Exercício 1 ===

// let bichinhosDeEstimacao = Number(prompt("Informe quantos bichinhos de estimação você tem"))
// let nomeDosBichinhos = []

// if (bichinhosDeEstimacao === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (bichinhosDeEstimacao > 0) {
//     for (let i = 0; i < bichinhosDeEstimacao; i++){
//         let listaNomeBichinhos = prompt("Digite abaixo o nome dos seus bichinhos, um por um")
//         nomeDosBichinhos[i] = listaNomeBichinhos
//     }
//     console.log(nomeDosBichinhos)
// }

// 3
// (3) ['Xena', 'Mel', 'Cacau']

// === Exercício 2 ===

// letra A

// let arrayOriginal = [7, 11, 14, 18, 23, 27, 30, 36, 44, 50]

// for (let i = 0; i < 10; i++) {
//     const elemento = arrayOriginal[i]
//     console.log(elemento)
// }

// letra B

// let arrayOriginal = [7, 11, 14, 18, 23, 27, 30, 36, 44, 50]

// for (let item of arrayOriginal){
//     console.log(item / 10)
// }

// 0.7, 1.1, 1.4, 1.8, 2.3, 2.7, 3, 3.6, 4.4, 5





