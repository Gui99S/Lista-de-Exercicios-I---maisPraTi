// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

function verificarParOuImpar() {
    const input = prompt("Digite um número inteiro: ");
    const numero = parseInt(input);

    // Verifica se o valor digitado é válido
    if (isNaN(numero)) {
        console.log("Por favor, digite um número inteiro válido.");
        return;
    }
    
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

verificarParOuImpar();