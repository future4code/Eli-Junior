// ===== Exercícios de interpretação de código =====

// === Exercício 1 ===

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele
// Virginia Cavendish
// Globo, 14h

// === Exercício 2 ===

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)

// Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD

// b) Ele pega as informações anteriores e joga no novo "const".

// === Exercício 3 ===

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a)

// false
// undefined

// b) O console buscou o valor que está dentro da propriedade.
// Na segunda, não havia nenhuma propriedade chamada "altura", por isso retornou indefinido.

// ===== Exercícios de escrita de código =====

// === Exercício 1 ===

// a)

// const minhaApresentacao = {
//     nome: "Eli",
//     apelidos: ["Junior", "Juninho", "Elizinho"]
// }

// console.log(`Eu sou ${minhaApresentacao.nome}, mas pode me chamar de: ${minhaApresentacao.apelidos[0]}, ${minhaApresentacao.apelidos[1]} ou ${minhaApresentacao.apelidos[2]}`)

// Eu sou Eli, mas pode me chamar de: Junior, Juninho ou Elizinho

// b)

// const novaApresentacao = {
//     ...minhaApresentacao,
//     apelidos: ["Bart", "Tommy", "Carl"]
// }

// console.log(`Eu sou ${novaApresentacao.nome}, mas pode me chamar de: ${novaApresentacao.apelidos[0]}, ${novaApresentacao.apelidos[1]} ou ${novaApresentacao.apelidos[2]}`)

// Eu sou Eli, mas pode me chamar de: Bart, Tommy ou Carl

// === Exercício 2 ===

// a)

// const primeiraPessoa = {
//     nome: "Renata",
//     idade: 36,
//     profissao: "Economista"
// }

// const segundaPessoa = {
//     ...primeiraPessoa,
//     nome: "Bruno",
//     idade: 31
// }

// b)

// function minhaFuncao(primeiraPessoa, segundaPessoa) {
//     const minhaArray = [primeiraPessoa.nome, segundaPessoa.nome, primeiraPessoa.nome.length, segundaPessoa.nome.length, primeiraPessoa.idade, segundaPessoa.idade, primeiraPessoa.profissao, segundaPessoa.profissao, primeiraPessoa.profissao.length, segundaPessoa.profissao.length]
//     return minhaArray
// }

// console.log(minhaFuncao(primeiraPessoa, segundaPessoa))

// (10) ['Renata', 'Bruno', 6, 5, 36, 31, 'Economista', 'Economista', 10, 10]

// === Exercício 3 ===

// let listaDeCompras = {
//     carrinho: [],
// }

// const goiaba = {
//     disponibilidade: true
// }

// const uva = {
//     disponibilidade: false
// }

// const manga = {
//     disponibilidade: true
// }

// function verFrutas(goiaba) {
//     listaDeCompras.carrinho.push(goiaba)
// }

// function verFrutas(uva) {
//     listaDeCompras.carrinho.push(uva)
// }

// function verFrutas(manga) {
//     listaDeCompras.carrinho.push(manga)
// }

// console.log(listaDeCompras.carrinho)







