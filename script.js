const prompt = require("prompt-sync")();

const convidados = Number(prompt("Digite o número de convidados para o seu buffet: "));

let carne = 300 * convidados * 1.06;
let carneKg = carne / 1000;
let refrigerante = 3 * convidados + 9;
let doce = convidados;

if (convidados < 50) {
    console.log("Número insuficiente de convidados para contratar o buffet.");
} else {
    if (convidados <= 100) {
        console.log("Evento pequeno");
    } else if (convidados <= 200) {
        console.log("Evento médio");
    } else {
        console.log("Evento grande");
    }

    console.log("Será concedido:");
    console.log(carneKg.toFixed(2), "kg de carne");
    console.log(refrigerante, "latas de refrigerante");
    console.log(doce, "doces");
}