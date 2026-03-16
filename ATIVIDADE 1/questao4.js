// questao4.js
let linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));
let linhaAtual = "";

for (let i = 1; i <= linhas; i++) {
    linhaAtual += "*";
    console.log(linhaAtual);
}