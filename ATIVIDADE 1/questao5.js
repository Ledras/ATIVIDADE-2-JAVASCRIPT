// questao5.js
let n = parseInt(prompt("Digite a quantidade de termos da série:"));
let termoAtual = 0;
let soma = 0;
let sequencia = [];

for (let i = 1; i <= n; i++) {
    termoAtual = (termoAtual * 10) + 1;
    sequencia.push(termoAtual);
    soma += termoAtual;
}

console.log(sequencia.join(" + "));
console.log("A soma é: " + soma);