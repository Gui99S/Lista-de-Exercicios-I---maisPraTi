// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.


const prompt = require('prompt-sync')();

function calcularIMC() {
    const peso = parseFloat(prompt("Digite seu peso em kg: "));
    const altura = parseFloat(prompt("Digite sua altura em metros: "));

    // Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Por favor, digite valores válidos.");
        return;
    }

    // cálculo do IMC
    const imc = peso / (altura * altura);

    // categorias de peso (if-else)
    let categoria;
    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
    console.log(`Categoria: ${categoria}`);
    
    console.log("\nClassificação do IMC:");
    console.log("Baixo peso: IMC < 18.5");
    console.log("Peso normal: IMC 18.5 - 24.9");
    console.log("Sobrepeso: IMC 25 - 29.9");
    console.log("Obesidade: IMC ≥ 30");
}

calcularIMC();