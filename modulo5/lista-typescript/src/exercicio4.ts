enum Setor {
    MARKETING = "marketing",
    FINANCEIRO = "financeiro",
    VENDAS = "vendas"
}

type ListaCadastral = {
    nome: string,
    salario: number,
    setor: Setor,
    presencial: boolean
}

const funcionarios: ListaCadastral[] = [
	{ nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
	{ nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "João", salario: 2800, setor: Setor.MARKETING, presencial: false},
	{ nome: "Josué", salario: 5500, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true},
	{ nome: "Paola", salario: 3500, setor: Setor.MARKETING, presencial: true }
]

function buscarSetorEPresencial(funcionarios: ListaCadastral[]): ListaCadastral[] {
    return funcionarios.filter(
        (funcionarios) => {
            return funcionarios.setor === Setor.MARKETING && funcionarios.presencial === true
        }
    )
}

const resultado = buscarSetorEPresencial(funcionarios)

console.log(resultado)