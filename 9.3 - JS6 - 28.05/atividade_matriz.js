const leia = require("readline-sync");

let matriz = [];
let diagonalPrincipal = 0;
let diagonalSecundaria = 0;

for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = leia.questionInt(`Digite o valor da matriz 3x3: `);
    }
}

console.log("\nElementos da Diagonal Principal:");
for (let contador = 0; contador < 3; contador++) {
    console.log(matriz[contador][contador]);
    diagonalPrincipal += matriz[contador][contador];
}

console.log("\nElementos da Diagonal Secundária:");
for (let contador = 0; contador < 3; contador++) {
    console.log(matriz[contador][2 - contador]);
    diagonalSecundaria += matriz[contador][2 - contador];
}

console.log(`\nSoma dos Elementos da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`\nSoma dos Elementos da Diagonal Secundária: ${diagonalSecundaria}`);