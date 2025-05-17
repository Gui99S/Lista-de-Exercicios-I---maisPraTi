// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log(`
    MENU
1. Subtração
2. Multiplicação
3. Divisão
----------------
`);

const escolha = parseInt(prompt('Escolha uma opção (1-3): '));

switch (escolha) {
    case 1: {
        const num1 = parseFloat(prompt("Digite o primeiro número: "));
        const num2 = parseFloat(prompt("Digite o segundo número: "));
        
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Erro: valores inválidos!");
        } else {
            const resultado = num1 - num2
            console.log(`Resultado: ${resultado}`);
        }
        break;
    }
    
    case 2: {
        const num1 = parseFloat(prompt("Digite o primeiro número: "));
        const num2 = parseFloat(prompt("Digite o segundo número: "));
        
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Erro: valores inválidos!");
        } else {
            const resultado = num1 * num2
            console.log(`Resultado: ${resultado}`);
        }
        break;
    }
    
    case 3: {
        const num1 = parseFloat(prompt("Digite o dividendo: "));
        const num2 = parseFloat(prompt("Digite o divisor: "));
        
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Erro: valores inválidos!");
        } else if (num2 === 0) {
            console.log("Erro: divisão por zero!");
        } else {
            const resultado = num1 / num2
            console.log(`Resultado: ${resultado.toFixed(2)}`);
        }
        break;
    }
    
    default:
        console.log("Opção inválida! Escolha entre 1 e 3.");
}