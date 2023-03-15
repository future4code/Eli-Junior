// ===== Exercícios de interpretação de código =====

// === Exercício 1 ===

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
// })

// Serão impressos os nomes e seus respectivos apelidos no console, conforme ordenado na const "usuarios":
// Posição 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// Posição 1: {nome: 'Laís Petra', apelido: 'Laura'}
// Posição 2: {nome: 'Letícia Chijo', apelido: 'Chijo'}

// === Exercício 2 ===

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
// })
  
// console.log(novoArrayB)

// O console só vai retornar os itens que são chamados "nome":
// "Amanda Rangel", "Laís Petra", "Letícia Chijo"

// === Exercício 3 ===

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
// })
  
// console.log(novoArrayC)

// O console irá retornar os itens que NÃO possuem o "Chijo" na "caixinha":
// {nome: 'Amanda Rangel', apelido: 'Mandi'}
// {nome: 'Laís Petra', apelido: 'Laura}

// ===== Exercícios de escrita de código =====

// === Exercício 1 ===

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// === Letra A ===

// function retornaNome(item) {
//     return item.nome
// }

// const nomesDoguinhos = pets.map(retornaNome)

// console.log(nomesDoguinhos)

// === Letra B ===

// function filtraDogsSalsicha(item) {
//     return item.raca === "Salsicha"
// }

// const listarDogsSalsicha = pets.filter(filtraDogsSalsicha)

// console.log(listarDogsSalsicha)

// === Letra C ===

// const selecionarSoPoodles=pets.filter((item) => {
//     return item.raca === "Poodle"})

// function imprimeMensagem(item) {
//     return "Você ganhou um cupom de 10% de desconto para tosar o/a " + item.nome
// }

// const mensagemDogsPoodle = selecionarSoPoodles.map(imprimeMensagem)

// console.log(mensagemDogsPoodle)

// === Exercício 2 ===

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// === Letra A ===

// function retornaNome(item) {
//     return item.nome
// }

// const nomesItensCompra = produtos.map(retornaNome)

// console.log(nomesItensCompra)

// === Letra B ===

// === Letra C ===

// function filtrarBebidas(item) {
//     return item.categoria === "Bebidas"
// }

// const listarBebidas = produtos.filter(filtrarBebidas)

// console.log(listarBebidas)

// === Letra D ===

// let filtrarNomeYpe = produtos.filter((item) => {
//     return item.nome.includes("Ypê") === true
// })

// console.log(filtrarNomeYpe)

// === Letra E ===







