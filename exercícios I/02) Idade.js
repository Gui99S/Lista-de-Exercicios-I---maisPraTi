// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

function classificarIdade() {
    const input = prompt("Digite sua idade: ");
    const idade = parseInt(input);

    // Validação
    if (isNaN(idade) || idade < 0) {
        console.log("Por favor, digite uma idade válida.");
        return;
    }

    // Categorias de idade
    if (idade <= 12) {
        console.log("Criança (0-12 anos)");
    } else if (idade <= 17) {
        console.log("Adolescente (13-17 anos)");
    } else if (idade <= 59) {
        console.log("Adulto (18-59 anos)");
    } else {
        console.log("Idoso (60+ anos)");
    }
}

classificarIdade();