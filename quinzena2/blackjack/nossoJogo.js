function comprarCarta() {
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    const numero = cartas[Math.floor(Math.random() * 13)]

    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

    if (numero === "A") {
        valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else {
        valor = Number(numero)
    }

    const carta = {
        texto: numero + naipe,
        valor: valor
    }
    return carta
}