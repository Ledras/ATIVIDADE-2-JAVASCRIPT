// questao1.js
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 20):"));
    
    if (palpite > numeroSecreto) {
        alert("Dica: O número secreto é menor!");
    } else if (palpite < numeroSecreto) {
        alert("Dica: O número secreto é maior!");
    }
} while (palpite !== numeroSecreto);

alert("Parabéns! Você acertou. O número secreto era " + numeroSecreto);