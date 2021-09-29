// ===== Exercícios de interpretação de código =====

// === Exercício 1 ===

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Se o número informado, dividido por 2, tiver o resto 0, será impressa
// a primeira mensagem. Caso contrário, será impresso a segunda mensagem.
// b) Números pares.
// c) Números ímpares.

// === Exercício 2 ===

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) O switch case é usado quando há várias condicionais, e deixar o código mais
// organizado.

// b) O preço da fruta  Maçã  é  R$  2.25

// c) Ela vai pular para o resultado do "default".

// === Exercício 3 ===

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O programa irá pedir para o usuário digitar o primeiro número.

// b) Quando digita o número 10, aparece a mensagem "Esse número passou no teste",
// mas na linha seguinte aparece mensagem de erro no console em relação a string
// "mensagem". Quando digita -10, dá o erro no console.

// c) Sim. Primeiro, não havia a necessidade de criar uma nova let. Bastava, depois
// do primeiro "console.log", fechar a chave, utilizar o else, abrir uma nova chave
// para escrever a mensagem "Essa mensagem é secreta" dentro do console.log. O código
// correto ficaria dessa forma:

// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//     console.log("Esse número passou no teste")
// } else {
//     console.log("Essa mensagem é secreta!!!")
// }

// ===== Exercícios de escrita de código =====

// === Exercício 1 ===

// let idade = Number(prompt("Insira aqui a sua idade"))

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

// === Exercício 2 ===

// const turnoAluno = prompt("Em qual turno você estuda? (M = matutino / V = vespertino / N = noturno)")

// if (turnoAluno === 'M') {
//     console.log("Bom Dia!")
// } else if (turnoAluno === 'V') {
//     console.log("Boa Tarde!")
// } else {
//     console.log("Boa Noite!")
// }

// === Exercício 3 ===

// const turnoAluno = prompt("Em qual turno você estuda? (M = matutino / V = vespertino / N = noturno)")

// switch (turnoAluno) {
//     case 'M':
//         console.log("Bom Dia!");
//         break;
//         case 'V':
//             console.log("Boa Tarde!");
//             break;
//             case 'N':
//                 console.log("Boa Noite!");
//                 break;
//                 default:
//                     console.log("Opção inválida");
// }

// === Exercício 4 ===

// let generoFilme = prompt("Qual é o gênero do filme que você vai assistir?")
// let ingressoFilme = Number(prompt("Qual é o valor do ingresso do filme?"))

// if (generoFilme === "fantasia" && ingressoFilme < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }









