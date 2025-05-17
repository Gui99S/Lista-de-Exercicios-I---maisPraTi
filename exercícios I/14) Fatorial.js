// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro positivo: '));

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log('Por favor, insira um número inteiro positivo válido.');
} else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}.`);
}