type Pessoa = {
    nome: string,
    dia: number,
    mes: string,
    ano: number
}

type Data = {
    dia: number,
    mes: number,
    ano: number
}

const eli: Pessoa = {
    nome: "Eli",
    dia: 9,
    mes: "janeiro",
    ano: 1993
}

const dataEli: Data = {
    dia: 9,
    mes: 1,
    ano: 1993
}

console.log(`Olá me chamo ${eli.nome}, nasci no dia ${eli.dia} do mês de ${eli.mes} do ano de ${eli.ano}`)
console.log(`${dataEli.dia}/${dataEli.mes}/${dataEli.ano}`)