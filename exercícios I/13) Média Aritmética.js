// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let qntd = 0;

while (true) {
  const input = prompt('Digite um número decimal (ou digite 0 para parar): ');
  const num = parseFloat(input);

  if (isNaN(num)) {
    console.log('Por favor, insira um número válido.');
    continue;
  }

  if (num === 0) {
    break;
  }

  soma += num;
  qntd++;
}

if (qntd === 0) {
  console.log('Nenhum número foi inserido.');
} else {
  const media = soma / qntd;
  console.log(`A média aritmética é: ${media.toFixed(2)}`);
}