const leia = require ("readline-sync");

let quantidade;
let quantidade2;

quantidade = leia.questionFloat("\nDigite o valor do salario: ", {limitMessage: "\nValor nao identificado! Por favor, digite o valor do salario apenas com numeros: "});

console.log("\nO salario é de: R$ "+quantidade);

quantidade2 = leia.questionFloat("\nDigite o valor do abono: ", {limitMessage: "\nValor nao identificado! Por favor, digite o valor do abono apenas com numeros! "});

console.log("\nO abono é de: R$ "+quantidade2);

console.log("\nO valor do novo salario é de: R$ ",quantidade+quantidade2)