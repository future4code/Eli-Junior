"use strict";
const usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
function buscarUsuariosAdmin(usuarios) {
    return usuarios.filter((usuarios) => {
        return usuarios.role === "admin";
    });
}
let resultadoUsuarios = buscarUsuariosAdmin(usuarios);
console.log(resultadoUsuarios);
//# sourceMappingURL=exercicio5.js.map