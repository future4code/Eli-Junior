// EXERCÍCIO 01
function inverteArray(array) {
  let arrayDeNumeros = []
  for (let i = array.length-1; i >= 0; i--){
    arrayDeNumeros.push(array[i])
  }
  return arrayDeNumeros
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados2 = []
  for (let item of array){
    if (item % 2 == 0){
      let elevarPor2 = item * item
      numerosParesElevados2.push(elevarPor2)
    }
  }
  return numerosParesElevados2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let retornarNumerosPares = []
  for (let item of array){
    if (item % 2 == 0){
      retornarNumerosPares.push(item)
    }
  }
  return retornarNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let numero of array){
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const expressaoA = booleano1 && booleano2 && !booleano4
  const expressaoB = (booleano1 && booleano2) || !booleano3
  const expressaoC = (booleano2 || booleano3) && (booleano4 || booleano1)
  const expressaoD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const expressaoE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [expressaoA, expressaoB, expressaoC, expressaoD, expressaoE]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayDeNumeros = []

  for (let numero = 0; arrayDeNumeros.length < n; numero++){
      if (numero % 2 === 0) {
        arrayDeNumeros.push(numero)
    }
  } 
  return arrayDeNumeros
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c && b === c){
    return "Equilátero"
  } else if (a === b || a === c || b === c) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }

  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior
  let menor

  if (num1 > num2) {
    maior = num1
    menor = num2
  } else {
    menor = num1
    maior = num2
  }

  let resultadoDivisao = (maior % menor) === 0

  let resultadoSubtracao = (maior - menor)

  let objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: resultadoDivisao,
    diferenca: resultadoSubtracao
  }

  return objeto

  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const formarRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return formarRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
