// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


const prompt = require('prompt-sync')();

const input = prompt('Digite um número inteiro: ');
const numero = parseInt(input);

if (isNaN(numero)) {
    console.log('Por favor, insira um número inteiro válido.');
    return
} else {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}