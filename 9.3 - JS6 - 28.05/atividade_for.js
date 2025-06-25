const leia = require('readline-sync');

let contador, intervalo;

for (contador = 1; contador <= 4; contador++) {
    console.log("\n" + contador + "ª verificação");

    let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
    let numero2 = leia.questionInt("Digite o segundo numero do intervalo: ");

    if (numero1 >= numero2) {
        console.log("Intervalo inválido!");
    } else {
        console.log("No Intervalo entre " + numero1 + " e " + numero2 + ": ");
        for (intervalo = numero1; intervalo <= numero2; intervalo++) {
            if (intervalo % 3 === 0 && intervalo % 5 === 0) {
                console.log(intervalo + " é múltiplo de 3 e 5");
            }
        }
    }
}