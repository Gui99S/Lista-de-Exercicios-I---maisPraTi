// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

const input = prompt('Digite a nota (0 a 10): ');
const nota = parseFloat(input);

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Erro: Digite apenas números entre 0 e 10!');
} else {
    if (nota >= 6) {
        console.log('Aprovado');
    } else if (nota >= 5) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}
