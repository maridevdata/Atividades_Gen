const leia = require('readline-sync')

let nota1 = leia.questionFloat('Por favor, digite seu nota 1: ');
let nota2 = leia.questionFloat('Por favor, digite seu nota 2: ');
let nota3 = leia.questionFloat('Por favor, digite seu nota 3: ');
let nota4 = leia.questionFloat('Por favor, digite seu nota 4: ');

let mediaNota = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`\nMedia final: ${mediaNota.toFixed(1)}`);