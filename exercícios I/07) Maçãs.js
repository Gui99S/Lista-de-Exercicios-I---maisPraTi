// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const quantidadeStr = prompt('Digite o número de maçãs compradas: ');
const quantidade = parseInt(quantidadeStr);

if (isNaN(quantidade) || quantidade < 0) {
    console.log('Por favor, insira um número válido e positivo.');
} else if(quantidade === 1) {
    console.log(`O valor total da compra de 1 maçã foi de R$ 0,30`);
} else {
    const precoUnitario = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * precoUnitario;
    console.log(`O valor total da compra de ${quantidade} maçãs foi de R$ ${total.toFixed(2).replace('.', ',')}.`);
}