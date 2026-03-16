// questao2.js
let opcoes = ["pedra", "papel", "tesoura"];
let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura?").toLowerCase();
let indiceComputador = Math.floor(Math.random() * 3);
let escolhaComputador = opcoes[indiceComputador];

console.log("Você escolheu: " + escolhaUsuario);
console.log("O computador escolheu: " + escolhaComputador);

if (escolhaUsuario === escolhaComputador) {
    console.log("Resultado: Empate!");
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Resultado: Você venceu!");
} else {
    console.log("Resultado: O computador venceu!");
}