// === Exercícios de interpretação de código ===
// === QUESTÃO 01 ===

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) Será 10 na "(minhafuncao(2))" e 50 na "(minhafuncao(10))"
// b) O console ficaria tudo em branco. Não retornaria nenhum resultado.

// === QUESTÃO 02 ===

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Ela quer saber se a palavra "cenoura" está contida no texto digitado pelo usuário.
// Não importa se ela está maiúscula, minuscula ou está no plural.
// b) i. True; ii. True; iii. True.

// === Exercícios de escrita de código ===
// === QUESTÃO 01 ===
// letra (a)

// function imprimirMensagem() {
//     console.log("Eu sou Eli, tenho 28 anos, moro em Paraíso do Tocantins e sou estudante.")
// } 
// imprimirMensagem()

// // Eu sou Eli, tenho 28 anos, moro em Paraíso do Tocantins e sou estudante.

// letra (b)

// const nome = "Eli"
// let idade = 28
// let cidade = "Paraíso do Tocantins"
// let profissao = "bacharel em Direito"

// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

// Eu sou Eli, tenho 28 anos, moro em Paraíso do Tocantins e sou bacharel em Direito.

// === QUESTÃO 02 ===

// letra (a)

// function somaNumeros(num1, num2){
//     return num1 + num2
// }
// const resultadoSoma = somaNumeros(8, 3)
// console.log(resultadoSoma)
// // Resultado: 11

// letra (b)

// function menorOuMaior(num1, num2){
//     return num1 >= num2
// }
// const resultadoBooleano = menorOuMaior(7, 10)
// console.log(resultadoBooleano)
// Resultado: false

// letra (c)

// let digiteUmNumero = Number(prompt("Digite um número"))

// function numeroEPar(){
//     let conferirNumero = digiteUmNumero % 2 === 0
//     console.log("Esse número é par?", conferirNumero)
// }
// numeroEPar(digiteUmNumero)
// Resultado: Esse número é par? true

// letra (d)

// let digitarMensagem = prompt("Digite uma mensagem")

// function verificarMensagem(){
//     const frase = digitarMensagem
//     console.log(frase.length)
//     console.log(frase.toUpperCase())
// }
// verificarMensagem()

// // Mensagem digitada: "Hoje é dia de descansar"
// // Impresso no console: 23; HOJE É DIA DE DESCANSAR

// === QUESTÃO 03 ===

// function operacaoSoma(num1, num2){
//     const soma = num1 + num2
//     return soma
// }
// function operacaoSubtracao(num1, num2){
//     const subtracao = num1 - num2
//     return subtracao
// }
// function operacaoMultiplicacao(num1, num2){
//     const multiplicacao = num1 * num2
//     return multiplicacao
// }
// function operacaoDivisao(num1, num2){
//     const divisao = num1 / num2
//     return divisao
// }

// const num1 = Number(prompt("Digite o primeiro número"))
// const num2 = Number(prompt("Digite o segundo número"))
// console.log("Numeros inseridos:", num1, "e", num2)
// console.log("Soma:", operacaoSoma(num1, num2))
// console.log("Diferença:", operacaoSubtracao(num1, num2))
// console.log("Multiplicacao:", operacaoMultiplicacao(num1, num2))
// console.log("Divisão:", operacaoDivisao(num1, num2))

// Numeros inseridos: 30 e 6
// Soma: 36
// Diferença: 24
// Multiplicacao: 180
// Divisão: 5





