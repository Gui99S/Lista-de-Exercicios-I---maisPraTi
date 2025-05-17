// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.


const prompt = require('prompt-sync')();

// Array
const fibonacci = [0, 1];

// Gera os próximos 8 números usando loop for (totalizando 10)
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log('Primeiros 10 números da sequência de Fibonacci:');
console.log(fibonacci.join(', '));