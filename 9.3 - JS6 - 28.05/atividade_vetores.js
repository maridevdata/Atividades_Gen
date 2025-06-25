const leia = require("readline-sync")

let vetor = [];
let soma = 0;

//
for (let contador = 0; contador < 10; contador++) {
    vetor[contador] = leia.questionInt('Digite um numero inteiro: ')
    soma = soma + vetor[contador]
}

// mostrar os numeros nos indices impares
console.log("\nElementos nos índices ímpares:");
for(let contador = 1; contador < 10; contador+=2) {
    console.log(vetor[contador]);
}

// mostrar apenas os numeros pares
console.log("\nElementos pares:");
for(let contador = 0; contador < 10; contador++) {
    if(vetor[contador] % 2 === 0){
        console.log(vetor[contador]);
    }
}
console.log(`\nA soma dos vetores são: ${soma}`);
console.log(`\nA média dos vetores é: ${(soma/10).toFixed(2)}`);