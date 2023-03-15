var minhaString: string | number = 25

console.log(minhaString)

// a) O TypeScript reclamou, dizendo que o tipo 'number' não pode ser atribuído ao tipo 'string'.

var meuNumero: number = 35

console.log(meuNumero)

// b) É preciso colocar 'number | string', para que os dois sejam aceitos.

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const vanessa : Pessoa = {
    nome: "Vanessa",
    idade: 26,
    corFavorita: "verde"
}

const sergio : Pessoa = {
    nome: "Sérgio",
    idade: 31,
    corFavorita: "laranja"
}

const renata : Pessoa = {
    nome: "Renata",
    idade: 33,
    corFavorita: "roxo"
}

console.log(vanessa.nome)

// d)

enum corFavorita {
    AMARELO = "amarelo",
    AZUL = "azul",
    VERMELHO = "vermelho",
    VERDE = "verde",
    VIOLETA = "violeta",
    LARANJA = "laranja",
    ANIL = "anil"
}

const roberta : Pessoa = {
    nome: "Roberta",
    idade: 35,
    corFavorita: corFavorita.VERDE
}

console.log(roberta.corFavorita)