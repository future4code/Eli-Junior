type TiposFilme = {
    nome: string,
    anoLancamento: number,
    genero: Genero,
    pontuacao?: number
}

enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const batman: TiposFilme = {
    nome: "Batman",
    anoLancamento: 2022,
    genero: Genero.ACAO,
    pontuacao: 86
}

console.log(batman)



