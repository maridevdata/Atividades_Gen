const leia = require('readline-sync');

let idade = 0;
let menores21 = 0;
let maiores50 = 0;

while (true) {
    idade = leia.questionInt("Digite uma idade: ");

    if (idade <= -1) {
        break; 
    }
    if (idade < 21) {
        menores21++;
    } else if (idade >= 50) {
        maiores50++;
    }

}

console.log("\nTotal de pessoas menores de 21 anos: " + menores21);
console.log("\nTotal de pessoas maiores de 50 anos: " + maiores50);