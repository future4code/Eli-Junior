// === Exercícios de interpretação de código ===

// === QUESTÃO 1 ===

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// a. false
// b. false
// c. true
// d. boolean

// === QUESTÃO 2 ===

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const resultado = primeiroNumero + segundoNumero

// console.log(resultado)

// === QUESTÃO 3 ===

// Primeiro, é preciso colocar o "Number" (com inicial em letra maiúscula)
// antes da pergunta do prompt, para o sistema entender que está sendo inserido
// um número. E por questão estética, em vez de colocar "soma", é indicado
// colocar "resultado", pois é o resultado da soma que será impresso no console,
// além da soma já ser indicada com o sinal de +.

// === Exercícios de escrita de código ===

// === QUESTÃO 1 ===

// const suaIdade = Number(prompt("Qual é a sua idade?"))
// const idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"))

// console.log("Sua idade é maior do que a do seu(ua) melhor amigo(a)?", suaIdade > idadeMelhorAmigo)

// const diferencaIdade = suaIdade - idadeMelhorAmigo

// console.log("Diferença de idade:", diferencaIdade)

// Sua idade é maior do que a do seu(ua) melhor amigo(a)? false
// Diferença de idade: -6

// === QUESTÃO 2 ===

// a) const numeroPar = Number(prompt("Insira um número par"))

// const resultado = numeroPar % 2

// b) console.log("Resto da divisão:", resultado)

// c) Sim, o resto da divisão sempre dá 0.

// d) Será impresso no console algum número que não seja 0. Por ser ímpar, sempre terá resto.

// === QUESTÃO 3 ===

// const suaIdade = Number(prompt("Qual é a sua idade?"))

// console.log("Sua idade em meses:", suaIdade * 12)
// console.log("Sua idade em dias:", suaIdade * 365)
// console.log("Sua idade em horas:", suaIdade * 8760)

// Idade: 28
// Sua idade em meses: 336
// Sua idade em dias: 10220
// Sua idade em horas: 245280

// === QUESTÃO 4 ===

// const primeiroNumero = Number(prompt("Insira o primeiro número"))
// const segundoNumero = Number(prompt("Insira o segundo número"))

// console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
// console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
// console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
// console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)

// Primeiro número: 30
// Segundo número: 2

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? false





