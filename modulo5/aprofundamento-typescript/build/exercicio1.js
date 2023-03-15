"use strict";
var minhaString = 25;
console.log(minhaString);
var meuNumero = 35;
console.log(meuNumero);
const vanessa = {
    nome: "Vanessa",
    idade: 26,
    corFavorita: "verde"
};
const sergio = {
    nome: "Sérgio",
    idade: 31,
    corFavorita: "laranja"
};
const renata = {
    nome: "Renata",
    idade: 33,
    corFavorita: "roxo"
};
console.log(vanessa.nome);
var corFavorita;
(function (corFavorita) {
    corFavorita["AMARELO"] = "amarelo";
    corFavorita["AZUL"] = "azul";
    corFavorita["VERMELHO"] = "vermelho";
    corFavorita["VERDE"] = "verde";
    corFavorita["VIOLETA"] = "violeta";
    corFavorita["LARANJA"] = "laranja";
    corFavorita["ANIL"] = "anil";
})(corFavorita || (corFavorita = {}));
const roberta = {
    nome: "Roberta",
    idade: 35,
    corFavorita: corFavorita.VERDE
};
console.log(roberta.corFavorita);
