"use strict";
var Genero;
(function (Genero) {
    Genero["ACAO"] = "a\u00E7\u00E3o";
    Genero["DRAMA"] = "drama";
    Genero["COMEDIA"] = "com\u00E9dia";
    Genero["ROMANCE"] = "romance";
    Genero["TERROR"] = "terror";
})(Genero || (Genero = {}));
const batman = {
    nome: "Batman",
    anoLancamento: 2022,
    genero: Genero.ACAO,
    pontuacao: 86
};
console.log(batman);
//# sourceMappingURL=exercicio3.js.map