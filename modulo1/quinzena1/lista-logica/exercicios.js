// Exemplos

// Exercício 0A
function soma() {
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Informe a altura do retângulo"))
  const largura = Number(prompt("Informe a largura do retângulo"))

  const areaDoRetangulo = altura * largura
  
  console.log(areaDoRetangulo)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt("Insira o ano atual")
  let anoNascimento = prompt("Insira o ano do seu nascimento")
  
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  let seuPeso = Number(prompt("Informe o seu peso em kg"))
  let suaAltura = Number(prompt("Informe sua altura em metros"))

  let resultadoIMC = seuPeso / (suaAltura * suaAltura)

  console.log(resultadoIMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const seuNome = prompt("Informe o seu nome")
  const suaIdade = prompt("Informe sua idade")
  const seuEmail = prompt("Informe o seu e-mail")

  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Informe sua primeira cor favorita")
  const segundaCor = prompt("Informe sua segunda cor favorita")
  const terceiraCor = prompt("Informe sua terceira cor favorita")

  console.log([primeiraCor, segundaCor, terceiraCor])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const pedirUmaString = prompt("Digite uma string (palavra)")
  const palavraMaiuscula = pedirUmaString.toUpperCase()

  console.log(palavraMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let valorCustoDoEvento = Number(prompt("Insira o custo total do evento teatral"))
  let valorDoIngresso = Number(prompt("Insira o valor do ingresso a ser cobrado"))

  let ingressosParaVender = valorCustoDoEvento / valorDoIngresso

  console.log(ingressosParaVender)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const primeiraString = prompt("Digite a primeira string (palavra)")
  const segundaString = prompt("Digite a segunda string (palavra)")

  const confereResultado = primeiraString.length === segundaString.length

  console.log(confereResultado)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Digite a primeira string (palavra)")
  const segundaString = prompt("Digite a segunda string (palavra)")

  const confereStrings1 = primeiraString.toLowerCase() == primeiraString.toUpperCase()
  const confereStrings2 = segundaString.toLowerCase() == segundaString.toUpperCase()

  const confereResultado = confereStrings1 === confereStrings2

  console.log(confereResultado)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Insira aqui o ano atual"))
  const anoNascimento = Number(prompt("Insira o seu ano de nascimento"))
  const anoEmissaoID = Number(prompt("Insira o ano de emissão da sua carteira de identidade"))

  const idade = anoAtual - anoNascimento
  const anosDeCarteira = anoAtual - anoEmissaoID

  const condicaoRenovacao1 = idade <= 20 && anosDeCarteira >= 5
  const condicaoRenovacao2 = idade <= 50 && anosDeCarteira >= 10
  const condicaoRenovacao3 = idade >= 51 && anosDeCarteira >= 15

  if (idade <= 20) {
    console.log(condicaoRenovacao1)
  } else if (idade <= 50) {
    console.log(condicaoRenovacao2)
  } else {
    console.log(condicaoRenovacao3)
  }
}

// Exercício 11
function checaAnoBissexto() {
  let ano = Number(prompt("Para verificar se o ano é bissexto, insira um ano")) 

  let anoBissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)

  console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const pergunta1 = prompt("Você tem mais de 18 anos?")
  const pergunta2 = prompt("Você possui ensino médio completo?")
  const pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const primeiraComparacao = pergunta1 && pergunta2 == "sim"
  const segundaComparacao =  pergunta2 && pergunta3 == "sim"
  const comparacaoFinal = primeiraComparacao && segundaComparacao == "sim"

  console.log(comparacaoFinal)
}